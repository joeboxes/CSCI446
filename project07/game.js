// http://www.webmonkey.com/2010/02/make_oop_classes_in_javascript/
// http://stackoverflow.com/questions/7486825/javascript-inheritance
// global vars
var resource = null;
var canvas = null;
var lattice = null;
var ticker = null;
var keyboard = null;
var RECT_SIZE = 25;
var GRID_SIZE_X = 0;
var GRID_SIZE_Y = 0;
var frameSpeed = 200;
var debugHTMLID = "output";
var canvasHTMLID = "canvas0";
var debug;
//
var time = 0;
var charMain = null;

// init function called on page load complete
function startLoad(){
	resource = new ResourceBakos();
	resource.setFxnComplete(load1);
	resource.load();
}
function load1(){
	debug = new Output( document.getElementById(debugHTMLID) );
	debug.setMaxChars(75); debug.setMaxLines(3);
	
	canvas = new Canvas( document.getElementById(canvasHTMLID) );
	GRID_SIZE_X = Math.floor(canvas.width/RECT_SIZE);
	GRID_SIZE_Y = Math.floor(canvas.height/RECT_SIZE);
	lattice = new Lattice(GRID_SIZE_X,GRID_SIZE_Y,null);// Obj2D);
	
	ticker = new Ticker(frameSpeed);
	keyboard = new Keyboard();
	
	
	// LEVEL
	//charMain = new Obj2D(10,5, new Array( resource.tex[ResourceBakos.TEX_BAKOS_1]) );
	loadLevel(1);
	addListeners();
	
}
function imgLoadedFxn(){//arr){
	renderScene();
	
	var fxnLoader = new MultiLoader( new Array(nextFxn,nextFxn,nextFxn) );
	fxnLoader.load();
}
// INTERACTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function enterFrameFxn(){
	++time;
	//debug.write("time: "+time);
	renderScene();
}
function keyDownFxn(key){
	debug.write("keydn: "+key);
	if(key==Keyboard.KEY_UP){
		charMain.pos.y -= 1;
	}else if(key==Keyboard.KEY_DN){
		charMain.pos.y += 1;
	}else if(key==Keyboard.KEY_LF){
		charMain.pos.x -= 1;
	}else if(key==Keyboard.KEY_RT){
		charMain.pos.x += 1;
	}
}
function keyUpFxn(key){
	//debug.write("keyup: "+key);
}
function onClickFxn(o){
	debug.write("click: <"+o.x+","+o.y+">");
	var pos = o;
		var context = canvas.getContext();
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.strokeStyle = "#00FF00";
		context.lineWidth = 2;
		context.arc(pos.x,pos.y, 10, 0,2*Math.PI, true);
		context.stroke();
		context.closePath();
		context.fill();
}
function resizeEventFxn(e){}


function addListeners(){
	window.onresize = resizeEventFxn;
	canvas.addListeners();
	canvas.addFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.addFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.start();
	keyboard.addFunction(Keyboard.EVENT_KEY_DOWN,keyDownFxn);
	keyboard.addFunction(Keyboard.EVENT_KEY_UP,keyUpFxn);
	keyboard.addListeners();
}
function removeListeners(){
	window.onresize = null;
	canvas.removeListeners();
	canvas.removeFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.removeFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.stop();
	keyboard.removeFunction(Keyboard.EVENT_KEY_DOWN,keyDownFxn);
	keyboard.removeFunction(Keyboard.EVENT_KEY_UP,keyUpFxn);
	keyboard.removeListeners();
}
// RENDERING - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderScene(){
	var context = canvas.getContext();
	// bg
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	// lattice
	var img, pos, obj;
	var i, len = lattice.getLength();
	for(i=0;i<len;++i){
		obj = lattice.getIndex(i);
		img = obj.getSelectedImage();
		if(img){
			context.fillStyle = context.createPattern(img,'repeat');
			pos = obj.pos;
			context.fillRect(pos.x*RECT_SIZE,pos.y*RECT_SIZE,img.width,img.height);
		}
	}
	/*
	img = charMain.getSelectedImage();
	context.fillStyle = context.createPattern(img,'repeat');
	pos = charMain.pos;
	context.fillRect(pos.x*RECT_SIZE,pos.y*RECT_SIZE,img.width,img.height);
	*/
	/*
	context.fillStyle = '#CFF';
	context.fillRect(0,0, canvas.width,canvas.height);
	var i, j;
	
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	
	context.strokeStyle = '#000';
	context.lineWidth = 1;
*/
/*
	for(i=0;i<=canvas.width;i+=RECT_SIZE){
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,canvas.height);
		context.stroke();
		context.closePath();
	}
	for(j=0;j<=canvas.height;j+=RECT_SIZE){
		context.beginPath();
		context.moveTo(0,j);
		context.lineTo(canvas.width,j);
		context.stroke();
		context.closePath();
	}
*/
//	context.drawImage(img,25,25);
}

// LEVEL AUTO-LOADING -------------------------------------------------
function loadLevel(i){
	var levelString = resource.map[i];
	var i, len, obj, x,y, arr, ch;
	len = levelString.length;
	x = 0; y = 0;
	for(i=0;i<len;++i){
		ch = levelString.charAt(i);
		arr = new Array();
		switch(ch){
			case ResourceBakos.SYM_DIRT :
				arr.push(resource.tex[ResourceBakos.TEX_DIRT_1]);
				break;
			case ResourceBakos.SYM_RUBY :
				arr.push(resource.tex[ResourceBakos.TEX_RUBY_3]);
				break;
			case ResourceBakos.SYM_ROCK :
				arr.push(resource.tex[ResourceBakos.TEX_ROCK_3]);
				break;
			case ResourceBakos.SYM_PYTHON :
				arr.push(resource.tex[ResourceBakos.TEX_PYTHON_1]);
				break;
			case ResourceBakos.SYM_MAIN_CHAR :
				arr.push(resource.tex[ResourceBakos.TEX_BAKOS_1]);
				break;
			case ResourceBakos.SYM_DB :
				arr.push(resource.tex[ResourceBakos.TEX_DB_3]);
				break;
		}
		obj = new Obj2D(x,y, arr);
		lattice.setIndex(i,obj);
		if(ch==ResourceBakos.SYM_MAIN_CHAR){
			charMain = obj;
		}
		++x;
		if(x>=GRID_SIZE_X){
			x = 0; ++y;
		}
	}
	
}


/*

ResourceBakos.SYM_MAIN_CHAR = 'M';
ResourceBakos.SYM_ROCK = '*';
ResourceBakos.SYM_DIRT = '-';
ResourceBakos.SYM_RUBY = 'R';
ResourceBakos.SYM_PYTHON = 'S';
ResourceBakos.SYM_DB = 'D';

ResourceBakos.TEX_BAKOS_1 = 0;
ResourceBakos.TEX_BG_ROW_1 = 1;
ResourceBakos.TEX_DB_1 = 2;
ResourceBakos.TEX_DB_2 = 3;
ResourceBakos.TEX_DB_3 = 4;
ResourceBakos.TEX_DIRT_1 = 5;
ResourceBakos.TEX_PYTHON_1 = 6;
ResourceBakos.TEX_ROCK_1 = 7;
ResourceBakos.TEX_ROCK_2 = 8;
ResourceBakos.TEX_ROCK_3 = 9;
ResourceBakos.TEX_RUBY_1 = 10;
ResourceBakos.TEX_RUBY_2 = 11;
ResourceBakos.TEX_RUBY_3 = 12;
*/



