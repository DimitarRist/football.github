function updateclock(){
    const clock =
document.getElementByld("live-clock");
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();
