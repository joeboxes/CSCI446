// Canvas.js

// CLASS VARIABLES
Canvas.EVENT_CLICK = "canevtclk";

function Canvas(canHTML){ // input is canvas HTML object
// VARIABLES --------------------------------------------------------------
	// public
	this.width = 0;
	this.height = 0;
	// private
	var canvas;
	var context;
	var dispatch;
	
	// constructor
	dispatch = new Dispatch();
	canvas = canHTML;
	this.width = canvas.width;
	this.height = canvas.height;
	context = canvas.getContext("2d");
	addListeners();
	
// FUNCTIONS --------------------------------------------------------------
	// public
	// dispatch -----------------------------------------------------------
	this.addFunction = addFunction;
	function addFunction(str,fxn){
		dispatch.addFunction(str,fxn);
	}
	this.removeFunction = removeFunction;
	function removeFunction(str,fxn){
		dispatch.removeFunction(str,fxn);
	}
	this.alertAll = alertAll;
	function alertAll(str,o){
		dispatch.alertAll(str,o);
	}
	// getters -----------------------------------------------------------
	this.getCanvas = getCanvas;
	function getCanvas(){
		return canvas;
	}
	this.getContext = getContext;
	function getContext(){
		return context;
	}
	// LISTENERS ----------------------------------------------------------
	this.addListeners = addListeners;
	function addListeners(){
		canvas.addEventListener('click', canvasClickFxn);
	}
	function canvasClickFxn(e){
		var pos = new V2D(0,0);
		var ele = canvas;
		while(ele != null){
			pos.x += ele.offsetLeft;
			pos.y += ele.offsetTop;
			ele = ele.offsetParent;
		}
		pos.x = e.pageX - pos.x;
		pos.y = e.pageY - pos.y;
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.strokeStyle = "#00FF00";
		context.lineWidth = 2;
		context.arc(pos.x,pos.y, 10, 0,2*Math.PI, true);
		context.stroke();
		context.closePath();
		context.fill();
		alertAll(Canvas.EVENT_CLICK,pos);
		pos = null;
	}
}




