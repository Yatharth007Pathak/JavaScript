const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const loadingSpinner = document.querySelector('.loading-spinner');

// Speech Synthesis Settings
let speechSettings = {
    rate: 1,
    pitch: 1,
    volume: 1,
    voice: null
};

// Load Speech Settings from Local Storage
if (localStorage.getItem('speechSettings')) {
    speechSettings = JSON.parse(localStorage.getItem('speechSettings'));
}

// Function to speak text using SpeechSynthesis API
function speak(text) {
    window.speechSynthesis.cancel(); // Stop ongoing speech to prevent overlap
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = speechSettings.rate;
    utterance.pitch = speechSettings.pitch;
    utterance.volume = speechSettings.volume;
    utterance.voice = speechSettings.voice;

    window.speechSynthesis.speak(utterance);
}

// Function to greet the user based on the time of day
function wishMe() {
    const hour = new Date().getHours();
    let greeting = "Good Evening, Sir!";

    if (hour < 12) {
        greeting = "Good Morning, Boss!";
    } else if (hour < 17) {
        greeting = "Good Afternoon, Master!";
    }

    speak(greeting);
}

// Initialize JARVIS on page load
window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    setTimeout(wishMe, 1500); // Delayed to prevent speech overlap
});

// Speech Recognition API Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false; // Prevent multiple ongoing instances
recognition.interimResults = false;
recognition.lang = 'en-US';

recognition.onstart = () => {
    btn.classList.add('active'); // Add pulse animation
    content.textContent = "Listening...";
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    content.textContent = transcript;
    takeCommand(transcript);
};

recognition.onerror = (event) => {
    speak("Sorry, I didn't catch that. Please try again.");
    console.error("Speech Recognition Error:", event.error);
};

recognition.onend = () => {
    btn.classList.remove('active'); // Remove pulse animation
};

// Start listening when the button is clicked
btn.addEventListener('click', () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel(); // Stop speaking if new input is given
    }
    recognition.start();
});

// Keyboard shortcut for microphone activation
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !recognition.running) {
        recognition.start();
    }
});

// Function to process user commands
function takeCommand(message) {
    showLoadingSpinner(); // Show loading spinner

    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How may I assist you?");
    } 
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } 
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } 
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }
    else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } 
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        const searchQuery = message.replace(/\s+/g, "+");
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
        speak(`Here's what I found for ${message}`);
    } 
    else if (message.includes('wikipedia')) {
        const searchQuery = message.replace("wikipedia", "").trim();
        window.open(`https://en.wikipedia.org/wiki/${searchQuery}`, "_blank");
        speak(`Here's what I found on Wikipedia about ${searchQuery}`);
    } 
    else if (message.includes('time')) {
        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        speak(`The current time is ${time}`);
    } 
    else if (message.includes('date')) {
        const date = new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
        speak(`Today's date is ${date}`);
    } 
    else if (message.includes('calculator')) {
        speak("Opening Calculator...");
        try {
            window.open("calc://");
        } catch {
            window.open("https://www.desmos.com/scientific", "_blank");
        }
    } 
    else if (message.includes('joke')) {
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                if (data.setup) {
                    speak(`${data.setup} ... ${data.delivery}`);
                } else {
                    speak(data.joke);
                }
            })
            .catch(() => speak("Sorry, I couldn't fetch a joke at the moment."));
    }
    else if (message.includes('weather')) {
        const location = message.replace("weather", "").trim();
        if (location) {
            window.open(`https://www.google.com/search?q=weather+${location}`, "_blank");
            speak(`Here's the weather for ${location}`);
        } else {
            speak("Please specify a location for the weather.");
        }
    }
    else {
        const searchQuery = message.replace(/\s+/g, "+");
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
        speak(`I found some information on Google for ${message}`);
    }

    hideLoadingSpinner(); // Hide loading spinner
}

// Dark Mode Toggle with Local Storage
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Preserve Dark Mode Preference
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Live Time Display
function updateTime() {
    document.querySelector('.time-display').innerText = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Loading Spinner Functions
function showLoadingSpinner() {
    loadingSpinner.style.display = 'block';
}

function hideLoadingSpinner() {
    loadingSpinner.style.display = 'none';
}

// Prevent SpeechSynthesis from interrupting listening
window.speechSynthesis.onvoiceschanged = () => {
    recognition.stop();
};