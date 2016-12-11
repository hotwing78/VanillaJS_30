'use strict';

function removePlaying(e) {
  e.preventDefault();
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e){
  e.preventDefault();
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if(!audio) return ;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removePlaying));
window.addEventListener('keydown', playSound);
