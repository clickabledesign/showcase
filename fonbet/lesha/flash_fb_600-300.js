(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,90);


(lib.bt = function() {
	this.initialize(img.bt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,216);


(lib.dd1 = function() {
	this.initialize(img.dd1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,126);


(lib.dd2 = function() {
	this.initialize(img.dd2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,74);


(lib.dd3 = function() {
	this.initialize(img.dd3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,60);


(lib.dd4 = function() {
	this.initialize(img.dd4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,182);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,73);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,74);


(lib.hand3 = function() {
	this.initialize(img.hand3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,117);


(lib.hand4 = function() {
	this.initialize(img.hand4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,117);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,69);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,125);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,70);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,70);


(lib.shados = function() {
	this.initialize(img.shados);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,326);


(lib.soccer = function() {
	this.initialize(img.soccer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,40);


(lib.tenis = function() {
	this.initialize(img.tenis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,27);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,532,102);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,86);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,85);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,85);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,93);


(lib.text6 = function() {
	this.initialize(img.text6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,86);


(lib.text7 = function() {
	this.initialize(img.text7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,86);


(lib.text8 = function() {
	this.initialize(img.text8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,86);


(lib.vall = function() {
	this.initialize(img.vall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,66);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.691,0.691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,297,149.2), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dd2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,41,74), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dd4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(0,0,65,64), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dd1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,68,126), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dd3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,80,60), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAkQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIALg+IABgCIAEgBIAaAAQAIgBAFAEQAGADACAGQACAGgCAIQgBAIgEAEQgEAFgGADQgGACgIAAIgLAAIgDARIgCAEIgDABgAgFgDIAIAAQAEAAACgCQADgBAAgDQABgEgCgCQgBgCgEAAIgJAAg");
	this.shape.setTransform(96.3,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAkQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IACgCIADgBIApAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgCAJIgBAEIgEABIgZAAIgCAJIAUAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAIIgBAEIgEABIgUAAIgCAJIAbAAIADABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABg");
	this.shape_1.setTransform(90.3,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAkIgGgBQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgSIgCgDIgEgBIgBAAIgEAWIgCAEIgDABIgMAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IABgCIAEgBIALAAIADABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgEAXIACAAIARgXIACgCIADgBIAEAAIALAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgYAeIADACIACADIAJAZIAAAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(84.2,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAkQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IACgCIADgBIApAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgCAJIgBAEIgEABIgZAAIgCAJIAUAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAIIgBAEIgEABIgUAAIgCAJIAbAAIADABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABg");
	this.shape_3.setTransform(77.9,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAkQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIADgOIABgGIADgJIAFgKIgBAAIgDAFIgDAFIgEAGIgHALIgDACIgCAAIgGAAIgDAAIgCgCIgDgLIgCgGIgBgFIgBgFIgBAAIABAKIAAAJIgBAGIgDAOIgBAEIgEABIgKAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IACgCIADgBIAKAAIADAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAIAKAhIAWghIACgCIAEAAIAKAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgLA+IgCAEIgDABg");
	this.shape_4.setTransform(70.7,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAkIgGgBQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgFgSIgCgDIgEgBIgBAAIgEAWIgCAEIgDABIgMAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IABgCIAEgBIALAAIADABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgEAXIACAAIARgXIACgCIADgBIAEAAIALAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgYAeIADACIACADIAJAZIAAAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_5.setTransform(63.5,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAkQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIALgRIgNgtQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIALAAIAFAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAGAXIAMgXIACgCIACgBIAEAAIAMAAIADABIgBACIglA/IgCACIgCABIgEABg");
	this.shape_6.setTransform(57.4,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAkQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IACgCIADgBIArAAIAEABIAAACIgBAIIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgcAAIgCAJIAMAAQAIAAAFADQAFADACAEQACAGgBAGQgCAHgDAGQgEAFgFACQgGADgHAAgAgJATIAJAAQAEAAACgBQACgCABgEQAAgCgBgCQgCgCgDAAIgJAAg");
	this.shape_7.setTransform(50.5,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIAuIgDgBIAAgDIADgRIABgHIACgGIACgFIADgHIgBAAIgEAIIgEAGIgFAHIgRAXIgBACIgDAAIgMAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIALg+IACgDIADgBIAMAAIADABQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgDASIgBAGIgCAFIgCAFIgDAHIABAAIAEgIIAEgGIAFgHIARgWIACgBIACgBIAMAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgLA+IgCADIgDABgAgCgfQgEgDgBgFIAAgCIACgBIAGgDIACAAIABABIACADIADABIAEgBIACgDIACgBIACAAIAHADIABABIAAACQgDAFgFADQgFADgHAAQgGAAgDgDg");
	this.shape_8.setTransform(42,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIAkIgDgBIAAgEIADgRIABgHIACgFIACgFIADgGIgBAAIgEAHIgEAFIgFAHIgRAXIgBACIgDABIgMAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IACgCIADgBIAMAAIADABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgDASIgBAHIgCAFIgCAEIgDAIIABAAIAEgJIAEgFIAFgGIARgYIACgBIACAAIAMAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgLA+IgCAEIgDABg");
	this.shape_9.setTransform(35,7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsAkQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALg+IABgCIAEgBIAMAAIACABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgJAxIANAAIAJgxIABgCIACgBIAMAAIADABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgJAxIAMAAIAJgxIABgCIAEgBIALAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgLA+IgCAEIgDABg");
	this.shape_10.setTransform(26.7,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAkIgDgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIADgTIgDAAIgGAAQgKAAgGgDQgFgDgCgGQgBgGABgJIADgQIABgCIAEgBIALAAIADABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgDAQQgBAFACADQACACAGAAIAEgBIADAAIAEgZIABgCIAEgBIALAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgLA+IgCAEIgDABg");
	this.shape_11.setTransform(18.9,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAkQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIALgRIgNgtQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIALAAIAFAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAGAXIAMgXIACgCIACgBIAEAAIAMAAIADABIgBACIglA/IgCACIgCABIgEABg");
	this.shape_12.setTransform(12.8,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAkQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgEgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgCIAGgEQADgDADgGQACgFACgIIAEgXIABgDIAEgBIApAAIAEABIAAADIgLA+QAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABIgDABIgLAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAJgxIgMAAIgCAKQgBAJgDAIQgDAIgDAFQgEAFgEADIgKAFIgCABIgBAAg");
	this.shape_13.setTransform(5.4,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,101.7,16), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shados();
	this.instance.parent = this;
	this.instance.setTransform(-259,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-259,0,519,326), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AjxDKQgIgCgEgHQgFgJAGgLQAFgHAKgJIA3gtQANgKAFgIIAHgNQAHgLASgGIAggHQAXgHAQgQQACgQANghQAHgQAEgGQADgEAIgHIAKgLQAHgJAIgUQAKgSAOgEIAOgBIANgBQAIgCAOgMIA4gwQARgPAMgGQASgJAPAEQAGABAMAGIAJACQAGACADACQAGAEADAHQAEAAADACQAIAGACARQACAQAAAJQgBAOgHAIIgGAHQgEAEgBAEIgCAJQAAAGgCACIgFAIIgHAHIgJARQgFAHgLAGIgSAKQgGADgFAFIgLANIgNALIgKAPQgQAYgFAFQgDADgVAQIgaAUQgMAIgNAEIgpAIIggALQgaAIgaABQgOABgIgEIgEgCIgHADQgiAPgSANIgSAPQgWATgNADIgIABIgHAAg");
	this.shape.setTransform(25.6,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,51.2,40.5), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1();
	this.instance.parent = this;
	this.instance.setTransform(49.5,100.3,0.795,0.782,0,120,-48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,113.6,100.3), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,107,70), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,171,125), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,148,182), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,81,69), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,74,117), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,88,74), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,97,117), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.913,0.913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,730,410.7), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.basket();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,111,90), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.soccer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,54,40), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,618,93), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,433,86), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,532,102), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,377,86), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,430,85), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,325,85), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,344,86), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,440,86), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vall();
	this.instance.parent = this;
	this.instance.setTransform(-37,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-33,74,66);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vall();
	this.instance.parent = this;
	this.instance.setTransform(-37,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-33,74,66);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tenis();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-13.5,55,27);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tenis();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-13.5,55,27);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.691,0.691);

	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.6,74.5,1.082,1.082,0,0,0,148.5,74.5);
	this.instance_1.filters = [new cjs.ColorFilter(0.93, 0.93, 0.93, 1, 17.85, 17.85, 17.85, 0)];
	this.instance_1.cache(-2,-2,301,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,149.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(32.5,32,1,1,0,0,0,32.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.9,rotation:112.3,x:-777.5},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(34,63,1,1,0,0,0,34,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:-698.2},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,126);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(20.5,37,1,1,0,0,0,20.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.6,rotation:-111.8,x:-690.7,y:36.9},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,74);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(40,30,1,1,0,0,0,40,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:-650.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,60);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(100.7,33.9,1,1,0,0,0,25.6,20.2);
	this.instance.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hand1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.7,40.3,1,1,0,0,0,56.8,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,-9.8,130.4,100.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(1820.9,205.3,1,1,0,0,0,365,205.3);

	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1092.9,205.3,1,1,0,0,180,365.1,205.3);

	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(365,205.3,1,1,0,0,0,365,205.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,2185.9,410.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(365,205.3,1,1,0,0,0,365,205.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1087.4},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2185.9,410.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(148.5,74.6,1,1,0,0,0,148.5,74.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-12.1,-6.1,321.4,161.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(148.5,74.6,1,1,0,0,0,148.5,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,y:74.7},11,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,x:148.6,y:74.6},13,cjs.Ease.get(1)).to({regX:148.6,scaleX:0.96,scaleY:0.96,x:148.7,y:74.7},10,cjs.Ease.get(-1)).to({regY:74.7,scaleX:0.99,scaleY:0.99},4,cjs.Ease.get(1)).to({regX:148.5,regY:74.6,scaleX:1,scaleY:1,x:148.5,y:74.6},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,149.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(148.5,74.6,1,1,0,0,0,148.5,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,297,149.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.5,13.5);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-691.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-691.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,27);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-521,45,1,1,0,0,0,55.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-24.5,x:-677.4},19).wait(1).to({rotation:45,x:55.6},0).to({rotation:0,x:-512.7},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576.5,0,111,90);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-421.1,20,1,1,0,0,0,27,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-689.9},18).to({x:27},1).to({x:-406.1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448.1,0,54,40);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(37,33);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-713,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},56).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-713},56).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,66);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(208.9,52,1,1,0,0,0,172,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1031.2},14,cjs.Ease.get(1)).to({x:1078.9},55).to({x:1917.3},15,cjs.Ease.get(-1)).to({_off:true},1).wait(267));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.9,-5,1,1,0,0,0,220,43);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:915.2},14,cjs.Ease.get(1)).to({x:962.9},55).to({x:1801.3},15,cjs.Ease.get(-1)).to({_off:true},1).wait(253));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.9,55.5,1,1,0,0,0,309,46.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({x:963.2},14,cjs.Ease.get(1)).to({x:1010.9},55).to({x:1849.3},15,cjs.Ease.get(-1)).to({_off:true},1).wait(183));

	// Символ 10
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-76.6,-5,1,1,0,0,0,216.5,43);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({x:745.7},14,cjs.Ease.get(1)).to({x:793.4},55).to({x:1631.8},15,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(128.9,51,1,1,0,0,0,266,51);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(168).to({_off:false},0).to({x:951.2},14,cjs.Ease.get(1)).to({x:998.9},55).to({x:1837.3},15,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// Символ 8
	this.instance_5 = new lib.Символ8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17.6,-5,1,1,0,0,0,188.5,43);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(182).to({_off:false},0).to({x:804.7},14,cjs.Ease.get(1)).to({x:852.4},55).to({x:1690.8},15,cjs.Ease.get(-1)).to({_off:true},1).wait(85));

	// Символ 7
	this.instance_6 = new lib.Символ7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(148.9,52.5,1,1,0,0,0,215,42.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(253).to({_off:false},0).to({x:971.2},14,cjs.Ease.get(1)).to({x:1018.9},55).to({x:1857.3},15,cjs.Ease.get(-1)).wait(15));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-39.6,-4.5,1,1,0,0,0,162.5,42.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(267).to({_off:false},0).to({x:782.7},14,cjs.Ease.get(1)).to({x:830.4},55).to({x:1668.8},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,9,344,86);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(353.5,127,1,1,0,0,0,32.5,32);

	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(276,108,1,1,0,0,0,34,63);

	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.5,217,1,1,0,0,0,20.5,37);

	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(252,15,1,1,0,0,0,40,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 15
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(269.5,13.5,1,1,0,0,0,27.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 14
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(269.4,161,1,1,0,0,0,55.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 13
	this.instance_6 = new lib.Символ13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-36.8,86.4,0.41,0.41,0,0,0,26.9,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Символ 12
	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(260.9,242,1,1,0,0,0,37,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-362.6,-15,748.6,290), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(104.9,166.6,1,1,-37.2,0,0,48.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:58.8,scaleX:1,scaleY:1,rotation:-74.2,x:176.2,y:203},2,cjs.Ease.get(-1)).to({regX:48.4,rotation:-101.8,x:245.2,y:197.1},2).to({regX:48.5,regY:58.5,scaleX:1,scaleY:1,rotation:-129.7,x:298.1,y:170},2).to({regX:48.4,regY:58.8,scaleX:1,scaleY:1,rotation:-101.8,x:245.2,y:197.1},3).to({regX:48.5,rotation:-74.2,x:176.2,y:203},1).to({regY:58.7,scaleX:1,scaleY:1,rotation:-37.2,x:104.9,y:166.6},3,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.5,92.8,1,1,1.8,0,0,60.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-34.3,x:177,y:113.3},2,cjs.Ease.get(-1)).to({regY:36.7,rotation:-61.4,x:204.5,y:120.9},2).to({regX:60.5,regY:36.5,scaleX:1,scaleY:1,rotation:-88.5,x:223.9,y:121.5},2).to({regX:60.6,regY:36.7,scaleX:1,scaleY:1,rotation:-61.4,x:204.5,y:120.9},3).to({regY:36.6,rotation:-34.3,x:177,y:113.3},1).to({scaleX:1,scaleY:1,rotation:1.8,x:162.5,y:92.8},3,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.5,250.1,1.019,1,0,0,11,85.5,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.01,skewY:6.5,y:247.9},2,cjs.Ease.get(-1)).to({regY:62.5,scaleX:1,skewY:0,y:249.5},4).to({regY:62.6,scaleX:1.01,skewY:6.5,y:247.9},4).to({scaleX:1.02,skewY:11,y:250.1},3,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210.3,148.1,1,1,6.2,0,0,74,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:3.6,x:208.3,y:144.9},2,cjs.Ease.get(-1)).to({rotation:0,x:205,y:145},4).to({rotation:3.6,x:208.3,y:144.9},4).to({rotation:6.2,x:210.3,y:148.1},3,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_4 = new lib.Символ28();
	this.instance_4.parent = this;
	this.instance_4.setTransform(274.9,49.1,1,1,6.2,0,0,40.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:40.6,rotation:6.1,x:272.1,y:43.9},2,cjs.Ease.get(-1)).to({regX:40.5,rotation:22.7,x:266.1,y:48.2},4).to({regX:40.6,regY:34.6,rotation:6.3,x:270.1,y:43},4).to({regX:40.5,regY:34.5,rotation:6.2,x:274.9,y:49.1},3).wait(1));

	// Символ 31
	this.instance_5 = new lib.Символ31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(122.5,272,1,1.077,0,-21.8,0,53.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:35.1,scaleY:1.05,skewX:-13,x:116.9,y:272.1},2,cjs.Ease.get(-1)).to({regY:35,scaleY:1,skewX:0,x:108.5,y:277},4).to({regY:35.1,scaleY:1.05,skewX:-13,x:116.9,y:272.1},4).to({regY:35,scaleY:1.08,skewX:-21.8,x:122.5,y:272},3,cjs.Ease.get(1)).wait(1));

	// Символ 27
	this.instance_6 = new lib.Символ27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(396.8,117.7,1,1,6.2,0,0,37.1,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:102.5,x:278.1,y:187.7},2,cjs.Ease.get(-1)).to({regY:58.5,scaleX:1,scaleY:1,rotation:163.6,x:147.5,y:167.6},2).to({scaleX:1,scaleY:1,rotation:194.5,x:83.5,y:93.7},2).to({scaleX:1,scaleY:1,rotation:163.6,x:147.5,y:167.6},3).to({regY:58.6,scaleX:1,scaleY:1,rotation:102.5,x:278.1,y:187.7},1).to({scaleX:1,scaleY:1,rotation:6.2,x:396.8,y:117.7},3,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,129,1,1,6.2,0,0,44,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:77.7,x:257.5,y:109.5},2,cjs.Ease.get(-1)).to({regX:44.1,scaleX:1,scaleY:1,rotation:131.4,x:210.7,y:95.1},2).to({regY:37,scaleX:1,scaleY:1,rotation:185,x:163.9,y:85.5},2).to({regY:37.1,scaleX:1,scaleY:1,rotation:131.4,x:210.7,y:95.1},3).to({regX:44,scaleX:1,scaleY:1,rotation:77.7,x:257.5,y:109.5},1).to({scaleX:1,scaleY:1,rotation:6.2,x:320,y:129},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,10.4,409.1,318.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(181.3,143.1,1,1,0,0,0,212,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:138.4},9,cjs.Ease.get(-1)).to({y:133.1},10,cjs.Ease.get(1)).to({y:138.1},10,cjs.Ease.get(-1)).to({y:142.9},8,cjs.Ease.get(1)).to({y:143.1},2).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(418.6,163,1,1,0,0,0,259.5,163);
	this.instance_1.alpha = 0.648;
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(75, 50, 71, 0))];
	this.instance_1.cache(-261,-2,523,330);

	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(371.6,163,1,1,0,0,0,259.5,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,0,569,330);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-340.6,159.3,1,1,0,0,0,204.5,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:718.6},49,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-692.1,0,570,330);


// stage content:
(lib.flash_fb_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(77.2,52,1,1,0,0,0,50.9,8);

	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,13,0.614,0.614);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(298.5,257.6,1,1,0,0,0,148.5,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-256.6,147.6,0.726,0.726,0,0,0,208.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 1
	this.instance_4 = new lib.Символ33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(293.2,183.7,1,1,0,0,0,204.5,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 2
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(557,152.5,1,1,0,0,0,161,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(342,187.3,1,1,0,0,0,365,205.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.4,132,2766.3,410.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/basket.png", id:"basket"},
		{src:"images/bt.png", id:"bt"},
		{src:"images/dd1.png", id:"dd1"},
		{src:"images/dd2.png", id:"dd2"},
		{src:"images/dd3.png", id:"dd3"},
		{src:"images/dd4.png", id:"dd4"},
		{src:"images/foot.png", id:"foot"},
		{src:"images/hand1.png", id:"hand1"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/hand3.png", id:"hand3"},
		{src:"images/hand4.png", id:"hand4"},
		{src:"images/head.png", id:"head"},
		{src:"images/leg.png", id:"leg"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/man.png", id:"man"},
		{src:"images/shados.png", id:"shados"},
		{src:"images/soccer.png", id:"soccer"},
		{src:"images/tenis.png", id:"tenis"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"},
		{src:"images/text5.png", id:"text5"},
		{src:"images/text6.png", id:"text6"},
		{src:"images/text7.png", id:"text7"},
		{src:"images/text8.png", id:"text8"},
		{src:"images/vall.png", id:"vall"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;