const player = document.getElementById("player");
const btn = document.getElementById("play-random");

let isPlaying = false;
let currentTrack = null;

const redmooninvenusTracks = [
  "../audios/RedMoonInVenus/in-my-garden.mp3",
  "../audios/RedMoonInVenus/i-wish-you-roses.mp3",
  "../audios/RedMoonInVenus/worth-the-wait.mp3",
  "../audios/RedMoonInVenus/love-between.mp3",
  "../audios/RedMoonInVenus/all-mine.mp3",
  "../audios/RedMoonInVenus/fantasy.mp3",
  "../audios/RedMoonInVenus/como-te-quiero-yo.mp3",
  "../audios/RedMoonInVenus/hasta-cuando.mp3",
  "../audios/RedMoonInVenus/endlessly.mp3",
  "../audios/RedMoonInVenus/moral-conscience.mp3",
  "../audios/RedMoonInVenus/not-too-late.mp3",
  "../audios/RedMoonInVenus/blue.mp3",
  "../audios/RedMoonInVenus/deserve-me.mp3",
  "../audios/RedMoonInVenus/moonlight.mp3",
  "../audios/RedMoonInVenus/happy-now.mp3",
];

const trackNames = [
  "In My Garden...",
  "I Wish You Roses",
  "Worth the Wait",
  "Love Between...",
  "All Mine",
  "Fantasy",
  "Como Te Quiero Yo",
  "Hasta Cuando",
  "Endlessly",
  "Moral Conscience",
  "Not Too Late (Interlude)",
  "Blue",
  "Deserve Me",
  "Moonlight",
  "Happy Now"
];

btn.addEventListener("click", () => {

    if (!currentTrack) {
        const randomIndex = Math.floor(Math.random() * redmooninvenusTracks.length);
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

    const randomIndex = Math.floor(Math.random() * redmooninvenusTracks.length);
    setTrack(randomIndex);

    player.currentTime = 0;
    player.play();

    btn.textContent = "❚❚";
});

const trackTitle = document.getElementById("track-title");

function setTrack(index) {
    currentTrack = redmooninvenusTracks[index];
    player.src = currentTrack;
    trackTitle.textContent = trackNames[index];
}

const container = document.getElementById("butterfly-container");

const butterflyImages = [
    "../images/papillon-bleu-noir-sans-fond.png",
    "../images/papillon-orange-noir-sans-fond.png",
    "../images/papillon-rose-noir-sans-fond.png",
];

document.addEventListener("click", (e) => {
    spawnButterflies(e.clientX, e.clientY);
});

function spawnButterflies(x, y) {
    for (let i = 0; i < 5; i++) {

        const img = document.createElement("img");

        const randomImg = butterflyImages[Math.floor(Math.random() * butterflyImages.length)];
        img.src = randomImg;

        img.classList.add("butterfly");

        img.style.left = x + "px";
        img.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;

        img.style.setProperty("--x", Math.cos(angle) * distance + "px");
        img.style.setProperty("--y", Math.sin(angle) * distance + "px");

        container.appendChild(img);

        setTimeout(() => img.remove(), 1200);
    }
}

const moon = document.getElementById("corner-moon");
const sparkle = document.getElementById("sparkle-sound");

moon.addEventListener("click", (e) => {
    const rect = moon.getBoundingClientRect();

    for (let i = 0; i < 30; i++) {
        createParticle(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            "star"
        );
    }

    createMoonGlow(rect);

    sparkle.currentTime = 0;
    sparkle.playbackRate = 1.5;
    sparkle.play();

});

function createParticle(x, y, type) {
    const el = document.createElement("div");

    el.classList.add("particle", type);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 175 + Math.random() * 175;

    const xMove = Math.cos(angle) * distance + "px";
    const yMove = Math.sin(angle) * distance + "px";

    el.style.left = x + "px";
    el.style.top = y + "px";

    el.style.setProperty("--x", xMove);
    el.style.setProperty("--y", yMove);

    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 1000);
}

function createMoonGlow(rect) {
    const glow = document.createElement("div");

    glow.classList.add("moon-glow");

    glow.style.left = rect.left + rect.width / 2 + "px";
    glow.style.top = rect.top + rect.height / 2 + "px";

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 600);
}
