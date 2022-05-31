const time_element = document.querySelector('.container .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let count = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


function timer () {
    count++;

    let hrs = Math.floor(count / 3600);
    let mins = Math.floor((count - (hrs * 3600)) / 60);
    let secs = count % 60;

    if(secs < 10) {
        secs = '0' + secs;
    };

    if(mins < 10) {
        mins = '0' + mins;
    };

    if(hrs < 10) {
        hrs = '0' + hrs;
    };

    time_element.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    count = 0;
    time_element.innerText = '00:00:00';
}



