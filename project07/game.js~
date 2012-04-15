// http://www.webmonkey.com/2010/02/make_oop_classes_in_javascript/
// global vars
var canvas = null; // html element
var context = null; // js element

function Bacon(){
	this.n = "baco";
}

// init function called on page load complete
function startLoad(){
	/*if( !canvasSupport() ){ // canvas not supported by browser
		return;
	}*/
	canvas = document.getElementById("canvas0");
	//canvas.addEventListener('click', canClickFxn);
	
	
	
	context = canvas.getContext("2d");
	renderScene();
	
	var debug = new Output( document.getElementById("output") );
	debug.setMaxChars(75);
	debug.setMaxLines(3);
	//
	debug.write("debug this baby");
	debug.write("line 2 goeth here");
	debug.write("line 3 goeth here 123456789098234923084123423");
	debug.write("line 4 goeth here 1213523424323452334254544");
	debug.write("line 5 goeth herea asdasdaabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghi");
	//debug.clear();
	var lat = new Lattice(24,16, null);
	//alert(lat.getElement(0,0));
	var can = new Canvas(canvas);
//	alert( can.getCanvas() );
//	alert(  );
//	alert(canvas.x);
	
	
	
	var dispatch = new Dispatch();
	dispatch.addFunction(EVENT_START,disFxn);
	dispatch.alertAll(EVENT_START,1);
	dispatch.removeFunction(EVENT_START,disFxn);
	dispatch.alertAll(EVENT_START,1);
	// LISTENERS ----------------------------------------------
	setupListeners();
}

function disFxn(o){
	alert(['dispatched:',o]);
}

function resizeEventFxn(e){
	//alert('hi');
}
function setupListeners(){
	window.onresize = resizeEventFxn;//function(e){ alert('resized'); }
}

function canClickFxn(e){
	//alert( [e.clientX,e.clientY, e.offsetX,e.offsetY] );
	var xPos = canvas.offsetLeft + canvas.offsetParent.offsetLeft;
	var yPos = canvas.offsetTop + canvas.offsetParent.offsetTop;
	
	xPos = e.pageX - xPos;
	yPos = e.pageY - yPos;
	
	context.beginPath();
	context.fillStyle = "#FF0000";
	context.strokeStyle = "#00FF00";
	context.lineWidth = 2;
	context.arc(xPos,yPos, 10, 0,2*Math.PI, true);
// 
// e.offsetX,e.offsetY
	context.stroke();
	context.closePath();
	context.fill();
	//alert( [e.clientX,e.clientY, e.screenX,screenY.e, e.offsetX,e.offsetY, e.layerX,e.layerY] );
	
}

// 
function renderScene(){
	//bg
	context.fillStyle = '#CFF';
	context.fillRect(0,0, canvas.width,canvas.height);
	var i, j;
	context.strokeStyle = '#000';
	context.lineWidth = 1;
	var incX = 25;
	var incY = 25;
	for(i=0;i<=canvas.width;i+=incX){
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,canvas.height);
		context.stroke();
		context.closePath();
	}
	//alert('hia');
	for(j=0;j<=canvas.height;j+=incY){
		context.beginPath();
		context.moveTo(0,j);
		context.lineTo(canvas.width,j);
		context.stroke();
		context.closePath();
	}
	
}
// alert( getHex(0x4F56) );
function getHex(intVal){
	return '#'+intVal.toString(16);
}




