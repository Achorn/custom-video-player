//toggle video
let video = document.getElementsByClassName('player__video viewer')[0]

let toggleVideo = () =>{
  video.paused ? video.play() : video.pause()
  console.log('toggling')
}

document.getElementsByClassName('player__button toggle')[0].addEventListener('click',toggleVideo);
video.addEventListener('click',toggleVideo);


//skip buttons

let skipButtons =document.getElementsByClassName('player__button')

let skipVideo = (time) =>{
  console.log('skipping ', time,' seconds' );
  video.currentTime = video.currentTime + time
}
console.log(skipButtons)
skipButtons[1].addEventListener('click', () => skipVideo(skipButtons[1].dataset.skip))
skipButtons[2].addEventListener('click', () => skipVideo(skipButtons[2].dataset.skip))
