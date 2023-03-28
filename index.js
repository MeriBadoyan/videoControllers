const video = document.querySelector('.video')
const playPauseBtn = document.querySelector('.play-pause')
const muteBtn = document.querySelector('.mute')
const volumeSlider = document.querySelector('.volume-slider')
const progressBar = document.querySelector('.progress-bar')
const progressContainer = document.querySelector('.progress')
const currentTime = document.querySelector('.current-time')
const duration = document.querySelector('.duration')
const fullScreenBtn = document.querySelector('.fullscreen')

let isPlaying = false
let isMuted = false
let isFullScreen = false
let timeInterval = null
let progress = 0

function changeProgressBar() {
    progress += (100 / video.duration)
    progressBar.style.width = `${progress}%`
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        isPlaying = false
        playPauseBtn.innerHTML = '<span class="fa-solid fa-play"></span>'
        clearInterval(timeInterval)

    } else {
        video.play()
        isPlaying = true
        playPauseBtn.innerHTML = '<span class="fa-solid fa-pause"></span>'
        timeInterval = setInterval(() => {
            let currentSeconds = Math.round(video.currentTime % 60)
            let currentMinitues = Math.floor(video.currentTime / 60)

            currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`
            currentMinitues = currentMinitues < 0 ? '00' : currentMinitues < 10 ? `0${currentMinitues}` : `${currentMinitues}`

            currentTime.innerHTML = `${currentMinitues}:${currentSeconds}`
            changeProgressBar()
        }, 1000)
    }
})

muteBtn.addEventListener('click', () => {
    if (isMuted) {
        video.muted = false
        isMuted = false
        muteBtn.innerHTML = '<span class="fa-solid fa-volume-high"></span>'
    } else {
        video.muted = true
        isMuted = true
        muteBtn.innerHTML = '<span class="fa-solid fa-volume-xmark"></span>'
    }
})

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value
})

video.addEventListener("loadeddata", () => {
    duration.innerHTML = `${Math.floor(video.duration / 60)}:${(video.duration % 60).toFixed(2) * 100}`
});

fullScreenBtn.addEventListener('click', () => {
    if (isFullScreen) {
        fullScreenBtn.innerHTML = '<span class="fa-solid fa-compress"></span>'
        isFullScreen = false
        video.exitFullscreen()
    } else {
        fullScreenBtn.innerHTML = '<span class="fa-solid fa-expand">'
        isFullScreen = true
        video.requestFullscreen()
    }
})


progressContainer.addEventListener('click', (event) => {
    progress = event.offsetX * 100 / 578
    video.currentTime = progress * 100
})