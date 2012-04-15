// Canvas.js

// CLASS VARIABLES
//var CANVAS_NUM_ALL =  0;
function Canvas(canHTML){ // input is canvas HTML object
// VARIABLES --------------------------------------------------------------
	// public
	//
	// private
	var canvas;
	var context;
	
	// constructor
	canvas = canHTML;
	context = canvas.getContext("2d");
	addListeners();
	
// FUNCTIONS --------------------------------------------------------------
	// public
	this.getCanvas = function(){
		return canvas;
	}
	this.getContext = function(){
		return context;
	}
	// LISTENERS ----------------------------------------------------------
	this.addListeners = addListeners;
	function addListeners(){
		canvas.addEventListener('click', canvasClickFxn);
	}

	function canvasClickFxn(e){
		var xPos = 0;
		var yPos = 0;
		var ele = canvas;
		while(ele != null){
			xPos += ele.offsetLeft;
			yPos += ele.offsetTop;
			ele = ele.offsetParent;
		}
		xPos = e.pageX - xPos;
		yPos = e.pageY - yPos;
		
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.strokeStyle = "#00FF00";
		context.lineWidth = 2;
		context.arc(xPos,yPos, 10, 0,2*Math.PI, true);
		context.stroke();
		context.closePath();
		context.fill();
		
	}
	// private
	/*function myFxn(){
		alert('private');
	}*/
	
}




