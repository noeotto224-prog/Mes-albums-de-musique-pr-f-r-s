const head = document.getElementById("cherry-head");
const explosion = document.getElementById("explosion");
const boom = document.getElementById("boom-sound");

head.addEventListener("click", () => {

    explosion.currentTime = 0;
    explosion.style.opacity = "1";
    explosion.play();

    boom.currentTime = 0;
    boom.volume = 1;
    boom.play();

    explosion.onended = () => {
        explosion.style.opacity = "0";
    };
});

const player = document.getElementById("player");
const btn = document.getElementById("play-random");

let isPlaying = false;
let currentTrack = null;

const CherryBombTracks = [
  "../audios/CherryBomb/deathcamp.mp3",
  "../audios/CherryBomb/buffalo.mp3",
  "../audios/CherryBomb/pilot.mp3",
  "../audios/CherryBomb/run.mp3",
  "../audios/CherryBomb/find-your-wings.mp3",
  "../audios/CherryBomb/cherry-bomb.mp3",
  "../audios/CherryBomb/blow-my-load.mp3",
  "../audios/CherryBomb/2seater.mp3",
  "../audios/CherryBomb/the-brown-stains-of-darkeese-latifah-part-6-12-remix.mp3",
  "../audios/CherryBomb/fucking-young_perfect.mp3",
  "../audios/CherryBomb/smuckers.mp3",
  "../audios/CherryBomb/keep-da-o-s.mp3",
  "../audios/CherryBomb/okaga-ca.mp3",
];

const trackNames = [
  "DEATHCAMP",
  "BUFFALO",
  "PILOT",
  "RUN",
  "FIND YOUR WINGS",
  "CHERRY BOMB",
  "BLOW MY LOAD",
  "2SEATER",
  "THE BROWN STAINS OF DARKEESE LATIFAH PART 6-12 (Remix)",
  "FUCKING YOUNG / PERFECT",
  "SMUCKERS",
  "KEEP DA O'S",
  "OKAGA, CA",
];

btn.addEventListener("click", () => {

    if (!currentTrack) {
        const randomIndex = Math.floor(Math.random() * CherryBombTracks.length);
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

    const randomIndex = Math.floor(Math.random() * CherryBombTracks.length);
    setTrack(randomIndex);

    player.currentTime = 0;
    player.play();

    btn.textContent = "❚❚";
});

const trackTitle = document.getElementById("track-title");

function setTrack(index) {
    currentTrack = CherryBombTracks[index];
    player.src = currentTrack;
    trackTitle.textContent = trackNames[index];
}
