// Dispatch.js

// CLASS VARIABLES
Dispatch.EVENT_START = "evtsta";
Dispatch.EVENT_STOP = "evtsto";
Dispatch.EVENT_LOAD = "evtloa";
Dispatch.EVENT_COMPLETE = "evtcmp";

function Dispatch(){
	
// VARIABLES --------------------------------------------------------------
	// public
	
	// private
	var list;
	
	// constructor
	list = new Array();
	
	
// FUNCTIONS --------------------------------------------------------------
	// public
	this.alertAll = alertAll;
	function alertAll(str,o){
		if(list[str] == undefined){
			return;
		}
		var i;
		for(i=0;i<list[str].length;++i){
			list[str][i](o);
		}
	}
	this.addFunction = addFunction;
	function addFunction(str,fxn){
		if( list[str] == undefined){
			list[str] = new Array();
		}
		Code.addUnique(list[str],fxn);
	}
	this.removeFunction = removeFunction;
	function removeFunction(str,fxn){
		if( list[str] == undefined){
			return;
		}
		Code.removeElement(list[str],fxn);
		if(list[str].length == 0){
			list[str] = undefined;
		}
	}
	// private
	//
}



