const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
	if (!isDrawing) return; //will stop the the function from running when they are not moused down
	console.log(e);
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX, lastY);
	//go to
	ctx.lineTo(e.offsetX, e.offsetY);	
	ctx.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	//using ES6 we can write above two line in on. like this: [lastX, lastY]=[e.offsetX, e.offsetY]; this is callet restructring an array
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousemdown', () => isDrawing = true);
canvas.addEventListener('mousemup', () => isDrawing = false);
canvas.addEventListener('mousemout', () => isDrawing = true);
