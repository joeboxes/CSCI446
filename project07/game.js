// http://www.webmonkey.com/2010/02/make_oop_classes_in_javascript/
// http://stackoverflow.com/questions/7486825/javascript-inheritance
// global vars
var resource = null;
var canvas = null;
var lattice = null;
var ticker = null;
var RECT_SIZE = 25;
var GRID_SIZE_X = 0;
var GRID_SIZE_Y = 0;
var frameSpeed = 500;
var debugHTMLID = "output";
var canvasHTMLID = "canvas0";
var debug;
//
var time = 0;

// init function called on page load complete
function startLoad(){
	resource = new ResourceBakos();
	resource.setFxnComplete(load1);
	resource.load();
}
function load1(){
	debug = new Output( document.getElementById(debugHTMLID) );
	debug.setMaxChars(75); debug.setMaxLines(3);
	
	canvas = new Canvas( document.getElementById(canvasHTMLID) );
	GRID_SIZE_X = Math.floor(canvas.width/RECT_SIZE);
	GRID_SIZE_Y = Math.floor(canvas.height/RECT_SIZE);
	lattice = new Lattice(GRID_SIZE_X,GRID_SIZE_Y, Obj2D);
	
	ticker = new Ticker(frameSpeed);
	
	addListeners();
	
}
function imgLoadedFxn(){//arr){
	renderScene();
	
	var fxnLoader = new MultiLoader( new Array(nextFxn,nextFxn,nextFxn) );
	fxnLoader.load();
}
// INTERACTION
function enterFrameFxn(){
	++time;
	debug.write("time: "+time);
	renderScene();
}
function onClickFxn(o){
	debug.write("click: <"+o.x+","+o.y+">");
	var pos = o;
		var context = canvas.getContext();
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.strokeStyle = "#00FF00";
		context.lineWidth = 2;
		context.arc(pos.x,pos.y, 10, 0,2*Math.PI, true);
		context.stroke();
		context.closePath();
		context.fill();
}
function resizeEventFxn(e){}


function addListeners(){
	window.onresize = resizeEventFxn;
	canvas.addListeners();
	canvas.addFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.addFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.start();
}
function removeListeners(){
	window.onresize = null;
	canvas.removeListeners();
	canvas.removeFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.removeFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.stop();
}
// RENDERING - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderScene(){
	var context = canvas.getContext();
	//bg
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	
	/*
	context.fillStyle = '#CFF';
	context.fillRect(0,0, canvas.width,canvas.height);
	var i, j;
	
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	
	context.strokeStyle = '#000';
	context.lineWidth = 1;
*/
/*
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
*/
//	context.drawImage(img,25,25);
}





