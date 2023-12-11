const clock = document.querySelector('.clock');

function runClock() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var txt = "AM";
    if(hours > 12) {
        hours = hours - 12;
        txt = "PM";
    } else if(hours == 0) {
        hours = 12;
        txt = "AM";
    }

    hours = hours < 10 ? '0'+hours : hours;
    mins = mins < 10 ? '0'+mins : mins;
    secs = secs < 10 ? '0'+ secs : secs;

    clock.innerHTML = `${hours} : ${mins} : ${secs} ${txt}`;

}

runClock();
setInterval(runClock, 1000);
alert("welcome");