function draw()
  {
    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello worldddd!';
var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 90;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#037bfc';
ctx.stroke();
}
}
