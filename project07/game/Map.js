// Map.js
Map.WALL = 999999;
Map.INIT = 0;

function Map(xNum,yNum){
	var a = new Array();
	var wid = 0;
	var hei = 0;
	var len = 0;
	setDims(xNum,yNum);
	
	this.setDims = setDims;
	function setDims(xNum,yNum){
		wid = xNum; hei = yNum; len = xNum*yNum;
		Code.emptyArray(a);
		var i;
		for(i=0;i<len;++i){
			a[i] = 0;
		}
	}
// -----------------------------------------------
	this.setElement = function(xN,yN, val){
		var xF = Math.floor(xN), yF = Math.floor(yN);
		var i = yF*wid + xF;
		a[i] = val;
	}
	this.setIndex = function(i, val){
		a[i] = val;
	}
// -----------------------------------------------
	this.clear = clear;
	function clear(){
		var i;
		for(i=0;i<len;++i){
			a[i] = Map.INIT;
		}
	}
// -----------------------------------------------
	this.createPaths = createPaths;
	function createPaths(xLoc,yLoc){
		
		

//start at 0 location - push L/R/U/D into queue & set each as num+1 until queue empty


	}
}



