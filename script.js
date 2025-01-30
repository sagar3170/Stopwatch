let timer;
let isRunning = false;
let seconds = 0;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("display").textContent = 
        (hrs < 10 ? "0" : "") + hrs + ":" + 
        (mins < 10 ? "0" : "") + mins + ":" + 
        (secs < 10 ? "0" : "") + secs;
}

document.getElementById("start").addEventListener("click", function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function() {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
});
