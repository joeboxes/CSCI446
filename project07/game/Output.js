// CLASS VARIABLES
var CANVAS_NUM_ALL =  0;

function Output(debHTML){ // input is debug HTML object
	
// VARIABLES --------------------------------------------------------------
	// public
	//this.;
	// private
	var output;
	var MAXLINES;
	var MAXCHARS;
	
	
	
	// constructor
	output = debHTML;
	MAXLINES = 5;
	MAXCHARS = 100;
	
	
// FUNCTIONS --------------------------------------------------------------
	// public
	this.getOutput = getOutput;
	function getOutput(){
		return output;
	}

	this.setMaxChars = setMaxChars;
	function setMaxChars(n){
		MAXCHARS = n;
	}

	this.setMaxLines = setMaxLines;
	function setMaxLines(n){
		MAXLINES = n;
	}
	
	this.write = write;
	function write(str){
		if(str.length>MAXCHARS){
			str = str.substr(0,MAXCHARS);
		}
		var newStr = str+"<br>"+output.innerHTML;	
		var count;
		var index = 0;
		for(count=0; count<MAXLINES; ++count){
			index = newStr.indexOf("<br>",index+1);
			if( index<0 ){
				break;
			}
		}
		if(index>0){
			newStr = newStr.substr(0,index);
		}
		output.innerHTML = newStr;
	}
	
	this.clear = clear;
	function clear(){
		output.innerHTML = "";
	}
	
	// private
	function myFxn(){
		alert('private');
	}
}



