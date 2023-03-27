const video = document.querySelector('.video')
const playPauseBtn = document.querySelector('.play-pause')
const muteBtn = document.querySelector('.mute')
const volumeSlider = document.querySelector('.volume-slider')
const progressBar = document.querySelector('.progress-bar')
const progressContainer = document.querySelector('.progress')
const currentTIme = document.querySelector('.current-time')
const duration = document.querySelector('.duration')
const fullScreenBtn = document.querySelector('.fullscreen')

let isPlaying = false
let isMuted = false

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        isPlaying = false
        playPauseBtn.innerHTML = '<span class="fa-solid fa-play"></span>'
    } else {
        video.play()
        isPlaying = true
        playPauseBtn.innerHTML = '<span class="fa-solid fa-pause"></span>'

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