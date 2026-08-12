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

const backgroundPlayer = document.getElementById("backgroundVideo");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

function changeBackground(){
  const currentVideo = backgroundPlayer.dataset.currentVideo || "";
  let randomVideo = backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)];

  // Avoid immediately selecting the same background when possible.
  while(backgroundVideos.length > 1 && randomVideo === currentVideo){
    randomVideo = backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)];
  }

  backgroundPlayer.dataset.currentVideo = randomVideo;
  backgroundPlayer.src = randomVideo;
  backgroundPlayer.load();
  backgroundPlayer.play().catch(() => {});
}

// Random background when the site opens.
changeBackground();

// Switch background without refreshing the page.
if(changeBackgroundBtn){
  changeBackgroundBtn.addEventListener("click", changeBackground);
}
