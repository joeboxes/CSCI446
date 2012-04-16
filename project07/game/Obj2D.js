// Obj2D.js
Obj2D.TYPE_NONE = 0;
Obj2D.TYPE_WALL = 1;
Obj2D.TYPE_CHAR = 2;
Obj2D.TYPE_ENEM = 3;

Obj2D.DIR_NA = 0;
Obj2D.DIR_UP = 1;
Obj2D.DIR_DN = 2;
Obj2D.DIR_LF = 3;
Obj2D.DIR_RT = 4;

function Obj2D(x,y, arr){// lat,
	//this.lattice = lat;
	this.dir = Obj2D.DIR_NA;
	this.moving = false;
	//
	this.pos = new V2D(x,y);
	this.dest = new V2D(0,0);
	this.type = Obj2D.TYPE_NONE;
	var imgList = new Array();
	var imgSel = -1;
	setImageList(arr);
	// -----------------------------------------
	
	// -----------------------------------------
	this.setImageList = setImageList;
	function setImageList(arr){
		Code.emptyArray(imgList);
		var i;
		if(arr!=null){
			for(i=0;i<arr.length;++i){
				imgList.push(arr[i]);
			}
		}
		setSelectedImage(0);
	}
	this.setSelectedImage = setSelectedImage;
	function setSelectedImage(i){
		imgSel = Math.max(0,i);
		imgSel = Math.min(imgList.length-1,imgSel);
	}
	this.getSelectedImage = getSelectedImage;
	function getSelectedImage(){
		if(imgSel>=0){
			return imgList[imgSel];
		}
		return null;
	}
	// -----------------------------------------
	this.moveRight = moveRight;
	function moveRight(){
		
	}
/*
	// -----------------------------------------
	this.render = render;
	function render(){
		//
	}
	// -----------------------------------------
	this.process = process;
	function process(){
		//
	}
*/
}





