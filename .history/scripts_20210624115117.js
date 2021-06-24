let player = document.querySelector('.player')
let video = document.getElementsByClassName('player__video viewer')[0]
let skipButtons = player.querySelectorAll('[data-skip]')
console.log(skipButtons)
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
  // console.log(video.currentTime,'+', time,'=', curTime)

  video.currentTime =curTime
  toggleBar()

}
// console.log(skipButtons)


toggle.addEventListener('click',toggleVideo);
video.addEventListener('click',toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(btn => btn.addEventListener('click', () => skipVideo(btn.dataset.skip))); 
