const player = document.getElementById("player");
const btn = document.getElementById("play-random");

let isPlaying = false;
let currentTrack = null;

const graduationTracks = [
  "../audios/Graduation/good-morning.mp3",
  "../audios/Graduation/champion.mp3",
  "../audios/Graduation/stronger.mp3",
  "../audios/Graduation/i-wonder.mp3",
  "../audios/Graduation/good-life.mp3",
  "../audios/Graduation/cant-tell-me-nothing.mp3",
  "../audios/Graduation/barry-bonds.mp3",
  "../audios/Graduation/drunk-and-hot-girls.mp3",
  "../audios/Graduation/flashing-lights.mp3",
  "../audios/Graduation/everything-i-am.mp3",
  "../audios/Graduation/the-glory.mp3",
  "../audios/Graduation/homecoming.mp3",
  "../audios/Graduation/big-brother.mp3",
  "../audios/Graduation/good-night.mp3",
];

const trackNames = [
  "GOOD MORNING",
  "CHAMPION",
  "STRONGER",
  "I WONDER",
  "GOOD LIFE",
  "CANT TELL ME NOTHING",
  "BARRY BONDS",
  "DRUNK AND HOT GIRLS",
  "FLASHING LIGHTS",
  "EVERYTHING I AM",
  "THE GLORY",
  "HOMECOMING",
  "BIG BROTHER",
  "GOOD NIGHT",
];

btn.addEventListener("click", () => {

    if (!currentTrack) {
        const randomIndex = Math.floor(Math.random() * graduationTracks.length);
        setTrack(randomIndex);
    }

    if (player.paused) {
        player.play();
        btn.textContent = "❚❚";
    } else {
        player.pause();
        btn.textContent = "▶";
    }
});

player.addEventListener("ended", () => {
    btn.textContent = "▶";
    currentTrack = null;
});

const nextBtn = document.getElementById("next-track");

nextBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * graduationTracks.length);
    setTrack(randomIndex);

    player.currentTime = 0;
    player.play();

    btn.textContent = "❚❚";
});

const trackTitle = document.getElementById("track-title");

function setTrack(index) {
    currentTrack = graduationTracks[index];
    player.src = currentTrack;
    trackTitle.textContent = trackNames[index];
}


const bear = document.getElementById("graduation-bear");
const onSightSound = document.getElementById("on-sight-sound");

bear.addEventListener("click", () => {
    onSightSound.currentTime = 0;
    onSightSound.play();
    bear.addEventListener("click", () => {

    bear.classList.add("bear-click");

    setTimeout(() => {
        bear.classList.remove("bear-click");
    }, 150);

    onSightSound.currentTime = 0;
    onSightSound.play();

    const rect = bear.getBoundingClientRect();

    for (let i = 0; i < 150; i++) {
        createConfetti(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
        );
    }
});
});

function createConfetti(x, y) {

    const particle = document.createElement("div");

    particle.classList.add("confetti");

    const colors = [
        "#ff0000",
        "#ff8800",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0088ff",
        "#ff00ff",
        "#000000",
        "#ffffff"
    ];

    particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 300 + Math.random() * 300;

    particle.style.left = x + "px";
    particle.style.top = y + "px";

    particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
    particle.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}