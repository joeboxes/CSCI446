// MultiLoader.js

function MultiLoader(arr){
	var list = new Array();
	var fxnComplete = null;
	var timer;
	setLoadList(arr);
	
	this.setLoadList = setLoadList;
	function setLoadList(arr){
		Code.emptyArray(list);
		var i;
		for(i=0;i<arr.length;++i){
			list.push(arr[i]);
		}
	}
	this.load = load;
	function load(){
		next(null);
	}
	function next(){
		if(list.length==0){
			if(fxnComplete!=null){
				fxnComplete();
			}
			return;
		}
		var fxn = list.pop();
		fxn();
		timer = setTimeout(next,10);
	}
	this.setFxnComplete = setFxnComplete;
	function setFxnComplete(fxn){
		fxnComplete = fxn;
	}
	this.kill = kill;
	function kill(){
		/*Code.emptyArray(list);
		list = null;
		fxnComplete = null;
		timer = null;*/
	}
}



