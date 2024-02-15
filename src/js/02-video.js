import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerElement = document.getElementById("vimeo-player");
const player = new Player(vimeoPlayerElement);

const updateAndSaveTime = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);

player.on("timeupdate", updateAndSaveTime);

window.addEventListener("load", async () => {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime) {
    await player.setCurrentTime(parseFloat(savedTime));
  }
});