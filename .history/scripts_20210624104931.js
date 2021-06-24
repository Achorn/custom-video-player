//play video

let toggleVideo = () =>{
  console.log('toggling')
}


document.getElementsByClassName('player__button toggle')[0].addEventListener('click',toggleVideo);
document.getElementsByClassName('player__video viewer')[0].addEventListener('click',toggleVideo)