let player = document.querySelector('.player')
let video = document.getElementsByClassName('player__video viewer')[0]
let skipButtons = player.querySelectorAll('[data-skip]')
console.log(skipButtons)
let toggle = player.querySelector('.toggle')
let progress = player.querySelector('.progress')
let progBar = document.getElementsByClassName('progress__filled')[0]
const ranges = player.querySelectorAll('.player__slider')




let toggleVideo = () => video.paused ?video.play() :video.pause()  

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleRangeUpdate(){
  console.log(this.value)
  video[this.name] = this.value
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) *100
  progBar.style.flexBasis = percent + '%'
}

let skipVideo = (time) =>{
  let curTime = video.currentTime + Number(time)
  video.currentTime =curTime
}

function scrub (e){
  console.log(e)
  const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
 video.currentTime = scrubTime;
}


toggle.addEventListener('click',toggleVideo);
video.addEventListener('click',toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress)
skipButtons.forEach(btn => btn.addEventListener('click', () => skipVideo(btn.dataset.skip))); 
ranges.forEach(range =>{
  range.addEventListener('input', handleRangeUpdate)
})

progress.addEventListener('click', scrub)
progress.addEventListener('input', scrub)