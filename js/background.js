/* ==========================
   RANDOM BACKGROUND VIDEO
   ========================== */

const backgroundVideos = [
  "Background/background_1.mp4",
  "Background/background_2.mp4",
  "Background/background_3.mp4",
  "Background/background_4.mp4",
  "Background/background_5.mp4",
  "Background/background_6.mp4",
  "Background/background_7.mp4",
  "Background/background_8.mp4",
  "Background/background_9.mp4",
  "Background/background_10.mp4"
];

const backgroundA =
  document.getElementById("backgroundVideoA");

const backgroundB =
  document.getElementById("backgroundVideoB");

const changeBackgroundBtn =
  document.getElementById("changeBackgroundBtn");

let activeBackground = backgroundA;
let inactiveBackground = backgroundB;

let currentVideo = null;


// Pick a random video
function getRandomBackground(){

  let video;

  do {
    video =
      backgroundVideos[
        Math.floor(
          Math.random() * backgroundVideos.length
        )
      ];
  }
  while(
    backgroundVideos.length > 1 &&
    video === currentVideo
  );

  return video;
}


// Change to another random background
function changeBackground(){

  const nextVideo = getRandomBackground();

  currentVideo = nextVideo;

  // Load the new video into the hidden layer
  inactiveBackground.src = nextVideo;
  inactiveBackground.load();

  inactiveBackground.currentTime = 0;

  inactiveBackground.oncanplay = () => {

    // Start the new video
    inactiveBackground.play().then(() => {

      // Fade new video in
      inactiveBackground.classList.add("active");

      // Fade old video out
      activeBackground.classList.remove("active");

      // Swap the two video elements
      const temp = activeBackground;

      activeBackground = inactiveBackground;
      inactiveBackground = temp;

    }).catch(() => {});
  };
}


// ============================
// RANDOM BACKGROUND ON LAUNCH
// ============================

const firstVideo = getRandomBackground();

currentVideo = firstVideo;

activeBackground.src = firstVideo;
activeBackground.load();

activeBackground.play().catch(() => {});


// ============================
// REFRESH BACKGROUND BUTTON
// ============================

if(changeBackgroundBtn){

  changeBackgroundBtn.addEventListener(
    "click",
    changeBackground
  );

}
