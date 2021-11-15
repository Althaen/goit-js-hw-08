import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

// Объявления переменных
const iframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(iframe);
let currentTime = 0;

// Объявления функций
const setTimeOnPageRefresh = function() {
  if (localStorage.getItem('videoplayer-current-time'))
currentTime = localStorage.getItem('videoplayer-current-time');
};

const onTimeUpdate = function(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  currentTime = e.seconds;
};

// Слушатели и объявления функций
setTimeOnPageRefresh();

vimeoPlayer.setCurrentTime(currentTime);

vimeoPlayer.on('timeupdate', throttle(onTimeUpdate, 1000));



