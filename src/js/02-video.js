import vplayer from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new vplayer(iframeEl);

// It works, but hard to read and understand:
// player.on('timeupdate', throttle((function (data) {
//   localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
// }), 1000));


// This looks better:
player.on('timeupdate', throttle(savePlayingTime, 1000));

restoreTimeOnReload();

function savePlayingTime(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

function restoreTimeOnReload() {
  const pauseTime = JSON.parse(localStorage.getItem('videoplayer-current-time'))
  player.setCurrentTime(pauseTime.seconds).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

};