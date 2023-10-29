import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let playbackTime = 0;

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      playbackTime = seconds;
      return playbackTime;
    });
    localStorage.setItem('videoplayer - current - time', playbackTime);
  }, 1000)
);

const savedPlaybackTime = localStorage.getItem('videoplayer - current - time');
if (savedPlaybackTime !== null) {
  player.setCurrentTime(parseFloat(savedPlaybackTime));
}
