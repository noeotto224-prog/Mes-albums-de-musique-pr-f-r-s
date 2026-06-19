const player = document.getElementById("player");
const btn = document.getElementById("play-random");

let isPlaying = false;
let currentTrack = null;

const alligatorbitesneverhealTracks = [
  "../audios/AlligatorBitesNeverHeal/stanka-pooh.mp3",
  "../audios/AlligatorBitesNeverHeal/bullfrog.mp3",
  "../audios/AlligatorBitesNeverHeal/boiled-peanuts.mp3",
  "../audios/AlligatorBitesNeverHeal/denial-is-a-river.mp3",
  "../audios/AlligatorBitesNeverHeal/catfish.mp3",
  "../audios/AlligatorBitesNeverHeal/skipp.mp3",
  "../audios/AlligatorBitesNeverHeal/hide-n-seek.mp3",
  "../audios/AlligatorBitesNeverHeal/bloom.mp3",
  "../audios/AlligatorBitesNeverHeal/wait.mp3",
  "../audios/AlligatorBitesNeverHeal/death-roll.mp3",
  "../audios/AlligatorBitesNeverHeal/profit.mp3",
  "../audios/AlligatorBitesNeverHeal/boom-bap.mp3",
  "../audios/AlligatorBitesNeverHeal/nissan-altima.mp3",
  "../audios/AlligatorBitesNeverHeal/gtfo.mp3",
  "../audios/AlligatorBitesNeverHeal/huh.mp3",
  "../audios/AlligatorBitesNeverHeal/slide.mp3",
  "../audios/AlligatorBitesNeverHeal/fireflies.mp3",
  "../audios/AlligatorBitesNeverHeal/beverly-hills.mp3",
  "../audios/AlligatorBitesNeverHeal/alligator-bites-never-heal.mp3",
  "../audios/AlligatorBitesNeverHeal/anxiety.mp3",
];

const trackNames = [
  "STANKA POOH",
  "BULLFROG",
  "BOILED PEANUTS",
  "DENIAL IS A RIVER",
  "CATFISH",
  "SKIPP",
  "HIDE N SEEK",
  "BLOOM",
  "WAIT",
  "DEATH ROLL",
  "PROFIT",
  "BOOM BAP",
  "NISSAN ALTIMA",
  "GTFO",
  "HUH!",
  "SLIDE",
  "FIREFLIES",
  "BEVERLY HILLS",
  "ALLIGATOR BITES NEVER HEAL",
  "Anxiety",
];

btn.addEventListener("click", () => {

    if (!currentTrack) {
        const randomIndex = Math.floor(Math.random() * alligatorbitesneverhealTracks.length);
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

    const randomIndex = Math.floor(Math.random() * alligatorbitesneverhealTracks.length);
    setTrack(randomIndex);

    player.currentTime = 0;
    player.play();

    btn.textContent = "❚❚";
});

const trackTitle = document.getElementById("track-title");

function setTrack(index) {
    currentTrack = alligatorbitesneverhealTracks[index];
    player.src = currentTrack;
    trackTitle.textContent = trackNames[index];
}

const alligator = document.getElementById("alligator");
const biteSound = document.getElementById("bite-sound");

alligator.addEventListener("mousedown", () => {
    alligator.src = "../images/alligator-bouche-fermee-sans-fond.png";
    alligator.style.transform = "scale(0.95)";

    biteSound.currentTime = 0;
    biteSound.play();
});

document.addEventListener("mouseup", () => {
    alligator.src = "../images/alligator-bouche-ouverte-sans-fond.png";
    alligator.style.transform = "scale(1)";
});