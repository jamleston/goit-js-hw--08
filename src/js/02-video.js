import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// variables
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

// events
player.on('timeupdate', throttle(updateTimeFn, 5000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

// functions
function updateTimeFn (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
    console.log(data.seconds)
}


