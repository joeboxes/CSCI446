// V2D.js

// CLASS VARIABLES
function V2D(xP,yP){ // input is debug HTML object
	
// VARIABLES --------------------------------------------------------------
	// public
	this.x = 0;
	this.y = 0;
	// private
	
	// constructor
	x = xP; y = yP;
	
	
// FUNCTIONS --------------------------------------------------------------
	// public
	this.length = length;
	function length(){
		return Math.sqrt(x*x+y*y);
	}
	this.norm = norm;
	function norm(){
		dist = Math.sqrt(x*x+y*y);
		x = x/dist; y = y/dist;
	}
	this.kill = kill
	function kill(){
		x = undefined; y = undefined;
		this = null;
	}
	// private
	//
}



