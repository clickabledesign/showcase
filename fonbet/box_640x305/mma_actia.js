(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,847,400);


(lib.btn_head = function() {
	this.initialize(img.btn_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,82);


(lib.gloves = function() {
	this.initialize(img.gloves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,124);


(lib.gloves2 = function() {
	this.initialize(img.gloves2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,126);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,88);


(lib.mayweather = function() {
	this.initialize(img.mayweather);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,270);


(lib.mcgregor = function() {
	this.initialize(img.mcgregor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,270);// helper functions:

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


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E0E").s().p("AtMEFQhRAAgBhYIAAlZQABhYBRAAIaZAAQBSAAAABYIAAFZQAABYhSAAg");
	this.shape.setTransform(92.7,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,185.3,52.1), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,847,400), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gloves();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,88,124), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gloves2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,88,126), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AggAqIAAhTIAjAAQAFAAAIADQAFACAEAEQAEAFACAFQACAFAAAHQAAAGgCAEQgCAFgEAEQgEAFgFACQgIACgFAAIgRAAIAAAYgAgOACIARAAIAFgBIAEgBIADgGIABgFIgBgGIgDgEIgEgEIgFgBIgRAAg");
	this.shape.setTransform(138.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgHArIgIgCIgIgEIgGgEIgFgHIgFgIIgCgIIgBgKIABgJIACgJIAFgHIAFgHIAGgEIAIgDIAIgDIAHgBIAJABIAHADIAHADIAGAFIAGAGIAEAHIADAJIABAJIgBAJIgDAJIgDAHIgFAHIgHAEIgHAEQgDACgFABIgJABIgHgBgAgIgYQgFACgDADQgEAEgCAFQgCAEAAAGQAAAGACAGQACAFAEADIAIAGQAEABAEAAQAFAAAFgBIAIgGQADgDACgFQACgGAAgGQAAgGgCgEQgCgFgDgEQgEgDgEgCQgFgBgFgBQgEABgEABg");
	this.shape_1.setTransform(129.8,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgFAqIgIgCIgIgEIgGgEIgFgGIgFgIIgCgIIgBgKIABgJIACgJIAFgHIAFgGIAGgFQAEgCAEgBIAIgDIAHAAQAHAAAFACQAHACAFADIAGAFIADAEIAEAHIACAHIgSAAIgDgGIgFgFIgGgCIgHgBQgEAAgFACQgFACgDAEQgDAEgCAEQgCAFAAAFQAAAGACAEQACAFADADQADAEAEADQAGACAEgBIAHAAIAGgDIAGgFIACgHIASAAIgCAIIgDAHIgEAFIgGAEQgFAEgGACQgGACgHAAg");
	this.shape_2.setTransform(120.5,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AAQAqIAAgjIgfAAIAAAjIgSAAIAAhTIASAAIAAAgIAfAAIAAggIASAAIAABTg");
	this.shape_3.setTransform(111.6,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AgHArIgJgCIgHgEIgGgEIgFgHIgFgIIgCgIIgBgKIABgJIACgJIAFgHIAFgHIAGgEIAIgDIAIgDIAHgBIAJABIAHADIAHADIAGAFIAGAGIAEAHIADAJIABAJIgBAJIgDAJIgDAHIgFAHIgGAEIgIAEQgDACgFABIgJABIgHgBgAgIgYQgFACgDADQgEAEgCAFQgCAEAAAGQAAAGACAGQACAFAEADIAIAGQAEABAEAAQAFAAAFgBIAIgGQADgDACgFQACgGAAgGQAAgGgCgEQgCgFgDgEQgEgDgEgCQgFgBgFgBQgEABgEABg");
	this.shape_4.setTransform(102.5,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AAQAqIAAhDIgfAAIAABDIgSAAIAAhTIBDAAIAABTg");
	this.shape_5.setTransform(93.3,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AgFAqIgIgCIgIgEIgGgEIgFgGIgEgIIgDgIIgBgKIABgJIADgJIAEgHIAFgGIAGgFQAEgCAEgBIAIgDIAHAAQAGAAAGACQAHACAGADIAEAFIAFAEIACAHIADAHIgSAAIgDgGIgFgFIgGgCIgHgBQgEAAgFACQgEACgEAEQgEAEgBAEQgCAFAAAFQAAAGACAEQABAFAEADQADAEAFADQAEACAFgBIAIAAIAGgDIAEgFIADgHIASAAIgCAIIgDAHIgFAFIgEAEQgGAEgGACQgGACgHAAg");
	this.shape_6.setTransform(84.5,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AARA3IAAgwIguAwIgFAAIAAhTIASAAIAAAvIAugvIAFAAIAABTgAgEgjIgHgEIgEgGQgBgEAAgEIAMgBQAAADACACQACACAEAAQADAAADgCQACgCABgDIAMABQAAAEgCAEQgBAEgDACQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_7.setTransform(72.5,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AAeAqIAAhTIASAAIAABTgAgvAqIAAhTIASAAIAAACIAAAYIASAAIAHABIAGACQAEACAFAFQAEAFACAFQABAGAAAGIgDAJIgGAJQgEADgFACQgFACgGAAgAgdAaIAPAAIAGAAIAFgCIADgEIAAgFQABgDgBgDIgBgEIgEgEQgDgBgDAAIgCAAIgQAAg");
	this.shape_8.setTransform(62.2,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AAQAqIAAgjIgfAAIAAAjIgSAAIAAhTIASAAIAAAgIAfAAIAAggIASAAIAABTg");
	this.shape_9.setTransform(52.2,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("AggAqIAAhTIASAAIAAAaIARAAQAFAAAIADQAFACAEAEQAEAEACAEQACAGAAAFQAAAFgCAGQgCAFgEAEQgEAFgFABQgIADgFAAgAgOAaIARAAIAFgBIAEgDIADgEIABgFIgBgFIgDgEIgEgDIgFgBIgRAAg");
	this.shape_10.setTransform(44.2,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AglApIAAgNIAHAAIADgBQACgCABgIIAGg6IA4AAIAABTIgSAAIAAhDIgVAAIgFArQgBAIgCAFQgCAFgDADQgEADgFAAIgDAAIgLgBg");
	this.shape_11.setTransform(35.3,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AgeAoIACgOIAGACQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAEgEIADgIIgeg0IAAgCIAUAAIASAkIAAAAIARgkIAUAAIAAABIggA/IgGALQgCAGgFABQgEADgGABQgJgCgEgCg");
	this.shape_12.setTransform(28.2,7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AgIAqIAAhEIgWAAIAAgPIA9AAIAAAPIgWAAIAABEg");
	this.shape_13.setTransform(21,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("AARAqIAAgvIguAvIgGAAIAAhTIASAAIAAAvIAvgvIAFAAIAABTg");
	this.shape_14.setTransform(13.2,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.988)").s().p("AgIAqIAAhEIgWAAIAAgPIA9AAIAAAPIgWAAIAABEg");
	this.shape_15.setTransform(5.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,144.5,16), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AhHDjQgfgKgVgSQgVgUgMgcQgMgdAAgnIBYAAQgBARAHANQAFAOAKAKQAKAJAOAEQAOAGAQAAQARAAAOgGQAOgEAKgJQALgJAEgMQAGgMAAgOQAAgOgGgMQgFgMgKgJQgLgJgNgFQgPgEgQgBIghAAIAAhMIAgAAQAaAAAQgQQARgOABgXQgBgYgRgPQgRgOgYAAQgYAAgRALQgTAMAAAVIhWAAQgBgfAMgXQALgWAVgQQATgOAcgIQAagGAeAAQAigBAcAKQAbAJAVATQATARAKAXQAKAXAAAcQAAAbgOAXQgNAXgZAPQATAIAOAKQAPALAJAOQAKAOAFASQAFARAAAVQAAAfgLAaQgMAagXATQgWATggAJQgiALgoAAQgkAAgegJg");
	this.shape.setTransform(158.5,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("Ai+DkIAAnFIBhAAIAAD/ID+kBIAeAAIAAHGIhgAAIAAkCIkAEDg");
	this.shape_1.setTransform(115.2,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AiwDjIAAnFIDAAAQAbAAArAOQAdANAVAYQAVAXAKAeQAKAdAAAhQAAAfgKAdQgLAcgUAWQgVAXgeAMQgrANgaAAIhfAAIAACBgAhRAQIBhAAQAPAAANgHQANgGAJgKQAJgLAFgOQAFgPAAgQQAAgQgFgOQgEgOgJgKQgJgMgNgGQgNgGgQAAIhhAAg");
	this.shape_2.setTransform(71.6,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("ABWDjIAAltIisAAIAAFtIhhAAIAAnEIFuAAIAAHEg");
	this.shape_3.setTransform(25,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,179.5,67.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AhXCJIAAjPIAtAAIAAB1IBzh2IAPAAIAADQIgtAAIAAh3Ih0B3gAgLhXQgKgDgGgHQgHgHgEgJQgEgJgBgLIAfgDQAAAJAGAFQAFAFAJAAQALAAAFgFQAHgEABgKIAeADQgBALgDAJQgFAJgGAHQgHAGgJAEQgKADgMAAQgLAAgJgDg");
	this.shape.setTransform(167.1,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AA7BpIgQgjIhVAAIgQAjIguAAIAAgGIBfjLIATAAIBfDLIAAAGgAAdAhIgdhEIgcBEIA5AAg");
	this.shape_1.setTransform(145.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AhQBoIAAjPIBXAAQAMAAAUAHQAOAGAJAKQAKALAEAOQAFANAAAPQAAAOgFANQgFANgJAKQgKALgNAFQgUAGgMAAIgrAAIAAA7gAglAHIAsAAQAHAAAGgDQAGgCAEgFQAEgFACgGQADgHAAgHQAAgIgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAIgsAAg");
	this.shape_2.setTransform(127.6,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("Ag+BoIAAjPIB9AAIAAAoIhRAAIAACng");
	this.shape_3.setTransform(110.2,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AhWBoIAAjPIAsAAIAAB1IB0h1IANAAIAADPIgsAAIAAh2Ih0B2g");
	this.shape_4.setTransform(90.4,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("ABKBoIAAjPIAsAAIAADPgAh1BoIAAjPIArAAIAAAFIAAA8IAtAAQAKAAAIACQAJACAGADQAJAFAPANQAJAMAEANQAEAOgCAPQgBANgGALQgGAMgJAIQgKAJgLAFQgNAFgQAAgAhKBBIAmAAQAIAAAHgCQAGgCAGgDQAEgDADgGQACgFABgIQABgHgCgGQgBgHgFgFQgEgFgFgDQgHgDgHAAIgEAAIgpAAg");
	this.shape_5.setTransform(65,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AhQBoIAAjPIBXAAQAOAAAMAFQAMAEAJAIQAIAIAGALQAEAMAAAOQAAALgGALQgFAKgJAGQAGADAGAEQAGAEADAGQAFAGABAHQACAHAAAIQAAAOgEALQgFAMgJAIQgIAIgMAEQgNAFgOAAgAgkBBIAwAAQALAAAHgGQAGgGABgLQABgGgDgFQgDgGgEgDQgGgEgMAAIguAAgAgkgSIAnAAQAMAAAGgFQAIgGgBgLQABgLgHgHQgGgHgNAAIgnAAg");
	this.shape_6.setTransform(41.5,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AhWBoIAAjPIAsAAIAAB1IB0h1IANAAIAADPIgsAAIAAh2Ih0B2g");
	this.shape_7.setTransform(12.5,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,179.7,32.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AgtCPQgTgGgNgMQgOgMgIgSQgHgSAAgYIA3AAQAAAKAEAJQAEAIAGAGQAHAGAJADQAIADAKAAQAKAAAKgDQAIgDAHgGQAGgFAEgIQADgIAAgJQAAgIgDgIQgEgHgGgGQgHgFgJgDQgJgEgKAAIgVAAIAAgwIAVAAQAPAAALgKQALgJAAgOQAAgQgLgJQgLgJgPAAQgPAAgLAHQgMAHAAAOIg2AAQgBgTAIgPQAGgOAOgKQAMgJASgFQAQgEATAAQAVAAASAGQASAGAMALQAMALAHAPQAGAPAAARQAAARgJAPQgIAOgPAJQALAGAJAGQAJAHAGAJQAHAJADALQADALAAANQAAAUgHAQQgIAQgOAMQgOAMgVAGQgVAHgZAAQgXAAgTgGg");
	this.shape.setTransform(187.2,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgcCSQgOgDgNgEQgNgFgLgHQgMgHgKgKQgKgJgJgMQgIgMgGgNQgFgOgDgQQgEgQAAgSQAAgRAEgQQADgQAGgOQAFgOAJgMQAIgLALgKQAKgJAMgHQALgHAOgFQANgEANgDQAOgCAOAAQAOAAANACQAOADANAEQANAFAMAHQAMAHAKAKQAKAJAIAMQAJALAFAOQAGAOADAQQAEAQAAARQAAAQgDAPQgDAPgFAOQgFANgIAMQgIAMgJAKQgKAKgMAHQgMAIgNAFQgNAGgPACQgPADgQAAQgOAAgOgCgAgfhVQgPAGgMALQgMAMgHARQgHASAAAVQAAAXAHASQAHARAMALQALAMAQAFQAPAGAQAAQARAAAPgGQAQgFAMgMQAMgLAGgRQAHgSAAgXQAAgWgHgRQgGgRgMgMQgMgLgPgGQgPgGgRAAQgRAAgPAGg");
	this.shape_1.setTransform(159.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AA3CQIAAh6IhtAAIAAB6Ig9AAIAAkfIA9AAIAABuIBtAAIAAhuIA9AAIAAEfg");
	this.shape_2.setTransform(127.8,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AhWCQIAAkfICtAAIAAA4IhwAAIAADng");
	this.shape_3.setTransform(103.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AgcCSQgOgDgNgEQgNgFgLgHQgMgHgKgKQgKgJgJgMQgIgMgGgNQgFgOgDgQQgEgQAAgSQAAgRAEgQQADgQAGgOQAFgOAJgMQAIgLALgKQAKgJAMgHQALgHAOgFQANgEANgDQAOgCAOAAQAOAAANACQAOADANAEQANAFAMAHQAMAHAKAKQAKAJAIAMQAJALAFAOQAGAOADAQQAEAQAAARQAAAQgDAPQgDAPgFAOQgFANgIAMQgIAMgJAKQgKAKgMAHQgMAIgNAFQgNAGgPACQgPADgQAAQgOAAgOgCgAgfhVQgPAGgMALQgMAMgHARQgHASAAAVQAAAXAHASQAHARAMALQALAMAQAFQAPAGAQAAQARAAAPgGQAQgFAMgMQAMgLAGgRQAHgSAAgXQAAgWgHgRQgGgRgMgMQgMgLgPgGQgPgGgRAAQgRAAgPAGg");
	this.shape_4.setTransform(75.1,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AhwCPIAAkeIB6AAQARABAcAIQASAJANAOQANAPAGATQAIATgBAUQABAUgIASQgGASgNAOQgOAOgSAIQgcAJgQgBIg8AAIAABRgAgzAKIA9AAQAKAAAIgEQAIgEAGgGQAFgHADgJQADgJABgKQgBgLgDgIQgCgKgGgGQgGgHgHgEQgJgEgKAAIg9AAg");
	this.shape_5.setTransform(46.5,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AA3CQIAAjnIhtAAIAADnIg9AAIAAkfIDnAAIAAEfg");
	this.shape_6.setTransform(16.9,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,-6.3,201.8,45), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AiGDVIAAlCIBEAAIAAC1IC0i3IAWAAIAAFDIhFAAIAAi4Ii1C5gAgTiIQgOgFgKgKQgLgKgGgPQgGgOgBgSIAvgEQABAOAJAIQAIAHAPAAQAPAAAKgGQAJgHACgQIAuAEQgBASgFAOQgGAPgKAKQgKAKgPAFQgPAGgUAAQgQAAgQgGg");
	this.shape.setTransform(180.6,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("ABcCjIgZg2IiFAAIgZA2IhIAAIAAgJICVk8IAeAAICUE8IAAAJgAAsAzIgshpIgrBpIBXAAg");
	this.shape_1.setTransform(147.2,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AiRCfIABgyQAPACAJgCQAJgCAFgFQAIgHAFgeIAYjiIDXAAIAAFBIhEAAIAAkDIhXAAIgQCnQgDAggHATQgIAUgNAKQgOAKgWACIgOABQgRAAgWgDg");
	this.shape_2.setTransform(112.7,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AhjChIAAlBIDEAAIAAA8IiAAAIAABBIB4AAIAAA8Ih4AAIAABJICDAAIAAA/g");
	this.shape_3.setTransform(84.9,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("ABhC4IAAguIi+AAIAAAuIhBAAIAAhoIALAAQAUgBAIgKQAGgJADgZIAajaIDQAAIAAEHIAjAAIAABogAgqAlQgBANgFALQgGAOgJAGIB4AAIAAjMIhSAAg");
	this.shape_4.setTransform(53.5,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AgXCiQgPgDgPgFQgOgFgNgIQgOgIgMgKQgMgLgIgNQgKgNgGgPQgHgPgDgSQgEgSAAgTQAAgTAEgSQADgSAHgPQAGgQAKgNQAIgNAMgKQAMgLAOgIQANgHAOgGQAPgFAPgDQAPgCAQAAQAZAAAXAHQAYAHAUANIAUAQIAQAUQAHALAFANQAFANADAPIhCAAQgGgOgIgKQgIgKgLgGQgKgHgMgDQgNgDgOAAQgUAAgTAIQgRAHgNAOQgMANgHATQgHATAAAWQAAAUAHATQAHASAMAOQANAOARAIQASAIAUAAQAPAAAOgEQANgDALgHQALgIAIgKQAHgMAFgOIBCAAQgCAQgGAOQgEANgIAMQgGALgKAJIgTARQgUAOgZAIQgYAGgZAAg");
	this.shape_5.setTransform(19.7,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,200,50), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AAaBGIgcguIgZAAIAAAuIgeAAIAAiLIA7AAQAIAAANAEQAJAEAHAGQAGAHADAJQADAJAAAJQAAAHgBAFQgCAHgDAEQgDAFgFAFQgFAEgGADIAgAvIAAAEgAgbAAIAdAAQAEAAAEgCQAEgBADgEQADgDABgDQABgEAAgFQAAgEgBgEQgBgEgDgDIgHgEQgEgCgEAAIgdAAg");
	this.shape.setTransform(12.5,150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgNBHIgOgDIgMgGIgKgIQgFgFgEgGQgEgFgDgHQgDgHgBgIQgCgIAAgIQAAgIACgIQABgIADgGQADgHAFgGIAJgKIAKgIQAGgEAGgCQAGgCAIgBIAMgBIAOABQAHABAFACIANAGIALAIIAJAKIAHANQADAHABAHQABAIAAAIQAAAIgBAHIgEAOIgGAMIgJALIgKAIQgGAEgGADIgOAEQgHABgIAAIgNgBgAgOgpQgIADgGAFQgGAGgDAIQgEAJABAKQgBALAEAJQADAIAGAGQAGAFAHADQAIADAHAAQAJAAAGgDQAJgDAFgFQAGgGADgIQADgJAAgLQAAgKgDgJQgDgIgGgGQgFgFgIgDQgHgDgJAAQgHAAgHADg");
	this.shape_1.setTransform(12.1,130.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgLBHIgNgEIgMgFQgGgEgEgEIgKgLQgEgFgCgHQgDgHgCgHQgBgJAAgIQAAgHABgJQACgHADgHQACgHAFgFIAJgKIAKgJIAMgFIANgEIANgBQALAAAKADQAKACAIAGQAJAGAGAJQAIAMACAIIgeAAQgCgFgEgDIgHgHIgKgDIgLgBQgJAAgHADQgIAEgFAGQgGAGgCAJQgDAHAAAJQAAAKADAIQADAJAFAFQAGAHAHACQAIAEAIAAIANgBQAHgCAFgDQAFgDADgFQAEgGACgHIgmAAIAAgZIBCAAIAAATQgBALgEAJQgDAKgHAIQgGAHgJAGQgIAEgJADQgKACgKAAIgNgBg");
	this.shape_2.setTransform(12.1,110.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AgrBGIAAiLIBVAAIAAAaIg2AAIAAAdIAzAAIAAAZIgzAAIAAAgIA4AAIAAAbg");
	this.shape_3.setTransform(12.3,90.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AAaBGIgcgvIgZAAIAAAvIgeAAIAAiLIA7AAQAIAAANAEQAJAEAHAGQAGAHADAJQADAJAAAJQAAAHgBAFQgCAHgDAEQgDAGgFAEQgFAEgGADIAgAvIAAAEgAgbAAIAdAAQAEAAAEgCQAEgCADgCQADgEABgDQABgFAAgEQAAgEgBgEQgBgEgDgDIgHgEQgEgCgEAAIgdAAg");
	this.shape_4.setTransform(12.5,70.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AgLBGIgNgDIgMgFQgGgEgEgFIgKgKQgEgFgCgHQgDgHgCgHQgBgJAAgIQAAgHABgJQACgHADgHQACgGAFgGIAJgLIAKgIIAMgFIANgEIANgBQALAAAKADQAKACAIAGQAJAGAGAJQAIAMACAIIgeAAQgCgFgEgEIgHgFIgKgEIgLgBQgJAAgHAEQgIADgFAGQgGAHgCAHQgDAJAAAIQAAAKADAIQADAIAFAHQAGAGAHADQAIACAIAAIANAAQAHgCAFgDQAFgDADgFQAEgGACgHIgmAAIAAgZIBCAAIAAAUQgBAKgEAJQgDAKgHAIQgGAIgJAEQgIAFgJADQgKACgKAAIgNgCg");
	this.shape_5.setTransform(12.1,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AgJBGIgNgDIgNgGIgKgIIgJgKIgHgMQgDgHgCgHQgBgIAAgJQAAgHABgJQACgHADgGQADgIAEgFIAJgLQAFgEAFgDIANgGQAGgCAHgCIAMgBQALAAAKADQALAEAJAFIAIAHIAHAJQADAFACAFQADAGABAHIgdAAQgCgHgEgEIgIgHIgKgEQgFgBgHgBQgIABgIADQgHADgGAGQgFAGgDAIQgDAJAAAIQAAAJADAIQADAIAFAGQAGAGAHADQAIAEAIAAQAHAAAFgBQAGgCAFgDQAFgEADgEQAEgFABgGIAdAAQgBAHgCAGIgFALIgHAJIgJAHQgIAGgLAEQgKADgMAAg");
	this.shape_6.setTransform(12.1,30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AAlBGIAAhLIgjArIgDAAIgjgrIAABLIgeAAIAAiLIALAAIA3BCIA4hCIALAAIAACLg");
	this.shape_7.setTransform(12,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,24,164.2), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AAaBGIgcgvIgZAAIAAAvIgeAAIAAiLIA7AAQAIAAANAEQAJADAHAIQAGAGADAJQADAIAAAKQAAAGgBAHQgCAGgDAEQgDAFgFAFQgFAEgGADIAgAuIAAAFgAgbAAIAdAAQAEAAAEgCQAEgBADgDQADgEABgEQABgDAAgFQAAgFgBgDQgBgEgDgDIgHgFQgEgBgEAAIgdAAg");
	this.shape.setTransform(12.5,190.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgrBGIAAiLIBVAAIAAAaIg2AAIAAAdIAzAAIAAAZIgzAAIAAAgIA4AAIAAAbg");
	this.shape_1.setTransform(12.3,170.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AAbBGIAAg7Ig1AAIAAA7IgeAAIAAiLIAeAAIAAA1IA1AAIAAg1IAeAAIAACLg");
	this.shape_2.setTransform(12,150.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AgNBGIAAhxIgmAAIAAgaIBnAAIAAAaIglAAIAABxg");
	this.shape_3.setTransform(12,130.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AAoBGIgLgWIg5AAIgLAWIgfAAIAAgDIBAiJIANAAIBACJIAAADgAATAWIgTgtIgSAtIAlAAg");
	this.shape_4.setTransform(12,110.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AgrBGIAAiLIBVAAIAAAaIg2AAIAAAdIAzAAIAAAZIgzAAIAAAgIA4AAIAAAbg");
	this.shape_5.setTransform(12.3,90.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AAcBHIgchLIAAAAIgaBLIgTAAIgwiIIAAgFIAfAAIAOAsIANAsIABAAIAdhVIALAAIAeBVIABAAIALgtIAPgrIAfAAIAAAFIgwCIg");
	this.shape_6.setTransform(12,70.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AgOBGIAAg4IgwhOIAAgFIAgAAIARAeIANAbIABAAIANgcIARgdIAgAAIAAAFIgwBOIAAA4g");
	this.shape_7.setTransform(12,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AAoBGIgLgWIg5AAIgLAWIgfAAIAAgDIBAiIIANAAIBACIIAAADgAATAWIgTgtIgSAtIAlAAg");
	this.shape_8.setTransform(12,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AAlBGIAAhLIgjArIgDAAIgjgrIAABLIgeAAIAAiLIALAAIA3BCIA4hCIALAAIAACLg");
	this.shape_9.setTransform(12,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,24,204.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-64.5,0,64.5,0).s().p("AqEX1MAAAgvpIUJAAMAAAAvpg");
	this.shape.setTransform(64.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,129,305), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlTGwIHLtgIDcAAInLNgg");
	this.shape.setTransform(34,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,68,86.5), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("As4DlQhQABAAhNIAAkxQAAhNBQAAIZxAAQBQAAAABNIAAExQAABNhQgBg");
	this.shape.setTransform(90.5,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,181,45.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn_head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,309,82), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mcgregor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,196,270), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mayweather();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,138,270), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,277,88), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(423.5,200,1,1,0,0,0,423.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:423.4,scaleX:1.13,scaleY:1.13},29,cjs.Ease.elasticOut).to({regX:423.5,scaleX:1,scaleY:1},30,cjs.Ease.elasticOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,847,400);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(70.3,63.9,0.705,0.705,0,0,0,44.1,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:69.6},14,cjs.Ease.quadInOut).to({y:63.9},15,cjs.Ease.quadInOut).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31,43.8,0.705,0.705,0,0,0,44,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:40.9},14,cjs.Ease.quadInOut).to({y:43.8},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.2,108.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(69,145,1,1,0,0,0,69,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:135},39,cjs.Ease.quadOut).to({y:145},40,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,138,270);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(90.8,125,0.926,0.926,0,0,0,98,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:135},39,cjs.Ease.quadOut).to({y:125},40,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.5,250);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(133.9,64.7,1,1,0,0,0,89.7,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12,x:134},19,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,x:133.9},20,cjs.Ease.quadOut).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.1,16.1,1.097,1.097,0,0,0,89.9,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:134},19,cjs.Ease.quadOut).to({scaleX:1.1,scaleY:1.1,x:134.1},20,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.4,-1.5,197.2,100);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(90.5,24,0.586,0.586,0,0,0,154.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,181,48.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(34,43.2,1,1,0,0,0,34,43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,68,86.5), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(101.3,78,1,1,0,0,0,100.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:22.6,scaleX:1.09,scaleY:1.09,y:78.2},19,cjs.Ease.quadOut).to({regY:22.5,scaleX:1,scaleY:1,y:78},20,cjs.Ease.quadOut).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.3,24.9,1.061,1.061,0,0,0,100,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:25,scaleX:1,scaleY:1,y:25},19,cjs.Ease.quadOut).to({regY:24.9,scaleX:1.06,scaleY:1.06,y:24.9},20,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-1.5,212.2,95.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(712.5,200,1,1,0,0,0,423.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(289,0,847,400), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(615.8,125,1,1,0,0,0,90.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(525,0,181.5,250), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(200.3,125,1,1,0,0,0,69,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(131.3,0,138,270), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(116.9,43.2,1.239,1.239,0,0,0,133.9,16.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({y:25.2,alpha:1},16,cjs.Ease.backOut).wait(60).to({y:43.2,alpha:0},16,cjs.Ease.backIn).to({_off:true},1).wait(26));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117,87.7,1.16,1.16,0,0,0,101.2,73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({y:119.2,alpha:0},15,cjs.Ease.backIn).wait(86).to({y:114.7},0).to({y:87.7,alpha:1},15,cjs.Ease.backOut).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,1.1,246.1,111);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(90.5,23.2,1,1,0,0,0,90.5,22.9);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,24,1,1,0,0,0,90.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// Слой 3
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.6,23.6,1,1,0,0,0,92.7,26.1);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_2.cache(-2,-2,189,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,48.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(34,43.2,1,1,0,0,0,34,43.2);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,68,86.5), null);


(lib.Символ14копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(34,43.2,1,1,0,0,0,34,43.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:298},29).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(34,43.2,1,1,0,0,0,34,43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:298},29).to({_off:true},1).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,86.5);


(lib.Символ9копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As4DnQhQAAAAhNIAAkxQAAhMBQAAIZxAAQBQAAAABMIAAExQAABNhQAAg");
	mask.setTransform(90.5,23.1);

	// Слой 3
	this.instance = new lib.Символ14копия();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,18.5,1,1,0,0,0,34,43.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,24,1,1,0,0,0,90.5,24);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9копия2, new cjs.Rectangle(-9.1,-9.5,203,69), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As4DnQhQAAAAhNIAAkxQAAhMBQAAIZxAAQBQAAAABMIAAExQAABNhQAAg");
	mask.setTransform(90.5,23.1);

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,18.5,1,1,0,0,0,34,43.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,24,1,1,0,0,0,90.5,24);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-9.1,-9.5,203,69), null);


// stage content:
(lib.mma_actia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		
			
		this.mw.x = - stage.mouseX / 15;
		
			
		this.mg.x =  stage.mouseX / 15;
		
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(102.5,271.9,1,1,0,0,0,90.5,24);

	this.instance_1 = new lib.Символ9копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(540.8,271.9,1,1,0,0,0,90.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.1,151.8,1,1,0,0,0,117,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(614.6,95.5,1,1,0,0,0,12,82.1);

	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24,115.5,1,1,0,0,0,12,102.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7BHIAAiNIAfAAIAABQIBOhQIAKAAIAACNIgeAAIAAhQIhQBQg");
	this.shape.setTransform(409.3,271.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7BHIAAiNIAfAAIAABQIBOhQIAKAAIAACNIgeAAIAAhQIhQBQg");
	this.shape_1.setTransform(394.1,271.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AAlBQIAAgSIhkAAIAAiNIAeAAIAABxIAyAAIAAhxIAeAAIAAB0IARAAIAAArg");
	this.shape_2.setTransform(379.3,272.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AApBIIgMgYIg5AAIgLAYIggAAIAAgFIBBiJIANAAIBBCJIAAAFgAATAWIgTguIgTAuIAmAAg");
	this.shape_3.setTransform(364.1,271.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("Ag3BHIAAiNIA8AAQAJAAANAEQAJAEAHAIQAGAHADAJQADAKABAJQgBALgDAIQgDAJgHAGQgGAIgKADQgNAFgIAAIgdAAIAAAogAgYAFIAdAAQAFgBAEgBQAEgCADgDIAEgIQABgEAAgFQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAIgdAAg");
	this.shape_4.setTransform(351.8,271.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AgNBHIAAhyIgnAAIAAgbIBpAAIAAAbIgmAAIAAByg");
	this.shape_5.setTransform(339,271.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AgKBHIgNgEQgGgCgGgDIgLgIQgFgEgEgGIgHgNQgDgHgCgHQgBgIAAgIQAAgJABgHQACgIADgHIAHgMIAJgLIALgIIAMgGIANgDIANgCQALABALADQALADAIAGIAJAHIAHAJQADAFACAFIAEAMIgeAAQgCgFgEgFQgDgFgFgDIgKgDQgFgCgHAAQgIAAgIAEQgIACgFAHQgGAFgDAJQgDAJAAAJQAAAIADAIQADAJAGAFQAFAHAIADQAIAEAIAAQAHAAAGgCQAGgCAEgCQAFgDAEgFQADgFACgGIAdAAIgDAMQgCAHgEAEIgHAJIgIAIQgJAGgLADQgKADgMABg");
	this.shape_6.setTransform(325.7,271.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7BHIAAiNIAfAAIAABQIBOhQIAKAAIAACNIgeAAIAAhQIhQBQg");
	this.shape_7.setTransform(310.4,271.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AgqBHIAAiNIBVAAIAAAcIg3AAIAABxg");
	this.shape_8.setTransform(298.1,271.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AgrBHIAAiNIBWAAIAAAbIg4AAIAAAdIA0AAIAAAZIg0AAIAAAgIA5AAIAAAcg");
	this.shape_9.setTransform(286.7,271.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("Ag3BHIAAiNIA8AAQAIAAAOAEQAJAEAHAIQAGAHADAJQAEAKAAAJQAAALgEAIQgDAJgHAGQgGAIgKADQgNAFgIAAIgdAAIAAAogAgYAFIAdAAQAFgBAEgBQAEgCADgDIAEgIQABgEAAgFQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAIgdAAg");
	this.shape_10.setTransform(274.5,271.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AgWBHQgJgDgHgGQgGgGgEgJQgEgJAAgMIAcAAQAAAFABAEQACAFAEADQADACAEACQAEABAGAAQAEAAAFgBIAHgEQADgDABgEQACgEAAgEQAAgEgCgEQgBgEgDgDIgIgEQgEgBgEAAIgLAAIAAgYIAKAAQAIAAAEgFQAGgEAAgHQAAgIgGgFQgFgEgGAAQgJAAgFAEQgFADgBAHIgaAAQAAgKADgHQAEgHAGgFQAGgEAJgDQAIgCAKAAQAJAAAJADQAIADAHAGQAGAFADAHQADAIABAIQgBAJgEAHQgFAHgHAFQAGACAEADQAFADADAFQADAEABAGQACAFAAAHQAAAJgEAIQgDAJgHAFQgHAGgLADQgKAEgLAAQgMAAgKgDg");
	this.shape_11.setTransform(256.3,271.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AgrBHIAAiNIBWAAIAAAbIg4AAIAAAdIA0AAIAAAZIg0AAIAAAgIA5AAIAAAcg");
	this.shape_12.setTransform(244.8,271.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("Ag2BHIAAiNIBiAAIAAAbIhFAAIAAAaIAeAAQANAAAJADQAKAEAGAGQAGAEADAIQADAIAAAJQAAAKgDAIQgDAIgGAHQgHAGgJADQgKAEgMAAgAgZAsIAeAAQAFAAAEgBQAEgBADgDQAFgGAAgIQAAgHgFgFIgHgFQgEgBgFAAIgeAAg");
	this.shape_13.setTransform(232.5,271.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// logo
	this.instance_5 = new lib.Символ29();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,14.4,1,1,0,0,0,72.2,8);

	this.instance_6 = new lib.Символ2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,48.6,0.56,0.56,0,0,0,138.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_7 = new lib.Символ21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(592,152.5,0.744,1,180,0,0,64.5,152.5);

	this.instance_8 = new lib.Символ21();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48.5,152.6,0.752,1,0,0,0,64.5,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 5
	this.mg = new lib.Символ34();
	this.mg.parent = this;
	this.mg.setTransform(19.8,143,1,1,0,0,0,90.8,125);

	this.mw = new lib.Символ33();
	this.mw.parent = this;
	this.mw.setTransform(-14.5,160,1,1,0,0,0,69,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mw},{t:this.mg}]}).wait(1));

	// Слой 9
	this.instance_9 = new lib.Символ32();
	this.instance_9.parent = this;
	this.instance_9.setTransform(317.7,270.1,1,1,0,0,0,50.6,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// bg
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(57.8,152.5,1,1,0,0,0,423.5,200);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.3,105,847,400);
// library properties:
lib.properties = {
	id: '24A1B32E52A241DD80A34DAE38E47350',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1502786587564", id:"back"},
		{src:"images/btn_head.png?1502786587564", id:"btn_head"},
		{src:"images/gloves.png?1502786587564", id:"gloves"},
		{src:"images/gloves2.png?1502786587564", id:"gloves2"},
		{src:"images/logo.png?1502786587564", id:"logo"},
		{src:"images/mayweather.png?1502786587564", id:"mayweather"},
		{src:"images/mcgregor.png?1502786587564", id:"mcgregor"}
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
an.compositions['24A1B32E52A241DD80A34DAE38E47350'] = {
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