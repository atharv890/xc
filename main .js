var mouse="";
var px;
var py;
canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color="red"; 
width=1;
canvas.addEventListener("mousedown",zx);
function zx(g){
color=document.getElementById("gh").value;
width=document.getElementById("nm").value;
}
canvas.addEventListener("mousemove",vb);
function vb(e){
   currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
if(mouse=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width; 
console.log("previous x and y coordiantes");
console.log("x="+px+"y="+py);
ctx.moveTo(px,py);
console.log("current x and y coordiantes");
console.log("x="+currentx+"y="+currenty);
ctx.arc(currentx,currenty,radius,0,2*MAth.PI);
ctx.stroke();
}
px=currentx;
py=currenty;
}
canvas.addEventListener("mouseup",nu);
function nu(e){
   mouse="mouseup";
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
   mouse="mouseleave";
}
function submit(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}