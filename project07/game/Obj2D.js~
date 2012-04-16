// Obj2D.js

function Obj2D(x,y, arr){
	this.pos = new V2D(x,y);
	var imgList = new Array();
	var imgSel = -1;
	setImageList(arr);
	
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
		imgSel = i;
		imgSel = Math.max(0,imgSel);
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
	this.render = render;
	function render(){
		//
	}
	// -----------------------------------------
	this.process = process;
	function process(){
		//
	}
}





