// V2D.js
function V2D(xP,yP){ // input is debug HTML object
	this.x = xP; this.y = yP;
	this.length = length;
	function length(){
		return Math.sqrt(x*x+y*y);
	}
	this.norm = norm;
	function norm(){
		dist = Math.sqrt(this.x*this.x+this.y*this.y);
		this.x = this.x/dist; this.y = this.y/dist;
	}
	this.kill = kill
	function kill(){
		this.x = undefined; this.y = undefined;
		//this = null; FF does not like
	}
}

