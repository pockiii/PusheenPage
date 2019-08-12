var c = document.getElementById("curvedLine");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(30, 40, 60, 40, 70, 20);
ctx.lineWidth = 30;
ctx.strokeStyle = "#4B280C";
ctx.lineCap = 'round';
ctx.stroke();


var c = document.getElementById("curvedLine2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(30, 40, 60, 40, 70, 20);
ctx.lineWidth = 30;
ctx.strokeStyle = "#4B280C";
ctx.lineCap = 'round';
ctx.stroke();
