const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
	if (!isDrawing) return; //will stop the the function from running when they are not moused down
	console.log(e);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX, lastY);
	//go to
	ctx.lineTo(e.offsetX, e.offsetY);	
	ctx.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	//using ES6 we can write above two line in on. like this: [lastX, lastY]=[e.offsetX, e.offsetY]; this is callet restructring an array
	
	hue++;

	if (hue > 360) {
		hue = 0;
	}

	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction= !direction;
	}

	if (direction) {
	  ctx.lineWidth++;	
	} else {
	ctx.lineWidth--;
	}

}

canvas.addEventListener('mousemdown', () => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousemup', () => isDrawing = false);
canvas.addEventListener('mousemout', () => isDrawing = true);

