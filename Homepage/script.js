function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    const elemenJam = document.querySelector('.time');
    const elemenKondisi = document.querySelector('.ampm');
    elemenJam.textContent = hours + ":" + minutes;
    elemenKondisi.textContent = ampm;
}
updateClock();
setInterval(updateClock, 1000);