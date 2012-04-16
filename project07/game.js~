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
var frameSpeed = 10;
var debugHTMLID = "output";
var canvasHTMLID = "canvas0";
var debug;
//
var time = 0;
var charMain = null;
var charListAll = new Array();

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
	lattice = new Lattice(GRID_SIZE_X,GRID_SIZE_Y, Voxel);//null);// Obj2D);
	
	ticker = new Ticker(frameSpeed);
	keyboard = new Keyboard();
	
	loadLevel(1);
	addListeners();
	
}
// INTERACTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function enterFrameFxn(){
	++time;
	processScene();
	renderScene();
}
function keyDownFxn(key){
	debug.write("keydn: "+key);
	if(!charMain.moving){
		if(key==Keyboard.KEY_UP){
			charMain.dir = Obj2D.DIR_UP;//charMain.pos.y -= 1;
		}else if(key==Keyboard.KEY_DN){
			charMain.dir = Obj2D.DIR_DN;//charMain.pos.y += 1;
		}else if(key==Keyboard.KEY_LF){
			charMain.dir = Obj2D.DIR_LF;//charMain.pos.x -= 1;
		}else if(key==Keyboard.KEY_RT){
			charMain.dir = Obj2D.DIR_RT;//charMain.pos.x += 1;
		}
	}
}
function onClickFxn(o){
	//debug.write("click: <"+o.x+","+o.y+">");
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
function resizeEventFxn(e){
	// 
}
function addListeners(){
	window.onresize = resizeEventFxn;
	canvas.addListeners();
	canvas.addFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.addFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.start();
	keyboard.addFunction(Keyboard.EVENT_KEY_DOWN,keyDownFxn);
	keyboard.addListeners();
}
function removeListeners(){
	window.onresize = null;
	canvas.removeListeners();
	canvas.removeFunction(Canvas.EVENT_CLICK,onClickFxn);
	ticker.removeFunction(Ticker.EVENT_TICK,enterFrameFxn);
	ticker.stop();
	keyboard.removeFunction(Keyboard.EVENT_KEY_DOWN,keyDownFxn);
	keyboard.removeListeners();
}
// PROCESSING - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function processScene(){
	var i, j, k, len, ch, obj, next, dir;
	next = new V2D(0,0);
	dir = new V2D(0,0);
	var speed = 0.2;
	// MOVE CHARS
	for(i=0;i<charListAll.length;++i){
		ch = charListAll[i];
		if( ch.dir != Obj2D.DIR_NA){
			if(ch.dir==Obj2D.DIR_UP){ // set up direction from symbol
				dir.y = -1;
			}else if(ch.dir==Obj2D.DIR_DN){
				dir.y = 1;
			}else if(ch.dir==Obj2D.DIR_LF){
				dir.x = -1;
			}else if(ch.dir==Obj2D.DIR_RT){
				dir.x = 1;
			}
			if( ch.moving ){ // already moving
				next.x = ch.pos.x+dir.x*speed; next.y = ch.pos.y+dir.y*speed;
				if( (ch.pos.x<ch.dest.x && ch.dest.x<=next.x) || (ch.pos.x>ch.dest.x && ch.dest.x>=next.x) ||  
					(ch.pos.y<ch.dest.y && ch.dest.y<=next.y) || (ch.pos.y>ch.dest.y && ch.dest.y>=next.y) ){
					ch.pos.x = ch.dest.x; ch.pos.y = ch.dest.y;
					ch.moving = false; ch.dir = Obj2D.DIR_NA;
				}else{
					ch.pos.x = next.x; ch.pos.y = next.y;
				}
			}else{ // start moving if possible
				next.x = ch.pos.x+dir.x; next.y = ch.pos.y+dir.y;
				if( lattice.inLimits(next.x,next.y) ){ // available - movement
					ch.dest.x = next.x; ch.dest.y = next.y;
					ch.moving = true;
				}else{ // objstruction/limit - cannot move
					ch.moving = false; ch.dir = Obj2D.DIR_NA;
				}
			}
		}
	}
}	
// RENDERING - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderScene(){
	var context = canvas.getContext();
	// bg
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	// lattice
	var img, obj, vox, arr, x, y;
	var i, j, len = lattice.getLength();
	// BG
	x = 0; y = 0;
	for(i=0;i<len;++i){
		vox = lattice.getIndex(i);
		arr = vox.getBG();
		for(j=0;j<arr.length;++j){
			img = arr[j];
			context.fillStyle = context.createPattern(img,'repeat');
			context.fillRect(x*RECT_SIZE,y*RECT_SIZE,RECT_SIZE,RECT_SIZE);
		}
		++x; if(x>=GRID_SIZE_X){ x=0; ++y; }
	}
	// OBJECTS
	x = 0; y = 0;
	for(i=0;i<len;++i){
		vox = lattice.getIndex(i);
		arr = vox.getChars();
		for(j=0;j<arr.length;++j){
			obj = arr[j];
			img = obj.getSelectedImage();
			
			if(img!=null){
				context.drawImage(img, obj.pos.x*RECT_SIZE,obj.pos.y*RECT_SIZE);
			}
		}
		++x; if(x>=GRID_SIZE_X){ x=0; ++y; }
	}
}

// LEVEL AUTO-LOADING -------------------------------------------------
function loadLevel(i){
	lattice.clear(); Code.emptyArray(charListAll);
	var levelString = resource.map[i];
	var i, len, vox, obj, x,y, arr, ch;
	len = levelString.length;
	x = 0; y = 0;
	for(i=0;i<len;++i){
		ch = levelString.charAt(i);
		vox = lattice.getIndex(i);
		// BG
		switch(ch){
			case ResourceBakos.SYM_NONE :
				vox.setBG( new Array() );
				break;
			case ResourceBakos.SYM_MAIN_CHAR :
				vox.setBG( new Array() );
				break;
			default:
				vox.setBG( new Array(resource.tex[ResourceBakos.TEX_DIRT_1]) );
				break;
		}
		// CHAR
		switch(ch){
			case ResourceBakos.SYM_DIRT :
				//arr.push(resource.tex[ResourceBakos.TEX_DIRT_1]);
				break;
			case ResourceBakos.SYM_RUBY :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_RUBY_3]));
				vox.addChar(obj);
				break;
			case ResourceBakos.SYM_ROCK :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_ROCK_3]));
				vox.addChar(obj);
				break;
			case ResourceBakos.SYM_PYTHON :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_PYTHON_1]));
				vox.addChar(obj); charListAll.push(obj);
				break;
			case ResourceBakos.SYM_MAIN_CHAR :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_BAKOS_1]));
				vox.addChar(obj); charListAll.push(obj);
				break;
			case ResourceBakos.SYM_DB :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_DB_3]));
				vox.addChar(obj);
				break;
		}
		if(ch==ResourceBakos.SYM_MAIN_CHAR){ charMain = obj; }
		++x;
		if(x>=GRID_SIZE_X){ x = 0; ++y; }
	}
}


/*
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
