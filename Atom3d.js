// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Camera position
camera.position.z = 50;

// Atom configuration
let atomConfig = { protons: 1, neutrons: 0, electrons: 1 };
let particles = [];
let electronOrbits = [];
let nucleus;

// Colors
const protonColor = 0xff4444; // red
const neutronColor = 0xffff44; // yellow
const electronColor = 0x44ffff; // cyan
const orbitColor = 0x888888; // gray

function createAtom() {
    // Clear previous particles
    particles.forEach(p => scene.remove(p.mesh));
    electronOrbits.forEach(o => scene.remove(o));
    if (nucleus) scene.remove(nucleus);
    particles = [];
    electronOrbits = [];

    // Create nucleus
    const nucleusGeometry = new THREE.SphereGeometry(5, 32, 32);
    const nucleusMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        transparent: true,
        opacity: 0.5
    });
    nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Create protons and neutrons
    const nucleonRadius = 2;
    for (let i = 0; i < atomConfig.protons; i++) {
        createNucleon('proton', nucleonRadius, protonColor);
    }
    for (let i = 0; i < atomConfig.neutrons; i++) {
        createNucleon('neutron', nucleonRadius, neutronColor);
    }

    // Create electrons and orbits
    const electronShellLimits = [2, 8, 18, 32, 50, 72, 98];
    let electronCount = atomConfig.electrons;
    let shellDistance = 15;

    for (let shell of electronShellLimits) {
        if (electronCount <= 0) break;

        const electronsInThisShell = Math.min(shell, electronCount);
        createElectronShell(electronsInThisShell, shellDistance);
        electronCount -= electronsInThisShell;
        shellDistance += 10;
    }
}

function createNucleon(type, radius, color) {
    const geometry = new THREE.SphereGeometry(radius, 16, 16);
    const material = new THREE.MeshPhongMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    
    // Random position within nucleus
    const position = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
    );
    
    // Random velocity
    const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
    );
    
    mesh.position.copy(position);
    scene.add(mesh);
    
    particles.push({
        type,
        mesh,
        velocity,
        position
    });
}

function createElectronShell(electronCount, distance) {
    // Create orbit ring
    const orbitGeometry = new THREE.TorusGeometry(distance, 0.2, 16, 100);
    const orbitMaterial = new THREE.MeshBasicMaterial({ 
        color: orbitColor, 
        transparent: true, 
        opacity: 0.3 
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.random() * Math.PI;
    orbit.rotation.y = Math.random() * Math.PI;
    scene.add(orbit);
    electronOrbits.push(orbit);

    // Create electrons
    const angleStep = (Math.PI * 2) / electronCount;
    const electronGeometry = new THREE.SphereGeometry(1, 16, 16);
    const electronMaterial = new THREE.MeshPhongMaterial({ color: electronColor });
    
    for (let i = 0; i < electronCount; i++) {
        const angle = angleStep * i;
        const electron = new THREE.Mesh(electronGeometry, electronMaterial);
        
        // Position electron on orbit
        electron.position.x = Math.cos(angle) * distance;
        electron.position.z = Math.sin(angle) * distance;
        
        // Random y position to create 3D distribution
        electron.position.y = (Math.random() - 0.5) * distance * 0.5;
        
        // Store angle for animation
        electron.userData = { 
            angle: Math.random() * Math.PI * 2,
            speed: 0.02 + Math.random() * 0.01,
            distance,
            orbitRotation: orbit.rotation 
        };
        
        scene.add(electron);
        particles.push({
            type: 'electron',
            mesh: electron,
            position: electron.position
        });
    }
}

function updateParticles() {
    // Update nucleons (protons and neutrons)
    particles.filter(p => p.type !== 'electron').forEach(particle => {
        // Apply velocity
        particle.position.add(particle.velocity);
        
        // Keep nucleons near center (nucleus)
        const centerDistance = particle.position.length();
        if (centerDistance > 5) {
            particle.velocity.add(
                particle.position.clone().negate().normalize().multiplyScalar(0.01)
            );
        }
        
        // Apply repulsion between nucleons
        particles.filter(p => p !== particle && p.type !== 'electron').forEach(other => {
            const distance = particle.position.distanceTo(other.position);
            if (distance < 4) {
                const direction = particle.position.clone().sub(other.position).normalize();
                particle.velocity.add(direction.multiplyScalar(0.005));
            }
        });
        
        // Apply damping
        particle.velocity.multiplyScalar(0.98);
        
        // Update mesh position
        particle.mesh.position.copy(particle.position);
    });
    
    // Update electrons
    particles.filter(p => p.type === 'electron').forEach(particle => {
        const { angle, speed, distance, orbitRotation } = particle.mesh.userData;
        particle.mesh.userData.angle += speed;
        
        // Calculate position on orbit with 3D rotation
        const x = Math.cos(angle) * distance;
        const z = Math.sin(angle) * distance;
        
        // Apply orbit rotation
        const position = new THREE.Vector3(x, 0, z);
        position.applyQuaternion(
            new THREE.Quaternion().setFromEuler(orbitRotation)
        );
        
        particle.mesh.position.copy(position);
    });
}

// Handle atom selection
document.getElementById('atom').addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'hydrogen':
            atomConfig = { protons: 1, neutrons: 0, electrons: 1 };
            break;
        case 'helium':
            atomConfig = { protons: 2, neutrons: 2, electrons: 2 };
            break;
        case 'lithium':
            atomConfig = { protons: 3, neutrons: 3, electrons: 3 };
            break;
        case 'beryllium':
            atomConfig = { protons: 4, neutrons: 5, electrons: 4 };
            break;
        case 'boron':
            atomConfig = { protons: 5, neutrons: 6, electrons: 5 };
            break;
        case 'carbon':
            atomConfig = { protons: 6, neutrons: 6, electrons: 6 };
            break;
        case 'nitrogen':
            atomConfig = { protons: 7, neutrons: 7, electrons: 7 };
            break;
        case 'oxygen':
            atomConfig = { protons: 8, neutrons: 8, electrons: 8 };
            break;
        case 'fluorine':
            atomConfig = { protons: 9, neutrons: 10, electrons: 9 };
            break;
        case 'neon':
            atomConfig = { protons: 10, neutrons: 10, electrons: 10 };
            break;
        case 'sodium':
            atomConfig = { protons: 11, neutrons: 12, electrons: 11 };
            break;
        case 'magnesium':
            atomConfig = { protons: 12, neutrons: 12, electrons: 12 };
            break;
        case 'aluminum':
            atomConfig = { protons: 13, neutrons: 14, electrons: 13 };
            break;
        case 'silicon':
            atomConfig = { protons: 14, neutrons: 14, electrons: 14 };
            break;
        case 'phosphorus':
            atomConfig = { protons: 15, neutrons: 16, electrons: 15 };
            break;
        case 'sulfur':
            atomConfig = { protons: 16, neutrons: 16, electrons: 16 };
            break;
        case 'chlorine':
            atomConfig = { protons: 17, neutrons: 18, electrons: 17 };
            break;
        case 'argon':
            atomConfig = { protons: 18, neutrons: 22, electrons: 18 };
            break;
        case 'potassium':
            atomConfig = { protons: 19, neutrons: 20, electrons: 19 };
            break;
        case 'calcium':
            atomConfig = { protons: 20, neutrons: 20, electrons: 20 };
            break;
         case 'scandium':
            atomConfig = { protons: 21, neutrons: 24, electrons: 21 };
            break;
        case 'titanium':
            atomConfig = { protons: 22, neutrons: 26, electrons: 22 };
            break;
        case 'vanadium':
            atomConfig = { protons: 23, neutrons: 28, electrons: 23 };
            break;
        case 'chromium':
            atomConfig = { protons: 24, neutrons: 28, electrons: 24 };
            break;
        case 'manganese':
            atomConfig = { protons: 25, neutrons: 30, electrons: 25 };
            break;
        case 'iron':
            atomConfig = { protons: 26, neutrons: 30, electrons: 26 };
            break;
        case 'cobalt':
            atomConfig = { protons: 27, neutrons: 32, electrons: 27 };
            break;
        case 'nickel':
            atomConfig = { protons: 28, neutrons: 31, electrons: 28 };
            break;
        case 'copper':
            atomConfig = { protons: 29, neutrons: 35, electrons: 29 };
            break;
        case 'zinc':
            atomConfig = { protons: 30, neutrons: 35, electrons: 30 };
            break;
        case 'gallium':
            atomConfig = { protons: 31, neutrons: 39, electrons: 31 };
            break;
        case 'germanium':
            atomConfig = { protons: 32, neutrons: 41, electrons: 32 };
            break;
        case 'arsenic':
            atomConfig = { protons: 33, neutrons: 42, electrons: 33 };
            break;
        case 'selenium':
            atomConfig = { protons: 34, neutrons: 45, electrons: 34 };
            break;
        case 'bromine':
            atomConfig = { protons: 35, neutrons: 45, electrons: 35 };
            break;
        case 'krypton':
            atomConfig = { protons: 36, neutrons: 48, electrons: 36 };
            break;
        case 'rubidium':
            atomConfig = { protons: 37, neutrons: 48, electrons: 37 };
            break;
        case 'strontium':
            atomConfig = { protons: 38, neutrons: 50, electrons: 38 };
            break;
        case 'yttrium':
            atomConfig = { protons: 39, neutrons: 50, electrons: 39 };
            break;
        case 'zirconium':
            atomConfig = { protons: 40, neutrons: 51, electrons: 40 };
            break;
        case 'niobium':
            atomConfig = { protons: 41, neutrons: 52, electrons: 41 };
            break;
        case 'molybdenum':
            atomConfig = { protons: 42, neutrons: 54, electrons: 42 };
            break;
        case 'technetium':
            atomConfig = { protons: 43, neutrons: 55, electrons: 43 };
            break;
        case 'ruthenium':
            atomConfig = { protons: 44, neutrons: 57, electrons: 44 };
            break;
        case 'rhodium':
            atomConfig = { protons: 45, neutrons: 58, electrons: 45 };
            break;
        case 'palladium':
            atomConfig = { protons: 46, neutrons: 60, electrons: 46 };
            break;
        case 'silver':
            atomConfig = { protons: 47, neutrons: 61, electrons: 47 };
            break;
        case 'cadmium':
            atomConfig = { protons: 48, neutrons: 64, electrons: 48 };
            break;
        case 'indium':
            atomConfig = { protons: 49, neutrons: 66, electrons: 49 };
            break;
        case 'tin':
            atomConfig = { protons: 50, neutrons: 69, electrons: 50 };
            break;
        case 'antimony':
            atomConfig = { protons: 51, neutrons: 71, electrons: 51 };
            break;
        case 'tellurium':
            atomConfig = { protons: 52, neutrons: 76, electrons: 52 };
            break;
        case 'iodine':
            atomConfig = { protons: 53, neutrons: 74, electrons: 53 };
            break;
        case 'xenon':
            atomConfig = { protons: 54, neutrons: 77, electrons: 54 };
            break;
        case 'cesium':
            atomConfig = { protons: 55, neutrons: 78, electrons: 55 };
            break;
        case 'barium':
            atomConfig = { protons: 56, neutrons: 81, electrons: 56 };
            break;
        case 'lanthanum':
            atomConfig = { protons: 57, neutrons: 82, electrons: 57 };
            break;
        case 'cerium':
            atomConfig = { protons: 58, neutrons: 82, electrons: 58 };
            break;
        case 'praseodymium':
            atomConfig = { protons: 59, neutrons: 82, electrons: 59 };
            break;
        case 'neodymium':
            atomConfig = { protons: 60, neutrons: 84, electrons: 60 };
            break;
        case 'promethium':
            atomConfig = { protons: 61, neutrons: 84, electrons: 61 };
            break;
        case 'samarium':
            atomConfig = { protons: 62, neutrons: 88, electrons: 62 };
            break;
        case 'europium':
            atomConfig = { protons: 63, neutrons: 89, electrons: 63 };
            break;
        case 'gadolinium':
            atomConfig = { protons: 64, neutrons: 93, electrons: 64 };
            break;
        case 'terbium':
            atomConfig = { protons: 65, neutrons: 94, electrons: 65 };
            break;
        case 'dysprosium':
            atomConfig = { protons: 66, neutrons: 97, electrons: 66 };
            break;
        case 'holmium':
            atomConfig = { protons: 67, neutrons: 98, electrons: 67 };
            break;
        case 'erbium':
            atomConfig = { protons: 68, neutrons: 99, electrons: 68 };
            break;
        case 'thulium':
            atomConfig = { protons: 69, neutrons: 100, electrons: 69 };
            break;
        case 'ytterbium':
            atomConfig = { protons: 70, neutrons: 103, electrons: 70 };
            break;
        case 'lutetium':
            atomConfig = { protons: 71, neutrons: 104, electrons: 71 };
            break;
        case 'hafnium':
            atomConfig = { protons: 72, neutrons: 106, electrons: 72 };
            break;
        case 'tantalum':
            atomConfig = { protons: 73, neutrons: 108, electrons: 73 };
            break;
        case 'tungsten':
            atomConfig = { protons: 74, neutrons: 110, electrons: 74 };
            break;
        case 'rhenium':
            atomConfig = { protons: 75, neutrons: 111, electrons: 75 };
            break;
        case 'osmium':
            atomConfig = { protons: 76, neutrons: 114, electrons: 76 };
            break;
        case 'iridium':
            atomConfig = { protons: 77, neutrons: 115, electrons: 77 };
            break;
        case 'platinum':
            atomConfig = { protons: 78, neutrons: 117, electrons: 78 };
            break;
        case 'gold':
            atomConfig = { protons: 79, neutrons: 118, electrons: 79 };
            break;
        case 'mercury':
            atomConfig = { protons: 80, neutrons: 121, electrons: 80 };
            break;
        case 'thallium':
            atomConfig = { protons: 81, neutrons: 123, electrons: 81 };
            break;
        case 'lead':
            atomConfig = { protons: 82, neutrons: 125, electrons: 82 };
            break;
        case 'bismuth':
            atomConfig = { protons: 83, neutrons: 126, electrons: 83 };
            break;
        case 'polonium':
            atomConfig = { protons: 84, neutrons: 125, electrons: 84 };
            break;
        case 'astatine':
            atomConfig = { protons: 85, neutrons: 125, electrons: 85 };
            break;
        case 'radon':
            atomConfig = { protons: 86, neutrons: 136, electrons: 86 };
            break;
        case 'francium':
            atomConfig = { protons: 87, neutrons: 136, electrons: 87 };
            break;
        case 'radium':
            atomConfig = { protons: 88, neutrons: 138, electrons: 88 };
            break;
        case 'actinium':
            atomConfig = { protons: 89, neutrons: 138, electrons: 89 };
            break;
        case 'thorium':
            atomConfig = { protons: 90, neutrons: 142, electrons: 90 };
            break;
        case 'protactinium':
            atomConfig = { protons: 91, neutrons: 141, electrons: 91 };
            break;
        case 'uranium':
            atomConfig = { protons: 92, neutrons: 146, electrons: 92 };
            break;
        case 'neptunium':
            atomConfig = { protons: 93, neutrons: 144, electrons: 93 };
            break;
        case 'plutonium':
            atomConfig = { protons: 94, neutrons: 150, electrons: 94 };
            break;
        case 'americium':
            atomConfig = { protons: 95, neutrons: 151, electrons: 95 };
            break;
        case 'curium':
            atomConfig = { protons: 96, neutrons: 152, electrons: 96 };
            break;
        case 'berkelium':
            atomConfig = { protons: 97, neutrons: 153, electrons: 97 };
            break;
        case 'californium':
            atomConfig = { protons: 98, neutrons: 153, electrons: 98 };
            break;
        case 'einsteinium':
            atomConfig = { protons: 99, neutrons: 157, electrons: 99 };
            break;
        case 'fermium':
            atomConfig = { protons: 100, neutrons: 157, electrons: 100 };
            break;
        case 'mendelevium':
            atomConfig = { protons: 101, neutrons: 158, electrons: 101 };
            break;
        case 'nobelium':
            atomConfig = { protons: 102, neutrons: 159, electrons: 102 };
            break;
        case 'lawrencium':
            atomConfig = { protons: 103, neutrons: 159, electrons: 103 };
            break;
        case 'rutherfordium':
            atomConfig = { protons: 104, neutrons: 157, electrons: 104 };
            break;
        case 'dubnium':
            atomConfig = { protons: 105, neutrons: 162, electrons: 105 };
            break;
        case 'seaborgium':
            atomConfig = { protons: 106, neutrons: 163, electrons: 106 };
            break;
        case 'bohrium':
            atomConfig = { protons: 107, neutrons: 161, electrons: 107 };
            break;
        case 'hassium':
            atomConfig = { protons: 108, neutrons: 162, electrons: 108 };
            break;
        case 'meitnerium':
            atomConfig = { protons: 109, neutrons: 169, electrons: 109 };
            break;
        case 'darmstadtium':
            atomConfig = { protons: 110, neutrons: 173, electrons: 110 };
            break;
        case 'roentgenium':
            atomConfig = { protons: 111, neutrons: 172, electrons: 111 };
            break;
        case 'copernicium':
            atomConfig = { protons: 112, neutrons: 173, electrons: 112 };
            break;
        case 'nihonium':
            atomConfig = { protons: 113, neutrons: 175, electrons: 113 };
            break;
        case 'flerovium':
            atomConfig = { protons: 114, neutrons: 175, electrons: 114 };
            break;
        case 'moscovium':
            atomConfig = { protons: 115, neutrons: 177, electrons: 115 };
            break;
        case 'livermorium':
            atomConfig = { protons: 116, neutrons: 177, electrons: 116 };
            break;
        case 'tennessine':
            atomConfig = { protons: 117, neutrons: 177, electrons: 117 };
            break;
        case 'oganesson':
            atomConfig = { protons: 118, neutrons: 176, electrons: 118 };
            break;     
    }
    createAtom();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    updateParticles();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize
createAtom();
animate();