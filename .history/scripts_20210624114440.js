let player = document.querySelector('.player')
let video = document.getElementsByClassName('player__video viewer')[0]
let skipButtons = document.getElementsByClassName('player__button')
let toggle = player.querySelector('.toggle')
let progBar = document.getElementsByClassName('progress__filled')[0]
const ranges = player.querySelector('.player__slider')
//toggle progress


let toggleBar = () =>{
  let curTime = video.currentTime;
  let dur = video.duration;
  // console.log(curTime, '/' ,dur,'=', curTime/dur)
  let percent = curTime/dur

  progBar.style.flexBasis = percent*100 + '%'
}

var intervalId = setInterval(function(){
  if(!video.paused)  toggleBar()
},1000)


let toggleVideo = () =>{
  if(video.paused){
    video.play()
    // intervalId()
  }else{
    video.pause()
    // clearInterval(intervalId)
  } 
  
  
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}




let skipVideo = (time) =>{
  // console.log('skipping ', time,' seconds' );
  let curTime = video.currentTime + Number(time)
  toggleBar()
  // console.log(video.currentTime,'+', time,'=', curTime)

  video.currentTime =curTime
}
// console.log(skipButtons)


toggle.addEventListener('click',toggleVideo);
video.addEventListener('click',toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons[1].addEventListener('click', () => skipVideo(skipButtons[1].dataset.skip))
skipButtons[2].addEventListener('click', () => skipVideo(skipButtons[2].dataset.skip))
