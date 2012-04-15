// Lattice.js

// CLASS VARIABLES
function Lattice(xNum,yNum, obj){
	// private
	var a = null;
	var x, y, xy;
	// constructor
	setDims(xNum,yNum, obj);
	
	// public
	this.setDims = setDims;
	function setDims(xNum,yNum, obj){
		x = xNum; y = yNum; xy = x*y;
		/*if(a!=null && a!=undefined){
			delete a;
		}*/
		a = new Array(xy);
		var i;
		if(obj==null || obj==undefined){
			for(i=0;i<xy;++i){
				a[i] = null;
			}
		}else{
			for(i=0;i<xy;++i){
				a[i] = new obj();
			}
		}
	}
	this.getElement = function(xN,yN){
		var i = yN*x + xN;
		return a[i];
	}
	this.setElement = function(xN,yN, val){
		var i = yN*x + xN;
		a[i] = val;
	}
	this.getIndex = function(i){
		return a[i];
	}
	this.setIndex = function(i, val){
		a[i] = val;
	}

}


