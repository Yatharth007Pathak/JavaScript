// Planets & Sun Data
const planets = [
  
  { name: 'Sun', radius: 30, color: '#ffd166', distance: 0, period: 0,
    info: ` The Sun is a massive star at the center of our Solar System.
    - Diameter: ~1.39 million km
    - Accounts for 99.86% of the solar system's total mass
    - Composed mainly of hydrogen and helium
    - Provides energy and light essential for life on Earth.` },
  
  { name: 'Mercury', radius: 4, color: '#a9a9a9', distance: 60, period: 88,
    info: ` Mercury is the smallest planet and closest to the Sun.
    - Diameter: ~4,879 km
    - No atmosphere, extreme temperatures
    - Orbits the Sun in just 88 days
    - Surface heavily cratered, like the Moon.` },

  { name: 'Venus', radius: 7, color: '#f5deb3', distance: 90, period: 225,
    info: ` Venus is the hottest planet in the Solar System.
    - Diameter: ~12,104 km
    - Thick carbon dioxide atmosphere causes a runaway greenhouse effect
    - Surface temperature ~465°C
    - Rotates very slowly and in the opposite direction of most planets.` },

  { name: 'Earth', radius: 8, color: '#3fa9f5', distance: 120, period: 365,
    info: ` Earth is our home planet, the only known world with life.
    - Diameter: ~12,742 km
    - 71% covered by water
    - Atmosphere: Nitrogen + Oxygen
    - Has one natural satellite, the Moon.` },
  
  { name: 'Mars', radius: 6, color: '#ff4500', distance: 150, period: 687,
    info: ` Mars is known as the "Red Planet".
    - Diameter: ~6,779 km
    - Iron oxide (rust) gives it its red color
    - Has the largest volcano (Olympus Mons) and canyon (Valles Marineris)
    - Two small moons: Phobos and Deimos.` },
  
  { name: 'Asteroid Belt', radius: 0, color: 'transparent', distance: 200, period: 0,
    info: ` The Asteroid Belt lies between Mars and Jupiter.
    - Contains millions of rocky bodies
    - Largest member: dwarf planet Ceres
    - Remnants from the early Solar System that never formed into a planet
    - Orbits are irregular, but they generally circle the Sun.` },
  
  { name: 'Jupiter', radius: 14, color: '#ffa500', distance: 250, period: 4333,
    info: ` Jupiter is the largest planet in the Solar System.
    - Diameter: ~139,820 km
    - Gas giant made mostly of hydrogen and helium
    - Famous for its Great Red Spot, a giant storm
    - Has at least 95 moons, including Ganymede (largest in the solar system).` },
  
  { name: 'Saturn', radius: 12, color: '#f4e2c9', distance: 320, period: 10759,
    info: ` Saturn is famous for its spectacular ring system.
    - Diameter: ~116,460 km
    - Gas giant with hydrogen and helium
    - Rings are made of ice and rock particles
    - Has at least 145 moons, including Titan (bigger than Mercury).` },
  
  { name: 'Uranus', radius: 10, color: '#7fffd4', distance: 380, period: 30687,
    info: ` Uranus is an ice giant with a tilted rotation.
    - Diameter: ~50,724 km
    - Rotates on its side (98° tilt), unique among planets
    - Atmosphere: hydrogen, helium, methane (gives blue-green color)
    - Has faint rings and 27 moons.` },

  { name: 'Neptune', radius: 10, color: '#4169e1', distance: 450, period: 60190,
    info: ` Neptune is the farthest planet from the Sun.
    - Diameter: ~49,244 km
    - Known for strong winds and dark storms
    - Methane in its atmosphere gives it a deep blue color
    - Has 14 moons, including Triton, which orbits backward.` }
];

const canvas = document.getElementById('space');
const ctx = canvas.getContext('2d');

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
resize();
window.addEventListener('resize', resize);

let running = true, speed = 1, visualScale = 0.5, showOrbits = true, epoch = 0;
let selectedPlanet = null;

// Controls
document.getElementById('playPause').onclick = () => {
  running = !running;
  document.getElementById('playPause').textContent = running ? 'Pause' : 'Play';
};
document.getElementById('reset').onclick = () => { epoch = 0; };
document.getElementById('speed').oninput = e => speed = +e.target.value;
document.getElementById('scale').oninput = e => visualScale = +e.target.value;
document.getElementById('show-orbits').onchange = e => showOrbits = e.target.checked;

// Legend
const legendList = document.getElementById('legendList');
const tpl = document.getElementById('legend-tpl');

function highlightPlanet(p) {
  selectedPlanet = p;
  document.getElementById('planetInfo').innerHTML =
    `<strong style="color:${p.color}">${p.name}</strong><br>${p.info}<br>Distance: ${p.distance}<br>Period: ${p.period}`;
}

planets.forEach(p => {
  if(p.name==='Sun' || p.name==='Asteroid Belt') return;
  const node = tpl.content.cloneNode(true);
  node.querySelector('.dot').style.background = p.color;
  node.querySelector('.name').textContent = p.name;
  node.querySelector('.planet-item').onclick = () => highlightPlanet(p);
  legendList.appendChild(node);
});

// Stars
let stars=[];
function makeStars(){
  for(let i=0;i<200;i++)
    stars.push({x:Math.random()*canvas.clientWidth,y:Math.random()*canvas.clientHeight,r:Math.random()*1.5});
}
function drawStars(){
  ctx.fillStyle='white';
  for(const s of stars){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}
}
makeStars();

// Asteroid Belt
const asteroids=[];
function generateAsteroidBelt(count=300){
  asteroids.length=0;
  const minDist=190, maxDist=210;
  for(let i=0;i<count;i++){
    asteroids.push({
      angle: Math.random()*Math.PI*2,
      distance: minDist + Math.random()*(maxDist-minDist),
      speed: 1000 + Math.random()*1000,
      radius: 0.8 + Math.random()*1.2
    });
  }
}
generateAsteroidBelt();

// Moons
const moons = [
  // Jupiter moons
  { planet: 'Jupiter', radius: 1.5, distance: 20, speed: 0.5 },
  { planet: 'Jupiter', radius: 1.3, distance: 28, speed: 0.4 },
  { planet: 'Jupiter', radius: 1.1, distance: 36, speed: 0.35 },

  // Saturn moons
  { planet: 'Saturn', radius: 1.4, distance: 18, speed: 0.45 },
  { planet: 'Saturn', radius: 1.2, distance: 25, speed: 0.35 },
  { planet: 'Saturn', radius: 1.0, distance: 32, speed: 0.3 },

  // Earth moon
  { planet: 'Earth', radius: 1.5, distance: 12, speed: 1.0 },

  // Mars moons
  { planet: 'Mars', radius: 0.7, distance: 8, speed: 0.8 }, // Phobos
  { planet: 'Mars', radius: 0.5, distance: 12, speed: 0.6 } // Deimos
];

// Assign random starting angle to all moons
moons.forEach(m => m.angle = Math.random() * Math.PI * 2);

// Tooltip
const tooltip = document.getElementById('tooltip');

// Canvas interactions
canvas.addEventListener('click', function(event){
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const cx = canvas.clientWidth/2, cy = canvas.clientHeight/2;
  let clickedPlanet = null;

  for(const p of planets){
    const ang = p.distance===0 ? 0 : (epoch/p.period)*Math.PI*2;
    const px = cx + Math.cos(ang)*p.distance*visualScale;
    const py = cy + Math.sin(ang)*p.distance*visualScale;
    const dx = x - px, dy = y - py;
    if(Math.sqrt(dx*dx+dy*dy)<=p.radius*visualScale+5){
      clickedPlanet = p;
      break;
    }
  }
  if(clickedPlanet) highlightPlanet(clickedPlanet);
});

canvas.addEventListener('mousemove', function(event){
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const cx = canvas.clientWidth/2, cy = canvas.clientHeight/2;
  let hovered = null;

  for(const p of planets){
    const ang = p.distance===0 ? 0 : (epoch/p.period)*Math.PI*2;
    const px = cx + Math.cos(ang)*p.distance*visualScale;
    const py = cy + Math.sin(ang)*p.distance*visualScale;
    const dx = x - px, dy = y - py;
    if(Math.sqrt(dx*dx+dy*dy)<=p.radius*visualScale+5){ hovered=p.name; break; }
  }

  if(!hovered){
    for(const m of moons){
      const parent = planets.find(pl=>pl.name===m.planet);
      const ang = parent.distance===0 ? 0 : (epoch/parent.period)*Math.PI*2;
      const px = cx + Math.cos(ang)*parent.distance*visualScale;
      const py = cy + Math.sin(ang)*parent.distance*visualScale;
      const mx = px + Math.cos(m.angle)*m.distance*visualScale;
      const my = py + Math.sin(m.angle)*m.distance*visualScale;
      const dx = x - mx, dy = y - my;
      if(Math.sqrt(dx*dx+dy*dy)<=m.radius*visualScale+3){ hovered=`${m.planet} Moon`; break; }
    }
  }

  if(hovered){
    tooltip.style.left=`${event.clientX+10}px`;
    tooltip.style.top=`${event.clientY+10}px`;
    tooltip.style.display='block';
    tooltip.textContent = hovered;
  }else tooltip.style.display='none';
});

let lastTime = performance.now();
function frame(t){
  const dt = (t-lastTime)/1000; lastTime = t;
  if(running) epoch += dt*60*speed;
  ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);

  const cx=canvas.clientWidth/2, cy=canvas.clientHeight/2;

  // Sun glow
  const sun = planets[0];
  const gradient = ctx.createRadialGradient(cx,cy,0,cx,cy,sun.radius*visualScale*2);
  gradient.addColorStop(0,sun.color);
  gradient.addColorStop(0.7,'rgba(255,209,102,0.4)');
  gradient.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=gradient;
  ctx.beginPath();
  ctx.arc(cx,cy,sun.radius*visualScale*5,0,Math.PI*2);
  ctx.fill();

  drawStars();

  // Asteroid belt
  for(const a of asteroids){
    a.angle += (dt/a.speed)*Math.PI*2;
    const ax = cx + Math.cos(a.angle)*a.distance*visualScale;
    const ay = cy + Math.sin(a.angle)*a.distance*visualScale;
    ctx.beginPath();
    ctx.fillStyle=`rgba(200,200,200,${0.3 + Math.random()*0.5})`;
    ctx.arc(ax,ay,a.radius*visualScale,0,Math.PI*2);
    ctx.fill();
  }

  // Planets
  for(const p of planets){
    const ang = p.distance===0 ? 0 : (epoch/p.period)*Math.PI*2;
    const px = cx + Math.cos(ang)*p.distance*visualScale;
    const py = cy + Math.sin(ang)*p.distance*visualScale;

    // Orbits
    if(showOrbits && p.distance!==0){
      ctx.beginPath();
      ctx.strokeStyle='rgba(255,255,255,0.15)';
      ctx.arc(cx,cy,p.distance*visualScale,0,Math.PI*2);
      ctx.stroke();
      if(selectedPlanet===p){
        ctx.beginPath();
        ctx.lineWidth=2;
        ctx.strokeStyle=p.color;
        ctx.arc(cx,cy,p.distance*visualScale,0,Math.PI*2);
        ctx.stroke();
      }
    }

    // Planet
    ctx.beginPath();
    ctx.fillStyle=p.color;
    ctx.arc(px,py,p.radius*visualScale,0,Math.PI*2);
    ctx.fill();
    if(selectedPlanet===p){
      ctx.lineWidth=2;
      ctx.strokeStyle='white';
      ctx.stroke();
    }

    // Saturn rings
    if(p.name==='Saturn'){
      ctx.beginPath();
      ctx.strokeStyle='rgba(244,226,201,0.5)';
      ctx.lineWidth = 3*visualScale;
      ctx.ellipse(px,py,p.radius*visualScale*2,p.radius*visualScale*0.6,Math.PI/6,0,Math.PI*2);
      ctx.stroke();
    }
  }

  // Moons
  for(const m of moons){
    const parent = planets.find(pl=>pl.name===m.planet);
    const ang = parent.distance===0 ? 0 : (epoch/parent.period)*Math.PI*2;
    const px = cx + Math.cos(ang)*parent.distance*visualScale;
    const py = cy + Math.sin(ang)*parent.distance*visualScale;

    m.angle += dt*m.speed;
    const mx = px + Math.cos(m.angle)*m.distance*visualScale;
    const my = py + Math.sin(m.angle)*m.distance*visualScale;

    ctx.beginPath();
    ctx.fillStyle='gray';
    ctx.arc(mx,my,m.radius*visualScale,0,Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);