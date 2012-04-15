// http://www.webmonkey.com/2010/02/make_oop_classes_in_javascript/
// global vars
var canvas = null;

// init function called on page load complete
function startLoad(){
	var debug = new Output( document.getElementById("output") );
	debug.setMaxChars(75);
	debug.setMaxLines(3);
	debug.write("debug window");
	//
	var lat = new Lattice(24,16, null);
	canvas = new Canvas( document.getElementById("canvas0") );
	// LISTENERS ----------------------------------------------
	setupListeners();
	//alert("fun");
	renderScene();
}

function disFxn(o){
	alert(['dispatched:',o]);
}

function resizeEventFxn(e){
	//alert('hi');
}
function setupListeners(){
	window.onresize = resizeEventFxn;
	//canvas.addFunction(Canvas.EVENT_CLICK,disFxn);
}

function renderScene(){
	var canva = canvas.getCanvas();
	var context = canvas.getContext();
	//bg
	context.fillStyle = '#CFF';
	context.fillRect(0,0, canva.width,canva.height);
	var i, j;
	context.strokeStyle = '#000';
	context.lineWidth = 1;
	var incX = 25;
	var incY = 25;
	for(i=0;i<=canva.width;i+=incX){
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,canva.height);
		context.stroke();
		context.closePath();
	}
	for(j=0;j<=canva.height;j+=incY){
		context.beginPath();
		context.moveTo(0,j);
		context.lineTo(canva.width,j);
		context.stroke();
		context.closePath();
	}
	
}





