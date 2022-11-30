import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
