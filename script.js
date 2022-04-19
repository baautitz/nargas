const buttonsDiv = document.getElementById("buttons")
const video = document.getElementById("video")
const closeButton = document.getElementById("btn-sair")
const nargasButton = document.getElementById("btn-nargas")

nargasButton.addEventListener('click', runVideo)
closeButton.addEventListener('click', () => alert("Só fechar a aba, uai"))
video.addEventListener('ended', videoEnd, false)

function runVideo() {
    buttonsDiv.classList.toggle("none-display")
    video.classList.toggle("none-display")

    video.play()
}

function videoEnd() {
    buttonsDiv.classList.toggle("none-display")
    video.classList.toggle("none-display")
}

(function firstVideoLoad(){
    const videoSource = document.createElement('source')
    videoSource.setAttribute('src', `/media/nargas.mp4?v=${new Date().getTime()}`)
    videoSource.setAttribute('type', 'video/mp4')

    video.appendChild(videoSource)
})()