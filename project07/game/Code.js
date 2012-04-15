// Lattice.js

// CLASS VARIABLES
function Code(){
	//var priv;
	alert('you don\'t need to instantiate me');
	//this.hia = hia;
	/*function hia(){
		alert('hia');
	}*/
	
}
// array functions ----------------------------------------------
Code.elementExists = function(a,o){
	var i;
	for(i=0;i<a.length;++i){
		if(a[i]==o){
			return true;
		}
	}
	return false;
}
Code.addUnique = function(a,o){
	if( !Code.elementExists(a,o) ){
		a.push(o);
	}
}
Code.removeElement = function(a,o){
	var i;
	for(i=0;i<a.length;++i){
		if(a[i]==o){
			while(i<a.length){
				a[i] = a[i+1];
				++i;
			}
			a.pop();
			break;
		}
	}
}
// conversion functions ----------------------------------------------
function getHex(intVal){
	return '#'+intVal.toString(16);
}
















