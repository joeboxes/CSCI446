// ResourceBakos.js

// screens
/*
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
*/
ResourceBakos.TEX_BAKOS_1 = 0;
ResourceBakos.TEX_BG_ROW_1 = 1;
ResourceBakos.TEX_DB_1 = 2;
ResourceBakos.TEX_DB_2 = 3;
ResourceBakos.TEX_DB_3 = 4;
ResourceBakos.TEX_DIRT_1 = 5;
ResourceBakos.PYTHON_1 = 6;
ResourceBakos.ROCK_1 = 7;
ResourceBakos.ROCK_2 = 8;
ResourceBakos.ROCK_3 = 9;
ResourceBakos.RUBY_1 = 10;
ResourceBakos.RUBY_2 = 11;
ResourceBakos.RUBY_3 = 12;

function ResourceBakos(){
	Code.extendClass(this,Resource);
	//var base = this.base;
	// set image resource list
	this.imgLoader.setLoadList( "images/", new Array(	"bakos_1.png",
														"bg_row_1.png",
														"db_1.png",
														"db_2.png",
														"db_3.png",
														"dirt_1.png",
														"python_1.png",
														"rock_1.png",
														"rock_2.png",
														"rock_3.png",
														"ruby_1.png",
														"ruby_2.png",
														"ruby_3.png") );

}
	/*
	this.tex = this.base.tex;
	alert( [this.tex.length, this.base.tex.length] );
	*/
//	this.base.fxnLoader.setLoadList(new Array());
	 // = new MultiLoader(new Array());
//	imgLoader // = new ImageLoader("", new Array());
	//this.base.getFxn1();
	//this.setImageLoader = setImageLoader;
	/*function setImageLoader(){
		alert(base);
		base.imgLoader.setLoadList( "images/", new Array("bakos_1.png") );
		alert(base.imgLoader);
		
	}*/

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



