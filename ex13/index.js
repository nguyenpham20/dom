var hours = 00;
var minutes = 00;
var seconds = 00;
var timeOne = document.getElementById("hours");
var timeTwo = document.getElementById("minutes");
var timeThree = document.getElementById("seconds");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");
var interval;

function startClock() {
    seconds++;
    if (seconds < 9) {
        timeThree.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        timeThree.innerHTML = seconds;
    }
    if (seconds > 60) {
        minutes++;
        timeTwo.innerHTML = "0" + minutes;
        seconds = 0;
        timeThree = "0" + seconds;
    }
    if (minutes > 9) {
        timeTwo.innerHTML = minutes;
    }
    if (minutes > 60) {
        hours++;
        timeThree.innerHTML = "0" + hours;
        minutes = 0;
        timeTwo = "0" + minutes;
    }
}

btnStart.onclick = function () {
    interval = setInterval(startClock);
}
btnStart.onclick = function () {
    interval = setInterval(interval);
}
btnReset.onclick = function () {
    interval = setInterval(interval);
    hours = "00";
    seconds = "00";
    minutes = "00";
    timeOne.innerHTML = hours;
    timeTwo.innerHTML = seconds;
    timeThree.innerHTML = minutes;
}