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

const backgroundA = document.getElementById("backgroundVideoA");
const backgroundB = document.getElementById("backgroundVideoB");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

let activeBackground = backgroundA;
let inactiveBackground = backgroundB;
let currentVideo = null;
let changingBackground = false;


// Pick a random video that isn't the current one
function getRandomBackground(){

  let video;

  do {
    video =
      backgroundVideos[
        Math.floor(Math.random() * backgroundVideos.length)
      ];
  } while (
    backgroundVideos.length > 1 &&
    video === currentVideo
  );

  return video;
}


// Start a video
function playBackground(video){

  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const promise = video.play();

  if(promise !== undefined){
    promise.catch(error => {
      console.log("Background video could not autoplay:", error);
    });
  }
}


// ================================
// RANDOM BACKGROUND ON PAGE LOAD
// ================================

function loadInitialBackground(){

  const firstVideo = getRandomBackground();

  currentVideo = firstVideo;

  activeBackground.src = firstVideo;
  activeBackground.load();

  activeBackground.classList.add("active");

  playBackground(activeBackground);
}


// ================================
// CHANGE BACKGROUND
// ================================

function changeBackground(){

  // Prevent multiple clicks while switching
  if(changingBackground) return;

  changingBackground = true;

  const nextVideo = getRandomBackground();

  currentVideo = nextVideo;

  // Put the new video into the hidden layer
  inactiveBackground.src = nextVideo;
  inactiveBackground.load();

  inactiveBackground.muted = true;
  inactiveBackground.loop = true;
  inactiveBackground.playsInline = true;

  // Wait until the new video has enough data to start
  const startNewVideo = () => {

    playBackground(inactiveBackground);

    // Give the browser a moment to start playback
    requestAnimationFrame(() => {

      // Fade new video IN
      inactiveBackground.classList.add("active");

      // Fade old video OUT
      activeBackground.classList.remove("active");

      // Swap the video layers
      const temp = activeBackground;
      activeBackground = inactiveBackground;
      inactiveBackground = temp;

      changingBackground = false;

    });
  };

  if(inactiveBackground.readyState >= 3){
    startNewVideo();
  }else{
    inactiveBackground.addEventListener(
      "canplay",
      startNewVideo,
      {once:true}
    );
  }
}


// Load random background immediately
loadInitialBackground();


// Refresh button
if(changeBackgroundBtn){

  changeBackgroundBtn.addEventListener(
    "click",
    changeBackground
  );

}