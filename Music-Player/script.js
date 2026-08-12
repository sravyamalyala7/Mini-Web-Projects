const audio = new Audio("music/song.mp3");

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");


// Play Button
playButton.addEventListener("click", function () {
    audio.play();
});


// Pause Button
pauseButton.addEventListener("click", function () {
    audio.pause();
});


// Update Progress Bar
audio.addEventListener("timeupdate", function () {

    if (audio.duration) {

        progress.value = (audio.currentTime / audio.duration) * 100;

        currentTime.textContent = formatTime(audio.currentTime);

        duration.textContent = formatTime(audio.duration);
    }
});


// Change song position using Progress Bar
progress.addEventListener("input", function () {

    if (audio.duration) {

        audio.currentTime =
            (progress.value / 100) * audio.duration;
    }
});


// Format Time
function formatTime(time) {

    let minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}