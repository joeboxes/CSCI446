// ResourceBakos.js

// screens
ResourceBakos.TEX_INTRO = 0;
ResourceBakos.TEX_ENDING = 0;
ResourceBakos.TEX_LOSE = 0;
// in-game
ResourceBakos.TEX_BG_MAIN = 0;
ResourceBakos.TEX_BAKOS_1 = 0;
ResourceBakos.TEX_BAKOS_2 = 0;
ResourceBakos.TEX_SNAKE_1 = 0;
ResourceBakos.TEX_SNAKE_2 = 0;
ResourceBakos.TEX_DB_1 = 0;
ResourceBakos.TEX_DB_2 = 0;
ResourceBakos.TEX_JAVA = 0;
ResourceBakos.TEX_RUBY = 0;
ResourceBakos.TEX_ROCK = 0;
ResourceBakos.TEX_DIRT = 0;
ResourceBakos.TEX_GRASS = 0;
ResourceBakos.TEX_EMPTY = 0;

function ResourceBakos(){
	Code.extendClass(this,Resource);
	this.imgLoader.setLoadList( "images/", new Array("default.png") );
	/*
	this.tex = this.base.tex;
	alert( [this.tex.length, this.base.tex.length] );
	*/
//	this.base.fxnLoader.setLoadList(new Array());
	 // = new MultiLoader(new Array());
//	imgLoader // = new ImageLoader("", new Array());
	//this.base.getFxn1();
	
}

/*
function ClassB(){
	Code.extendClass(this,ClassA);
	var c = 890;
	this.getFxn1 = getFxn1;
	function getFxn1(){
		return c;//this.base.getFxn1();
	}
}
*/



