const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDay = new Date();

    const totalSeconds = (newYearsDate - currentDay) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

countdown();
setInterval(countdown, 1000);

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}