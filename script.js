setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrot = 30 * htime + mtime / 2 + stime / 120;
    mrot = 6 * mtime;
    srot = 6 * stime;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;

}, 500);

window.onload = function () {
    let audio = new Audio('Assets/Tick-tock.wav');

    const body = document.querySelector('body');

    function tick() {
        audio.playbackRate = 0.5;
        audio.play();
        audio.loop = true;
    }

    body.addEventListener('mouseover', tick);
}
