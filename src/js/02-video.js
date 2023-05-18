// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// // variables
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);
// const CURRENT_TIME = "videoplayer-current-time";

// // events
// player.on('timeupdate', throttle(updateTimeFn, 5000));
// player.setCurrentTime(localStorage.getItem(CURRENT_TIME)) || [];

// // functions
// function updateTimeFn (data) {
//     localStorage.setItem(CURRENT_TIME, data.seconds);
//     console.log(data.seconds)
// }

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoOnPage = document.querySelector('#vimeo-player');
const player = new Player(videoOnPage);
const CURRENT_TIME_KEY = "videoplayer-current-time";

// take from library player the time, save to local sorage the time, set the time like event

player.on('timeupdate', throttle(updateTimeFn, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

function updateTimeFn (videoData) {
    const currentTime = videoData.seconds;
    console.log(currentTime);
    localStorage.setItem(CURRENT_TIME_KEY, currentTime);
}
