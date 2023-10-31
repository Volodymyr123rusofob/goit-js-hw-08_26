import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let playbackTime = 0;

player.on(
  'timeupdate',
  throttle(
    ({ seconds }) =>
      localStorage.setItem('videoplayer - current - time', seconds),
    1000
  )
);

const savedPlaybackTime = localStorage.getItem('videoplayer - current - time');
if (savedPlaybackTime !== null) {
  player.setCurrentTime(parseFloat(savedPlaybackTime));
}
