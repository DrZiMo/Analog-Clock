const second = document.querySelector('.second');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');

function updateTheClock() {
    const date = new Date();

    const currentHour = date.getHours();
    const currentMin = date.getMinutes();
    const currentSec = date.getSeconds();

    rotateTheArrows(currentHour, currentMin, currentSec);

    setTimeout(updateTheClock, 1000);
}

function rotateTheArrows(h, m, s) {
    let secondDeg = s * 6;
    let minuteDeg = m * 6;
    let hourDeg = h * 30;

    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}