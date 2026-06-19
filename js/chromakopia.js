document.addEventListener("DOMContentLoaded", () => {

  const image = document.getElementById("st-chroma");
  const son = document.getElementById("son-disparition");

  if (image && son) {
    image.addEventListener("mouseenter", () => {
      son.currentTime = 0;
      son.play().catch(err => console.log(err));
    });
  }

});

const player = document.getElementById("player");
const btn = document.getElementById("play-random");

let currentTrack = null;

const chromakopiaTracks = [
  "../audios/Chromakopia/st-chroma.mp3",
  "../audios/Chromakopia/rah-tah-tah.mp3",
  "../audios/Chromakopia/noid.mp3",
  "../audios/Chromakopia/darling-i.mp3",
  "../audios/Chromakopia/hey-jane.mp3",
  "../audios/Chromakopia/i-killed-you.mp3",
  "../audios/Chromakopia/judge-judy.mp3",
  "../audios/Chromakopia/sticky.mp3",
  "../audios/Chromakopia/take-your-mask-off.mp3",
  "../audios/Chromakopia/tomorrow.mp3",
  "../audios/Chromakopia/thought-i-was-dead.mp3",
  "../audios/Chromakopia/mother.mp3",
  "../audios/Chromakopia/like-him.mp3",
  "../audios/Chromakopia/balloon.mp3",
  "../audios/Chromakopia/i-hope-you-find-your-way-home.mp3",
];

const trackNames = [
  "St. Chroma",
  "Rah Tah Tah",
  "Noid",
  "Darling, I",
  "Hey Jane",
  "I Killed You",
  "Judge Judy",
  "Sticky",
  "Take Your Mask Off",
  "Tomorrow",
  "Thought I Was Dead",
  "Mother",
  "Like Him",
  "Balloon",
  "I Hope You Find Your Way Home"
];

btn.addEventListener("click", () => {

    if (!currentTrack) {
        const randomIndex = Math.floor(Math.random() * chromakopiaTracks.length);
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

    const randomIndex = Math.floor(Math.random() * chromakopiaTracks.length);
    setTrack(randomIndex);

    player.currentTime = 0;
    player.play();

    btn.textContent = "❚❚";
});

const trackTitle = document.getElementById("track-title");

function setTrack(index) {
    currentTrack = chromakopiaTracks[index];
    player.src = currentTrack;
    trackTitle.textContent = trackNames[index];
}
