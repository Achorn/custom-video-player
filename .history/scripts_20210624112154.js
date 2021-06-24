let video = document.getElementsByClassName('player__video viewer')[0]

//skip buttons

let skipButtons =document.getElementsByClassName('player__button')

let skipVideo = (time) =>{
  // console.log('skipping ', time,' seconds' );
  let curTime = video.currentTime + Number(time)
  // console.log(video.currentTime,'+', time,'=', curTime)

  video.currentTime =curTime
}
// console.log(skipButtons)
skipButtons[1].addEventListener('click', () => skipVideo(skipButtons[1].dataset.skip))
skipButtons[2].addEventListener('click', () => skipVideo(skipButtons[2].dataset.skip))


//toggle progress

let progBar = document.getElementsByClassName('progress__filled')[0]

let toggleBar = () =>{
  console.log('playing')

}

var intervalId = window.setInterval(function(){
  let curTime = video.currentTime;
  let dur = video.duration;
  console.log(curTime, '/' ,dur,'=', curTime/dur)
  toggleBar()
},1000)

video.addEventListener('playing',toggleBar)
console.log(progBar)


//toggle video
let toggleVideo = () =>{
  if(video.paused){
    video.play()
    intervalId()
  }else{
    video.pause()
    clearInterval(intervalId)
  } 
  
  
}
document.getElementsByClassName('player__button toggle')[0].addEventListener('click',toggleVideo);

video.addEventListener('click',toggleVideo);
