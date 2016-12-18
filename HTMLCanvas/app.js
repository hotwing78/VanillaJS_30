'use strict'
//Variables
let isDrawing = false, lastX = 0, lastY = 0, hue = 0, direction = true;

const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth,
canvas.height = window.innerHeight;

const ctx = canvas.getContext(`2d`);
ctx.strokeStyle = '#STROKE',
ctx.lineJoin = 'round',
ctx.lineCap = 'round';
ctx.lineWidth = 50;
//ctx.globalCompensationMultipy = 'multiply';
//***********************

function draw(e){
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;

  if(hue >= 360){
     hue = 0;
  }

  if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
    direction = !direction;
  }
  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }


}

canvas.addEventListener('mousedown',(e)=> {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);
