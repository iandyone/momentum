import { getBackgroundImage, getSlideNext, getSlidePrev } from "./modules/slider.js";
import { getUserName, setUserName } from "./modules/greeting.js";
import { getWeather, showWeather } from "./modules/weather.js";
import { playMusic, playNextTrack, playPrevTrack, renderPlayList } from "./modules/audio.js";
import getQuote from "./modules/quotes.js";
import showTime from "./modules/time.js";

window.addEventListener('load', getUserName);
window.addEventListener('beforeunload', setUserName);
document.querySelector('.play').addEventListener('click', playMusic);
document.querySelector('.name').addEventListener('change', setUserName);
document.querySelector('.change-quote').addEventListener('click', getQuote);
document.querySelector('.play-next').addEventListener('click', playNextTrack);
document.querySelector('.play-prev').addEventListener('click', playPrevTrack);
document.querySelector('.slide-next').addEventListener('click', getSlideNext);
document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);

showTime();
showWeather('Minsk');
getQuote();
getBackgroundImage();
renderPlayList();

export function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}