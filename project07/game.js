// http://www.webmonkey.com/2010/02/make_oop_classes_in_javascript/
// http://stackoverflow.com/questions/7486825/javascript-inheritance
// global vars
var resource = null;
var canvas = null;
var lattice = null;
var RECT_SIZE = 25;
var GRID_SIZE_X = 0;
var GRID_SIZE_Y = 0;
var debugHTMLID = "output";
var canvasHTMLID = "canvas0";
var debug;
var img = null;

// init function called on page load complete
function startLoad(){
	resource = new ResourceBakos();
	resource.setFxnComplete(load1);
	resource.load();
}
function load1(){
	debug = new Output( document.getElementById(debugHTMLID) );
	debug.setMaxChars(75); debug.setMaxLines(3);
	debug.write("debug window");
	
	canvas = new Canvas( document.getElementById(canvasHTMLID) );
	GRID_SIZE_X = Math.floor(canvas.width/RECT_SIZE);
	GRID_SIZE_Y = Math.floor(canvas.height/RECT_SIZE);
	lattice = new Lattice(GRID_SIZE_X,GRID_SIZE_Y, Obj2D);
	
	setupListeners();
	imgLoadedFxn();
	
	//var obj = new Obj2D(2,5);
	
	
}
function imgLoadedFxn(){//arr){
	img = resource.tex[0];//arr[0];
	renderScene();
	
	var fxnLoader = new MultiLoader( new Array(nextFxn,nextFxn,nextFxn) );
	fxnLoader.load();
}

function nextFxn(){
	//alert('eeeeeeeeeeee');
	debug.write("yay");
}

function disFxn(o){
	//alert(['dispatched:',o]);
}
function resizeEventFxn(e){
	//alert('hi');
}


function setupListeners(){
	window.onresize = resizeEventFxn;
	canvas.addFunction(Canvas.EVENT_CLICK,disFxn);
}

function renderScene(){
	var context = canvas.getContext();
	//bg
	context.fillStyle = '#CFF';
	context.fillRect(0,0, canvas.width,canvas.height);
	var i, j;
	context.strokeStyle = '#000';
	context.lineWidth = 1;
	for(i=0;i<=canvas.width;i+=RECT_SIZE){
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,canvas.height);
		context.stroke();
		context.closePath();
	}
	for(j=0;j<=canvas.height;j+=RECT_SIZE){
		context.beginPath();
		context.moveTo(0,j);
		context.lineTo(canvas.width,j);
		context.stroke();
		context.closePath();
	}
	context.drawImage(img,0,0);
}





