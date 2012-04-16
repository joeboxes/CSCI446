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
var titleHTMLID = "title";
var debug;
var titleBase = "Bakos' Ruby Data Mining";
var title;
//
var time = 0;
var score = 0;
var charMain = null;
var charListAll = new Array();
var level = 1;
var levelMax = 5;
var speedChar = 0.2;
var speedEnem = 0.1;

// init function called on page load complete
function startLoad(){
	resource = new ResourceBakos();
	resource.setFxnComplete(loadAll);
	resource.load();
}
function loadAll(){
	debug = new Output( document.getElementById(debugHTMLID) );
	debug.setMaxChars(75); debug.setMaxLines(3);
	
	title = new Output( document.getElementById(titleHTMLID) );
	title.setMaxChars(35); title.setMaxLines(1);
	
	canvas = new Canvas( document.getElementById(canvasHTMLID) );
	GRID_SIZE_X = Math.floor(canvas.width/RECT_SIZE);
	GRID_SIZE_Y = Math.floor(canvas.height/RECT_SIZE);
	lattice = new Lattice(GRID_SIZE_X,GRID_SIZE_Y, Voxel);
	
	ticker = new Ticker(frameSpeed);
	keyboard = new Keyboard();
	
	level = 1; loadLevel(level);
	updateTitle(charMain.amt);
	addListeners();
	
}
function updateTitle(str,obj){
	if(obj==true){
		title.write(str);
	}else{
		title.write(titleBase+" : $"+str+"K");
	}
}
// INTERACTION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function enterFrameFxn(){
	++time;
	processScene();
	renderScene();
}
function keyDownFxn(key){
	if(!charMain.moving){
		if(key==Keyboard.KEY_UP){
			charMain.dir = Obj2D.DIR_UP;
		}else if(key==Keyboard.KEY_DN){
			charMain.dir = Obj2D.DIR_DN;
		}else if(key==Keyboard.KEY_LF){
			charMain.dir = Obj2D.DIR_LF;
		}else if(key==Keyboard.KEY_RT){
			charMain.dir = Obj2D.DIR_RT;
		}
	}
}
function onClickFxn(o){
	// 
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
	var i, j, k, len, ch, obj, arr, next, dir, vox, v, u, canMove;
	next = new V2D(0,0);
	dir = new V2D(0,0);
	var speed = 0;
	// REFRESH AI MAP
	
	// MOVE CHARS
	for(i=0;i<charListAll.length;++i){
		ch = charListAll[i];
		if( ch.type == Obj2D.TYPE_CHAR){
			speed = speedChar;
		}else{ //  ENEMY LOGIC GOETH HERE
			speed = speedEnem;
			
			
			
			
			
			
			
		}
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
				u = lattice.getElement(ch.pos.x,ch.pos.y); // AM IN
				v = lattice.getElement(Math.round(next.x),Math.round(next.y)); // AVG IN
				w = lattice.getElement(ch.dest.x,ch.dest.y); // WILL BE IN
				if(u!=v){// switched voxels
					u.removeChar(ch);
					w.addChar(ch);
					w.setBG( new Array() );
				}
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
					vox = lattice.getElement(next.x,next.y);
					arr = vox.getChars();
					canMove = true;
					for(j=0;j<arr.length;++j){
						obj = arr[j];
						if( obj.type==Obj2D.TYPE_WALL || obj.type==Obj2D.TYPE_ITEM || obj.type==Obj2D.TYPE_EXIT ){
							canMove = false;
							break;
						}
					}
					if(canMove){
						for(j=0;j<arr.length;++j){
							obj = arr[j];
							if( obj.type==Obj2D.TYPE_NONE || obj.type==Obj2D.TYPE_EXIT){
								obj.checkMe(ch);
								vox.removeChar(obj);
								//debug.write("amt: "+ch.amt);
								updateTitle(ch.amt);
							}
						}
						ch.dest.x = next.x; ch.dest.y = next.y;
						ch.moving = true;
					}else{
						obj.nextImage();
						obj.checkMe(ch);
						ch.moving = false; ch.dir = Obj2D.DIR_NA;
					}
				}else{ // obstruction/limit - cannot move
					ch.moving = false; ch.dir = Obj2D.DIR_NA;
				}
			}
		}
	}
	// check for exit
	if(charMain.complete){
		removeListeners();
		len = lattice.getLength();
		for(i=0;i<len;++i){
			vox = lattice.getIndex(i);
			arr = vox.getChars();
			for(j=0;j<arr.length;++j){
				ch = arr[j];
				ch.setSelectedImage(666);
			}
			vox.setBG( new Array() );
		}
		renderScene();
		updateTitle('Completed Level '+level+'!', true);
		level += 1;
		if(level<=levelMax){
			loadLevel(level);
			charMain.amt = score;
			addListeners();
		}
	}
}	
// RENDERING - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderScene(){
	var context = canvas.getContext();
	var img, obj, vox, arr, x, y, i, j, len;
	// bg
	var bgImage = resource.tex[ResourceBakos.TEX_BG_ROW_1];
	context.fillStyle = context.createPattern(bgImage,'repeat');
	context.fillRect(0,0,canvas.width,canvas.height);
	len = lattice.getLength();
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
	var levelString = resource.map[i-1];
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
				break;
			case ResourceBakos.SYM_RUBY :
				obj = new Obj2D(x,y, new Array(null,resource.tex[ResourceBakos.TEX_RUBY_1],resource.tex[ResourceBakos.TEX_RUBY_2],resource.tex[ResourceBakos.TEX_RUBY_3]));
				obj.type = Obj2D.TYPE_ITEM; obj.amt = Math.floor(Math.random()*10+10); vox.addChar(obj);
				break;
			case ResourceBakos.SYM_ROCK :
				obj = new Obj2D(x,y, new Array(null, resource.tex[ResourceBakos.TEX_ROCK_1],resource.tex[ResourceBakos.TEX_ROCK_2],resource.tex[ResourceBakos.TEX_ROCK_3]));
				obj.type = Obj2D.TYPE_WALL; vox.addChar(obj);
				break;
			case ResourceBakos.SYM_PYTHON :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_PYTHON_1]));
				obj.type = Obj2D.TYPE_ENEM; vox.addChar(obj); charListAll.push(obj);
				break;
			case ResourceBakos.SYM_MAIN_CHAR :
				obj = new Obj2D(x,y, new Array(resource.tex[ResourceBakos.TEX_BAKOS_1]));
				obj.type = Obj2D.TYPE_CHAR; vox.addChar(obj); charListAll.push(obj);
				break;
			case ResourceBakos.SYM_DB :
				obj = new Obj2D(x,y, new Array(null,resource.tex[ResourceBakos.TEX_DB_1],resource.tex[ResourceBakos.TEX_DB_2],resource.tex[ResourceBakos.TEX_DB_3],resource.tex[ResourceBakos.TEX_DB_3]));
				obj.type = Obj2D.TYPE_EXIT; vox.addChar(obj);
				break;
		}
		if(ch==ResourceBakos.SYM_MAIN_CHAR){ charMain = obj; }
		++x; if(x>=GRID_SIZE_X){ x = 0; ++y; }
	}
}

