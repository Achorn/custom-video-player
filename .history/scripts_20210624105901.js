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
skipButtons.unshift()
let skipVideo = (time) =>{
  console.log('skipping ', time,' seconds' );

}
console.log(skipButtons.)
// skipButtons.array.forEach(element => {
//   element.addEventListener('click', () => skipVideo(element.data-skip))
// });