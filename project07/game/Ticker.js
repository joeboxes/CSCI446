// Ticker.js
Ticker.EVENT_TICK = "tkrevnttik";

function Ticker(delta){
	var timer = null;
	var deltaT = 0;
	var running = false;
	var dispatch = new Dispatch();
	setFrameSpeed(delta);
	
	this.setFrameSpeed = setFrameSpeed;
	function setFrameSpeed(delta){
		deltaT = delta;
	}
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
	// fxns -----------------------------------------------------------
	this.start = start;
	function start(){
		running = true;
		next(null);
	}
	this.stop = stop;
	function stop(){
		running = false;
	}
	function next(e){
		if(running){
			dispatch.alertAll(Ticker.EVENT_TICK);
			timer = setTimeout(next,deltaT);
		}
	}
}



