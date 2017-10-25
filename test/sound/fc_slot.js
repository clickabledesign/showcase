(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg400 = function() {
	this.initialize(img.bg400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,350);


(lib.blur = function() {
	this.initialize(img.blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,73);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,135);


(lib.item = function() {
	this.initialize(img.item);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,96);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,137);// helper functions:

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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,285,73), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("Egu3AakMAAAg1HMBdvAAAMAAAA1Hg");
	this.shape.setTransform(150,131,0.5,0.771);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,300,262), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol13, null, null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,253,200,0.8)").s().rr(-33.5,-24.5,67,49,3);
	this.shape.setTransform(33.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,67,49), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,250,96), null);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhGxAoUMAAAhQnMCNjAAAMAAABQng");
	this.shape.setTransform(453,258);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.item();
	this.instance.parent = this;
	this.instance.setTransform(0,-98);

	this.instance_1 = new lib.item();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,98);

	this.instance_2 = new lib.item();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-98,76,294), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.item();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-98);

	this.instance_2 = new lib.item();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,98);

	this.instance_3 = new lib.item();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,-98,76,294), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.item();
	this.instance.parent = this;
	this.instance.setTransform(0,-98);

	this.instance_1 = new lib.item();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,98);

	this.instance_2 = new lib.item();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-98,76,294), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.blur();
	this.instance.parent = this;
	this.instance.setTransform(0,1078);

	this.instance_1 = new lib.blur();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,980);

	this.instance_2 = new lib.blur();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,882);

	this.instance_3 = new lib.blur();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-98);

	this.instance_4 = new lib.blur();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-196);

	this.instance_5 = new lib.blur();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-294);

	this.instance_6 = new lib.blur();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-392);

	this.instance_7 = new lib.blur();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-490);

	this.instance_8 = new lib.blur();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-588);

	this.instance_9 = new lib.blur();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-686);

	this.instance_10 = new lib.blur();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-784);

	this.instance_11 = new lib.blur();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-882);

	this.instance_12 = new lib.blur();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,784);

	this.instance_13 = new lib.blur();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,686);

	this.instance_14 = new lib.blur();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,588);

	this.instance_15 = new lib.blur();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,490);

	this.instance_16 = new lib.blur();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,392);

	this.instance_17 = new lib.blur();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,294);

	this.instance_18 = new lib.blur();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,196);

	this.instance_19 = new lib.blur();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,98);

	this.instance_20 = new lib.blur();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-882,76,2058), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{b:2,h:10,e:11});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// Layer 4
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(119.5,26.5,1,1,0,0,0,119.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,73);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(300,170,1,1,0,0,0,300,170);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},20).to({alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"b":2,"h":10,"e":11});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(300,170,1,1,0,0,0,300,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,170,1,1,0,0,0,300,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0},0).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,262);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.blok23 = new lib.Symbol9();
	this.blok23.parent = this;
	this.blok23.setTransform(32.9,90.8,1,1,0,0,180,33.5,24.5);
	this.blok23.alpha = 0;

	this.blok22 = new lib.Symbol9();
	this.blok22.parent = this;
	this.blok22.setTransform(32.9,151.8,1,1,0,0,180,33.5,24.5);
	this.blok22.alpha = 0;

	this.blok21 = new lib.Symbol9();
	this.blok21.parent = this;
	this.blok21.setTransform(32.9,215.8,1,1,0,0,180,33.5,24.5);
	this.blok21.alpha = 0;

	this.blok20 = new lib.Symbol9();
	this.blok20.parent = this;
	this.blok20.setTransform(32.9,278.8,1,1,0,0,180,33.5,24.5);
	this.blok20.alpha = 0;

	this.blok19 = new lib.Symbol9();
	this.blok19.parent = this;
	this.blok19.setTransform(32.9,343.8,1,1,0,0,180,33.5,24.5);
	this.blok19.alpha = 0;

	this.blok18 = new lib.Symbol9();
	this.blok18.parent = this;
	this.blok18.setTransform(113.8,342.8,1,1,0,0,180,33.5,24.5);
	this.blok18.alpha = 0;

	this.blok17 = new lib.Symbol9();
	this.blok17.parent = this;
	this.blok17.setTransform(190.9,343,1,1,0,0,180,33.5,24.5);
	this.blok17.alpha = 0;

	this.blok16 = new lib.Symbol9();
	this.blok16.parent = this;
	this.blok16.setTransform(271.9,344,1,1,0,0,180,33.5,24.5);
	this.blok16.alpha = 0;

	this.blok15 = new lib.Symbol9();
	this.blok15.parent = this;
	this.blok15.setTransform(348.6,343,1,1,0,0,180,33.5,24.5);
	this.blok15.alpha = 0;

	this.blok14 = new lib.Symbol9();
	this.blok14.parent = this;
	this.blok14.setTransform(431.7,344,1,1,0,0,180,33.5,24.5);
	this.blok14.alpha = 0;

	this.blok13 = new lib.Symbol9();
	this.blok13.parent = this;
	this.blok13.setTransform(508.3,342.1,1,1,0,0,0,33.5,24.5);
	this.blok13.alpha = 0;

	this.blok12 = new lib.Symbol9();
	this.blok12.parent = this;
	this.blok12.setTransform(509.3,279.3,1,1,0,0,0,33.5,24.5);
	this.blok12.alpha = 0;

	this.blok11 = new lib.Symbol9();
	this.blok11.parent = this;
	this.blok11.setTransform(509.3,215.7,1,1,0,0,0,33.5,24.5);
	this.blok11.alpha = 0;

	this.blok10 = new lib.Symbol9();
	this.blok10.parent = this;
	this.blok10.setTransform(508.4,152.2,1,1,0,0,0,33.5,24.5);
	this.blok10.alpha = 0;

	this.blok9 = new lib.Symbol9();
	this.blok9.parent = this;
	this.blok9.setTransform(508.3,91,1,1,0,0,0,33.5,24.5);
	this.blok9.alpha = 0;

	this.blok8 = new lib.Symbol9();
	this.blok8.parent = this;
	this.blok8.setTransform(509.3,28.4,1,1,0,0,0,33.5,24.5);
	this.blok8.alpha = 0;

	this.blok7 = new lib.Symbol9();
	this.blok7.parent = this;
	this.blok7.setTransform(509.5,-37.5,1,1,0,0,0,33.5,24.5);
	this.blok7.alpha = 0;

	this.blok6 = new lib.Symbol9();
	this.blok6.parent = this;
	this.blok6.setTransform(434.5,-36.5,1,1,0,0,0,33.5,24.5);
	this.blok6.alpha = 0;

	this.blok5 = new lib.Symbol9();
	this.blok5.parent = this;
	this.blok5.setTransform(352.5,-36.5,1,1,0,0,0,33.5,24.5);
	this.blok5.alpha = 0;

	this.blok4 = new lib.Symbol9();
	this.blok4.parent = this;
	this.blok4.setTransform(272.5,-36.5,1,1,0,0,0,33.5,24.5);
	this.blok4.alpha = 0;

	this.blok3 = new lib.Symbol9();
	this.blok3.parent = this;
	this.blok3.setTransform(193.5,-37.5,1,1,0,0,0,33.5,24.5);
	this.blok3.alpha = 0;

	this.blok2 = new lib.Symbol9();
	this.blok2.parent = this;
	this.blok2.setTransform(115.5,-37.5,1,1,0,0,0,33.5,24.5);
	this.blok2.alpha = 0;

	this.blok1 = new lib.Symbol9();
	this.blok1.parent = this;
	this.blok1.setTransform(32.5,-36.5,1,1,0,0,0,33.5,24.5);
	this.blok1.alpha = 0;

	this.blok0 = new lib.Symbol9();
	this.blok0.parent = this;
	this.blok0.setTransform(32.5,27.5,1,1,0,0,0,33.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blok0},{t:this.blok1},{t:this.blok2},{t:this.blok3},{t:this.blok4},{t:this.blok5},{t:this.blok6},{t:this.blok7},{t:this.blok8},{t:this.blok9},{t:this.blok10},{t:this.blok11},{t:this.blok12},{t:this.blok13},{t:this.blok14},{t:this.blok15},{t:this.blok16},{t:this.blok17},{t:this.blok18},{t:this.blok19},{t:this.blok20},{t:this.blok21},{t:this.blok22},{t:this.blok23}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-62,544,430.5), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(125,48,1,1,0,0,0,125,48);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,96);


(lib.linemove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(37.5,-94.5,1,1,0,0,0,37.5,445.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:999.5},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1422,76,2058);


(lib.slots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"h":161});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.parent['hover'].gotoAndPlay('b');
		this.parent['bbb'].gotoAndPlay('b');
	}
	this.frame_155 = function() {
		this.parent['hover'].gotoAndPlay('e');
		this.parent['bbb'].gotoAndPlay('e');
	}
	this.frame_167 = function() {
		//this.parent['runBord']();
		this.name = 'slot';
		this.parent.runBord();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(91).call(this.frame_155).wait(12).call(this.frame_167).wait(18));

	// Layer 7
	this.instance = new lib.frame();
	this.instance.parent = this;
	this.instance.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// Layer 2
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142,53,1,1,0,0,0,125,48);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({_off:true},121).wait(18));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhH0IAAvnMAonAAAIAAPng");
	mask.setTransform(135,49.9);

	// scatter
	this.instance_2 = new lib.linemove();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,265.5,1,1,0,0,0,37.5,445.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(184));

	// Layer 8
	this.instance_3 = new lib.linemove();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.5,182.5,1,1,0,0,0,37.5,445.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},14).wait(171));

	// Layer 9
	this.instance_4 = new lib.linemove();
	this.instance_4.parent = this;
	this.instance_4.setTransform(226.5,89.5,1,1,0,0,0,37.5,445.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},27).wait(158));

	// se
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(56.5,140,1,1,0,0,0,37.5,140);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({y:180},3,cjs.Ease.get(1)).to({y:140},10,cjs.Ease.get(1)).wait(153).to({y:120},12,cjs.Ease.get(1)).to({y:190},5,cjs.Ease.get(-1)).wait(1));

	// Layer 18
	this.instance_6 = new lib.Symbol3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(140.5,140,1,1,0,0,0,37.5,140);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:180},3,cjs.Ease.get(1)).to({y:140},10,cjs.Ease.get(1)).wait(140).to({y:120},12,cjs.Ease.get(1)).to({y:190},5,cjs.Ease.get(-1)).wait(1));

	// Layer 17
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(226.5,140,1,1,0,0,0,37.5,140);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({y:180},3,cjs.Ease.get(1)).to({y:140},10,cjs.Ease.get(1)).wait(127).to({y:120},12,cjs.Ease.get(1)).to({y:190},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,285,135);


// stage content:
(lib.fc_slot_400х350_mus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		var _tween;
		
		var _prew = _this.vic.blok0;
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTAG, "_blank");
		}
		
		this.btn.pointer = 'pointer';
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler() {
			_this.slot.gotoAndStop('h');
			_this.hover.gotoAndStop('h');
			_this.bbb.gotoAndStop('h');
			//_this.vic.gotoAndStop(0);
			if (_tween) {
				//_tween.removeAllTweens();
				createjs.Tween.removeAllTweens();
				if (_prew) _prew.alpha = 0;
				_this.vic.blok0.alpha = 1;
			}
		}
		
		this.btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler() {
			_this.slot.play();
			_this.hover.play();
			_this.bbb.play();
			//_this.vic.play();
			//_this.runBord();
		}
		
		
		
		this.runBord = function() {
			var _obj = {};
			_obj.a = 0;
		
			var _num = 24;
		
			_prew = _this.vic.blok0;
		
			_tween = createjs.Tween.get(_obj).to({a:_num * 2}, 6000, createjs.Ease.cubicInOut).call(stopSlot);
			_tween.addEventListener("change", handleChange);
		
			function handleChange(event) {
				var n = Math.round(_obj.a) % _num;
				if (_prew != _this.vic['block' + n]) {
					_prew.alpha = 0;
					_this.vic['blok' + n].alpha = 1;
					console.log(n);
					_prew = _this.vic['blok' + n];
					
				}
			}
		 
		}
		
		this.runBord();
		
		function stopSlot() {
			_this.slot.gotoAndPlay(1);
		}
		playSound("bg",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hover
	this.btn = new lib.Symbol13_1();
	this.btn.parent = this;
	this.btn.setTransform(499.9,599.7,1.333,2.904,0,0,0,452.9,257.9);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol13_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btn
	this.bbb = new lib.Symbol16();
	this.bbb.parent = this;
	this.bbb.setTransform(200.4,254.2,0.973,0.973,0,0,0,142.2,35.1);

	this.timeline.addTween(cjs.Tween.get(this.bbb).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(34,15,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// slot
	this.slot = new lib.slots();
	this.slot.parent = this;
	this.slot.setTransform(58.4,108.6,1,1,0,0,0,0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// hover+btn
	this.hover = new lib.Symbol11();
	this.hover.parent = this;
	this.hover.setTransform(400,226.7,1.333,1.333,0,0,0,300,170);

	this.timeline.addTween(cjs.Tween.get(this.hover).wait(1));

	// vic
	this.vic = new lib.Symbol10();
	this.vic.parent = this;
	this.vic.setTransform(1.4,61.2,0.733,0.733,0,0,0,0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.vic).wait(1));

	// bg
	this.instance_1 = new lib.bg400();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.1,-1494.9,1207.9,3018.9);
// library properties:
lib.properties = {
	id: '572A42B6B7E677438EAC518BDC9F9FC7',
	width: 400,
	height: 350,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg400.jpg?1508754731597", id:"bg400"},
		{src:"images/blur.png?1508754731597", id:"blur"},
		{src:"images/button.png?1508754731597", id:"button"},
		{src:"images/frame.png?1508754731597", id:"frame"},
		{src:"images/item.png?1508754731597", id:"item"},
		{src:"images/light.png?1508754731597", id:"light"},
		{src:"images/logo.png?1508754731597", id:"logo"},
		{src:"sounds/bg.mp3?1508754731597", id:"bg"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['572A42B6B7E677438EAC518BDC9F9FC7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;