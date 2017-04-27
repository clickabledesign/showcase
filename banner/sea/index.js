(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.aio = function() {
	this.initialize(img.aio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,48);


(lib.chayka = function() {
	this.initialize(img.chayka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,48);


(lib.chayka_big = function() {
	this.initialize(img.chayka_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,182);


(lib.garp_icon = function() {
	this.initialize(img.garp_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,73);


(lib.girl_03 = function() {
	this.initialize(img.girl_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,138);


(lib.girl_06 = function() {
	this.initialize(img.girl_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,129);


(lib.girl_09 = function() {
	this.initialize(img.girl_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,124);


(lib.girl_12 = function() {
	this.initialize(img.girl_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,94);


(lib.girl_15 = function() {
	this.initialize(img.girl_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,68);


(lib.girl_17 = function() {
	this.initialize(img.girl_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,68);


(lib.girl_20 = function() {
	this.initialize(img.girl_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,62);


(lib.girl_29 = function() {
	this.initialize(img.girl_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,84);


(lib.guli_icon = function() {
	this.initialize(img.guli_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,69);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.sea = function() {
	this.initialize(img.sea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,211);


(lib.sky = function() {
	this.initialize(img.sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,249);


(lib.trizub = function() {
	this.initialize(img.trizub);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,336);// helper functions:

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


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgwDxQgUgJgOgPQgOgQgGgXQgIgXABgbIAAgcIAzAAIAAAeQAAAiAOASQAPASAdAAQAbAAAPgSQAOgSAAgiQAAgUgIgRQgFgPgNgPQgNgQgrgjQgngfgQgYQgMgSgHgTQgHgVAAgZQAAgdAHgXQAGgXAOgPQANgQAVgJQAUgIAaAAQAcAAAUAJQAVAIAOARQANAPAHAXQAGAWAAAdIAAANIgzAAIAAgRQAAghgOgRQgNgUgdABQgcAAgOASQgNARAAAiQAAAUAHARQAGAQANAPQAMAQArAiQAoAgAQAZQANARAHAUQAGAVAAAZQAAAbgGAXQgHAXgOAQQgOAPgVAJQgUAJgcAAQgbAAgVgJg");
	this.shape.setTransform(196.7,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhgD1IAAnpIA2AAIAAG4ICLAAIAAAxg");
	this.shape_1.setTransform(172.6,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhgD1IAAnpIA2AAIAAG4ICLAAIAAAxg");
	this.shape_2.setTransform(149.1,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgwDvQgUgJgOgQQgOgQgGgXQgHgXABgcIAAlzIA1AAIAAF2QAAAiAOASQAPASAcAAQAdAAAOgSQAOgSgBgiIAAl2IA0AAIAAFzQgBAcgGAXQgHAXgNAQQgOAQgVAJQgUAJgcAAQgbAAgVgJg");
	this.shape_3.setTransform(123.1,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgwDxQgVgJgOgPQgNgRgHgWQgGgXAAgcIAAj8QAAgdAGgWQAHgXANgQQAOgRAVgIQAVgJAbAAQAbAAAWAJQAUAIAOARQANAQAHAXQAHAWAAAdIAAApIg0AAIAAgtQAAghgNgSQgPgTgdAAQgcAAgPATQgOASAAAhIAAECQAAAjAOARQAPATAcAAQAdAAAPgTQANgRAAgjIAAhiIgyAAIAAgvIBmAAIAACPQAAAcgHAXQgHAWgNARQgOAPgUAJQgWAJgbAAQgbAAgVgJg");
	this.shape_4.setTransform(96.1,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("ABPD1IgThjIh7AAIgTBjIgyAAIBdnpIBPAAIBdHpgAA0BkIg2kbIg2EbIBsAAg");
	this.shape_5.setTransform(67.9,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhkD1IAAnpIDJAAIAAAyIiSAAIAACnIB3AAIAAAwIh3AAIAACvICSAAIAAAxg");
	this.shape_6.setTransform(40.9,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgwDxQgVgJgOgPQgNgQgHgXQgGgXgBgbIAAgcIA0AAIAAAeQAAAiAOASQAOASAeAAQAbAAAPgSQAOgSAAgiQAAgUgIgRQgGgPgMgPQgNgQgqgjQgngfgRgYQgNgSgGgTQgHgVAAgZQAAgdAGgXQAIgXANgPQAOgQATgJQAVgIAbAAQAbAAAUAJQAVAIAOARQANAPAHAXQAGAWABAdIAAANIg0AAIAAgRQAAghgNgRQgOgUgdABQgcAAgOASQgNARAAAiQgBAUAIARQAGAQANAPQANAQAqAiQAoAgAQAZQANARAGAUQAIAVAAAZQAAAbgIAXQgGAXgOAQQgOAPgVAJQgUAJgcAAQgbAAgVgJg");
	this.shape_7.setTransform(15.1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(0,0,211.9,74), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaD1IAAivIhok6IA5AAIBLDxIBNjxIA0AAIhoE6IAACvg");
	this.shape.setTransform(262.7,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABPD1IgThjIh7AAIgTBjIgyAAIBdnpIBPAAIBdHpgAA0BkIg2kbIg2EbIBsAAg");
	this.shape_1.setTransform(233.7,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyD1IgwlMIgvFMIhKAAIhEnpIA1AAIA6GgIA2mfIA1AAIA2GgIA4mhIAvAAIhCHpg");
	this.shape_2.setTransform(198.6,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABPD1IgThjIh7AAIgTBjIgyAAIBdnpIBPAAIBdHpgAA0BkIg2kbIg2EbIBsAAg");
	this.shape_3.setTransform(163.4,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkD1IAAnpIDJAAIAAAyIiSAAIAACnIB3AAIAAAwIh3AAIAACvICSAAIAAAxg");
	this.shape_4.setTransform(125.5,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwDxQgUgJgPgPQgNgQgGgXQgIgXABgbIAAgcIAzAAIAAAeQAAAiAOASQAPASAcAAQAcAAAPgSQAOgSAAgiQAAgUgHgRQgHgPgMgPQgNgQgrgjQgngfgRgYQgMgSgGgTQgHgVAAgZQAAgdAGgXQAIgXAMgPQAPgQATgJQAVgIAaAAQAcAAAVAJQAUAIAOARQANAPAHAXQAHAWgBAdIAAANIgzAAIAAgRQAAghgOgRQgOgUgcABQgcAAgOASQgOARAAAiQAAAUAIARQAGAQAMAPQAOAQAqAiQAnAgASAZQAMARAHAUQAGAVABAZQgBAbgGAXQgHAXgOAQQgOAPgUAJQgWAJgbAAQgbAAgVgJg");
	this.shape_5.setTransform(99.7,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPD1IgThjIh7AAIgTBjIgyAAIBdnpIBPAAIBdHpgAA0BkIg2kbIg2EbIBsAAg");
	this.shape_6.setTransform(71.9,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA8D1IAAjcIh3AAIAADcIg3AAIAAnpIA3AAIAADcIB3AAIAAjcIA3AAIAAHpg");
	this.shape_7.setTransform(42.9,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwDxQgVgJgOgPQgNgRgHgWQgGgXAAgcIAAj8QAAgdAGgWQAHgXANgQQAOgRAVgIQAVgJAbAAQAbAAAWAJQAUAIAOARQANAQAHAXQAHAWAAAdIAAAsIg0AAIAAgwQAAghgNgSQgPgTgdAAQgcAAgPATQgOASAAAhIAAECQAAAjAOARQAPATAcAAQAdAAAPgTQANgRAAgjIAAg/IA0AAIAAA9QAAAcgHAXQgHAWgNARQgOAPgUAJQgWAJgbAAQgbAAgVgJg");
	this.shape_8.setTransform(15.4,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ86, new cjs.Rectangle(0,0,279.1,146), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjaBUIgXgbIAAhzIAYgZIAfAAIAYAZIAAAZIgUAAIAAgRIgMgNIgPAAIgMANIAABkIAMAOIAPAAIAMgOIAAgSIAUgBIAAAaIgYAbgAClBTIAAikIAUAAIAAA2IAgAAIAZAbIAAA6IgaAZgAC5A/IAYAAIANgOIAAgqIgNgOIgYAAgABgBTIAAiSIgdAAIAAgSIBNAAIAAASIgdAAIAACSgAAcBTIAAg4IgRAAIgZA4IgWAAIAeg/IgSgUIAAg3IAYgaIAwAAIAACkgAgEgvIAAApIAMANIAUAAIAAhEIgUAAgAhLBTIAAhJIglAAIAABJIgUAAIAAikIAUAAIAABJIAlAAIAAhJIAUAAIAACkg");
	this.shape.setTransform(24.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(0,0,48.4,16.8), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhQCQIgBgBQglAMgrAAQhZAAg/gwQg+gwAAhCQAAhDA+gxQA/gvBZAAQA0AAAsAQQBIgxBlAAQBwAABNA7QBPA8AABUQAABUhPA8QhNA8hwAAQhtAAhPg8g");
	this.shape.setTransform(37.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(0,0,75.2,40.8), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(0,0,81,62), null);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chayka_big();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(0,0,145,182), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aio();
	this.instance.parent = this;
	this.instance.setTransform(69.2,7.5,0.53,0.53);

	this.instance_1 = new lib.aio();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.9,9.4,0.53,0.53);

	this.instance_2 = new lib.chayka_big();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(0,0,145,182), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBUIgYgbIAAhzIAZgZIAeAAIAZAZIAABzIgZAbgAgJgyIAABkIANAOIAOAAIAOgOIAAhkIgNgNIgPAAgAjhBUIgYgbIAAhzIAZgZIAfAAIAZAZIAABzIgZAbgAjmgyIAABkIAOAOIAOAAIAOgOIAAhkIgNgNIgPAAgAm7BUIgYgbIAAhzIAZgZIAfAAIAZAZIAABzIgZAbgAnAgyIAABkIAOAOIAOAAIAOgOIAAhkIgNgNIgPAAgAJ0BTIAAijIBDAAIAAAUIgvAAIAACPgAIWBTIASg5IgmhrIAWAAIAaBPIABAAIAZhPIAVAAIg2CkgAGlBTIAAikIA0AAIAZAaIAAA5IgZAbIggAAIAAA2gAG5AJIAXAAIAOgNIAAgrIgNgOIgYAAgAF+BTIglhOIgKAAIAABOIgUAAIAAijIAUAAIAABCIAKAAIAghCIAWAAIglBMIAqBXgACoBTIAAikIAUAAIAAA3IAgAAIAZAaIAAA6IgZAZgAC8A/IAYAAIANgNIAAgrIgNgNIgYAAgABjBTIAAiSIgdAAIAAgSIBOAAIAAASIgdAAIAACSgAhPBTIAAiQIgUAAIgUCQIgfAAIAAgSIANAAIAViSIA5AAIAACkgAkgBTIgkhOIgLAAIAABOIgUAAIAAijIAUAAIAABCIALAAIAfhCIAWAAIgkBMIApBXgAo9BTIAAiKIAJgFIAAgBIgVAAIAAgUIBAAAIAZAaIAAA5IgZAbIggAAIAAA2gAopAJIAXAAIAOgNIAAgrIgNgOIgYAAgApxBTIAAiQIgmAAIAACQIgUAAIAAiKIAJgFIAAgCIgUAAIAAgSIBZAAIAACjg");
	this.shape.setTransform(69.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(0,0,139.1,16.8), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCBIgngqIAAiwIAognIAwAAIAnAnIAACwIgnAqgAgZBSIAPAQIAWAAIAVgXIAAhygAgfhMIAABzIA6h6IgPgOIgWAAg");
	this.shape.setTransform(6.4,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(0,0,12.8,25.8), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guli_icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(0,0,68,69), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBEIgVhBIgBAAIgVBBIgRAAIAahKIgWg8IASAAIAQAzIABAAIARgzIARAAIgVA8IAZBKg");
	this.shape.setTransform(28.9,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXB/IglgmIAAgvIAfAAIAAAiIATAVIAUAAIAUgVIAAguIgUgWIgYAAIgKgSIAzg/IAAgZIg1AAIAAAbIgfAAIAAg4IBzAAIAABAIgiAqIAlAoIAABGIglAmg");
	this.shape_1.setTransform(17.5,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(11.5,0,21.3,25.5), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.garp_icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(0,0,72,73), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.trizub();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(0,0,275,336), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aio();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,84,48), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AxcB0ICehhQABgBA4hEQBPh3ABgCIA6g+QBHgJABgBQF4gGACgCQMJAJACgBQABgBCegHQCegHABAAQBMgWABgBQBFAGABgBQABAAAwARQAwARABgBQABgBAcAkQAcAkAAgBQABgBAOA9QAPA9AAgBQABAAgBAzQAAA0AAgBQACgBglBbIhSA3QABgBikAxQABgBmMASQmMASABAAQABgBl/AGQACgBnYgiQACgBizADQABAAgYgHQgXgHABgBQABAAgdgeQgcgdABgBQABgBgig5g");
	this.shape.setTransform(111.7,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AsmD3QACgBizADQABAAgYgIIgWgHQABAAgdgeIgbgeQABgBgig5ICehhIA5hFIBQh5IA6g+QBHgJABgBQF4gHACgBQMJAJACgBICfgIICfgHIBNgXQBFAGABAAQABgBAwARIAxAQQABAAAcAjIAcAjQABAAAOA8IAPA8QABAAgBAzIAAAzQACgBglBbIhSA3IijAvImLASImLARQABgBl/AHQACgCnYghg");
	this.shape_1.setTransform(111.7,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-1,-1,225.4,58.3), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,276,84), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADWBbQgigegEgtQgDgsAegjQAegiAtgEQAugDAiAeQAjAeADAtQADAtgeAiQgeAjgtADIgKAAQgnAAgfgbgAllBLQgjgegDgtQgDgsAegjQAegiAtgEQAtgDAjAeQAiAeAEAuQADAsgeAiQgeAjguADIgJAAQgnAAgfgbg");
	this.shape.setTransform(39.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,79.4,23.7), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aa7aSQgMgHgGgMQhljjjQiJQjUiMkAAAQjPAAi2BeQiwBbh3CgQh3igivhbQi3hejOAAQkAAAjVCMQjPCJhmDjQgFAMgNAHQgMAGgNgDQgOgCgJgLQgIgKgBgOIAAgaQAAitBDifQBBiZB2h2QB2h2CZhBQCehDCuAAQDOAAC3BeQCvBbB3CgQB3igCwhbQC2heDPAAQCtAACfBDQCZBBB2B2QB2B2BBCZQBDCfAACtIgBAaQAAAOgJAKQgJALgOACIgHABQgJAAgJgEgAI4BiQgJgFgFgKQhPivihhrQimhtjGAAQihAAiOBJQiKBHhcB9Qhdh9iJhHQiOhJihAAQjHAAimBtQihBrhPCvQgFAKgJAFQgKAFgKgCQgLgCgHgJQgGgIgBgKIAAgUQAAkSDDjDQDCjCETAAQChAACOBJQCJBHBdB8QBch8CKhHQCOhJChAAQESAADCDCQDDDDAAESIAAAUQgBALgHAIQgHAIgKACIgHAAQgGAAgHgDgAOn0eQgFgDgCgFQgqhdhVg4QhXg6hpAAQhVAAhLAnQhIAlgxBCQgxhChIglQhLgnhVAAQhoAAhXA6QhVA4gqBdQgCAFgFADQgFACgFgBQgGgBgEgEQgDgFAAgFIAAgLQAAiRBmhmQBnhnCPAAQBVAABLAnQBIAlAxBCQAxhCBIglQBLgnBVAAQCRAABmBnQBnBnAACQIAAALQgBAGgDAEQgEAEgFABIgDAAQgEAAgEgBg");
	this.shape.setTransform(178.1,168.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(0,0,356.2,337.2), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,172,138), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chayka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,99,48), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chayka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,99,48), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chayka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,99,48), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,38,38), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhkD1IAAnpIDJAAIAAAyIiSAAIAACnIB3AAIAAAwIh3AAIAACuICSAAIAAAyg");
	this.shape.setTransform(286.5,-124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgwDxQgUgJgOgPQgOgQgGgXQgIgXABgbIAAgcIAzAAIAAAeQAAAiAOASQAPASAcAAQAcAAAPgSQAOgSAAgiQAAgUgHgRQgHgPgMgPQgNgQgrgjQgngfgRgYQgLgSgHgTQgHgWAAgYQAAgdAHgWQAGgYANgPQAOgQAVgIQAUgJAaAAQAcAAAVAJQAUAIAOARQANAQAHAWQAHAWgBAdIAAANIgzAAIAAgRQAAghgOgRQgOgUgcAAQgcABgOASQgOARAAAiQABAUAHARQAGAQANAPQANAQAqAiQAnAgASAZQAMARAHAUQAGAVAAAZQAAAbgGAXQgHAXgOAQQgOAPgUAJQgWAJgbAAQgbAAgVgJg");
	this.shape_1.setTransform(260.7,-124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgwDvQgUgJgOgQQgNgQgHgXQgGgXgBgcIAAlzIA2AAIAAF2QAAAiAOASQAOASAcAAQAdAAAOgSQAPgSAAgiIAAl2IAyAAIAAFzQABAcgHAXQgHAXgNAQQgOAQgUAJQgWAJgbAAQgbAAgVgJg");
	this.shape_2.setTransform(234.2,-123.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgwDxQgVgJgPgPQgNgRgHgXQgHgWAAgcIAAj8QAAgdAHgXQAHgXANgPQAPgRAVgIQAVgJAbAAQAbAAAWAJQAVAIAOARQAOAPAHAXQAHAXAAAdIAAD8QAAAcgHAWQgHAXgOARQgOAPgVAJQgWAJgbAAQgbAAgVgJgAgri0QgPASAAAhIAAECQAAAjAPASQAPASAcAAQAdAAAPgSQAOgSAAgjIAAkCQAAgigOgRQgPgTgdgBQgcABgPATg");
	this.shape_3.setTransform(207,-124);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ABoD1IAAmJIhOGJIg0AAIhRmFIAAGFIgvAAIAAnpIBMAAIBPGGIBOmGIBMAAIAAHpg");
	this.shape_4.setTransform(175.1,-124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhkD1IAAnpIDJAAIAAAyIiSAAIAACnIB3AAIAAAwIh3AAIAACuICSAAIAAAyg");
	this.shape_5.setTransform(133.6,-124);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AA8D1IAAjdIh3AAIAADdIg3AAIAAnpIA3AAIAADcIB3AAIAAjcIA3AAIAAHpg");
	this.shape_6.setTransform(106.5,-124);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgaD1IAAm3IhaAAIAAgyIDpAAIAAAyIhaAAIAAG3g");
	this.shape_7.setTransform(79.6,-124);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgaD1IAAm3IhaAAIAAgyIDpAAIAAAyIhaAAIAAG3g");
	this.shape_8.setTransform(43.5,-124);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AA7D1Ih9mLIAAGLIgwAAIAAnpIBEAAIBxFiIAAliIAwAAIAAHpg");
	this.shape_9.setTransform(16.7,-124);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgaD1IAAnpIA1AAIAAHpg");
	this.shape_10.setTransform(-3.2,-124);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgwDxQgVgJgPgPQgNgRgHgXQgHgWAAgcIAAj8QAAgdAHgXQAHgXANgPQAPgRAVgIQAVgJAbAAQAbAAAWAJQAVAIAOARQAOAPAHAXQAHAXAAAdIAAD8QAAAcgHAWQgHAXgOARQgOAPgVAJQgWAJgbAAQgbAAgVgJgAgri0QgPASAAAhIAAECQAAAjAPASQAPASAcAAQAdAAAPgSQAOgSAAgjIAAkCQAAgigOgRQgPgTgdgBQgcABgPATg");
	this.shape_11.setTransform(-22.3,-124);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AhrD1IAAnpIBrAAQAbAAAVAIQAVAIAOAQQAMAQAHAVQAGAXABAcIAAA6QAAAdgIAXQgHAVgNAPQgOAPgWAIQgVAHgdAAIgwAAIAADBgAg1ACIAwAAQAeAAAPgOQAPgPAAgjIAAhBQgBgjgNgPQgNgRgcAAIg1AAg");
	this.shape_12.setTransform(-48.4,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-64,-154,365.1,74), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAClIAAlJIAkAAIAAEnIBdAAIAAAig");
	this.shape.setTransform(114,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoClQgHgOAAgbIAAgzQAAgOgDgJQgDgJgGgHQgGgFgJgDQgIgCgMAAIgZAAIAACNIglAAIAAlJIBJAAQATAAAOAGQAOAFAJAIQAIAKAFAPQAEANAAASIAAAbIgDAZQgCALgFAIQgFAJgIAGQgIAFgKADQALAEAIAFQAIAHAFAJQAFAIACAMIACAYIAAAzQAAAcAHAMgAgngJIAbAAQAXAAAKgJQAGgFADgIQADgKAAgNIAAgfQAAgXgIgLQgJgLgUAAIgjAAg");
	this.shape_1.setTransform(96.6,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRClIAAlJIAjAAIAAFJg");
	this.shape_2.setTransform(83.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCiQgOgGgJgLQgJgKgEgQQgFgPAAgTIAAipQAAgTAFgPQAEgPAJgLQAJgLAOgGQAOgGASAAQATAAAOAGQAOAGAJALQAJALAEAPQAFAPAAATIAAAcIgjAAIAAgeQAAgWgJgMQgJgNgUAAQgTAAgKANQgJAMAAAWIAACtQAAAXAJAMQAKANATAAQAUAAAJgNQAJgMAAgXIAAhCIgiAAIAAgfIBFAAIAABfQAAATgFAPQgEAQgJAKQgJALgOAGQgOAGgTAAQgSAAgOgGg");
	this.shape_3.setTransform(70.7,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCClIAAlJICGAAIAAAiIhiAAIAABwIBQAAIAAAgIhQAAIAAB1IBiAAIAAAig");
	this.shape_4.setTransform(46.2,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApClIAAiVIhQAAIAACVIglAAIAAlJIAlAAIAACVIBQAAIAAiVIAkAAIAAFJg");
	this.shape_5.setTransform(28,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRClIAAknIg9AAIAAgiICdAAIAAAiIg9AAIAAEng");
	this.shape_6.setTransform(9.9,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-0.5,-14.1,124.1,51), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGChIAAlBIBGAAQASAAAOAFQANAGAJAKQAJAKAEAPQAEAOAAASIAAAoQAAASgEAPQgFANgJAKQgJAKgOAFQgPAFgSAAIgfAAIAAB/gAgiACIAfAAQATAAAKgJQAKgLAAgXIAAgrQAAgWgJgKQgJgMgSAAIgiAAg");
	this.shape.setTransform(74.3,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/ChIAAlBIAkAAIAAEhIBbAAIAAAgg");
	this.shape_1.setTransform(58.1,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBChIAAlBICDAAIAAAgIhfAAIAABvIBNAAIAAAfIhNAAIAABzIBfAAIAAAgg");
	this.shape_2.setTransform(41.8,-4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnChIAAiRIhOAAIAACRIgkAAIAAlBIAkAAIAACRIBOAAIAAiRIAlAAIAAFBg");
	this.shape_3.setTransform(24,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(12.6,-25.2,72.1,50), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ay1S2QnznzAArDQAArCHznzQHznzLCAAQLDAAHzHzQHzHzAALCQAALDnzHzQnzHzrDAAQrCAAnznzg");
	this.shape.setTransform(170.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,341,341), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,255,255,0)","rgba(0,255,255,0)","rgba(0,255,255,0)","#00B7F4"],[0,0,0,1],0,66.6,0,-102.6).s().p("A9xl8IEYAcQE2AbCXgFQBPgDBHgNICFgdQDCgrENgOQEGgNHHARQHAARCIgIQEzgSK5hMIASN+Mg7PACFg");
	this.shape.setTransform(190.6,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,381.1,102.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,53,124), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,112,94), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,55,68), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,41,68), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,191,129), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sea();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,766,211), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sky();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,766,249), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(24.2,8.3,1,1,0,0,0,24.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.22,scaleY:1.22},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.4,16.8);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(37.6,20.4,1,1,0,0,0,37.6,20.4);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(0,0,75.2,40.8), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(30.3,-7.3,1,1,0,0,0,24.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.6,30.5,1,1,0,0,0,37.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.girl_20();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(0,-15.6,83.2,77.7), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(40.5,31,1,1,0,0,0,40.5,31);

	this.instance_1 = new lib.Символ80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,31,1,1,0,0,0,40.5,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,62);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(72.5,91,1,1,0,0,0,72.5,91);

	this.instance_1 = new lib.Символ77();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.5,91,1,1,0,0,0,72.5,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,182);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(6.4,12.8,1,1,0,0,0,6.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,25.8);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(14.9,12.8,1,1,0,0,0,6.4,12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBJIAAgoIAmAAIAAAogAgTggIAAgoIAmAAIAAAog");
	this.shape.setTransform(2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(0,0,21.3,25.8), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(89.9,31.6,1.64,1.64,0,0,0,10.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,34.5,1,1,0,0,0,34,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(0,0,107.3,69), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(-7.4,253.6,1.54,1.54,0,0,0,11.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65,252.5,1,1,0,0,0,36,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-7.9,216,108.9,73), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(42,24,1,1,0,0,0,42,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,48);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(135.7,42.6,1,1,0,0,0,69.5,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.1,43.1,1,1,0,0,0,111.7,28.2);
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-3,-3,229,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.girl_29();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,276,84), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(138,42,1,1,0,0,0,138,42);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138,42,1,1,0,0,0,138,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,84);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(42,24,1,1,0,0,0,42,24);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,48);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(275,336,1,1,0,0,0,275,336);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:275.1,rotation:6,x:275.1},19,cjs.Ease.get(1)).to({regX:275,rotation:0,x:275},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,336);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(137.5,168,1,1,0,0,0,137.5,168);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,336);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(72.5,91,1,1,0,0,0,72.5,91);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,145,182), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(71.6,60.4,0.16,0.16,0,0,0,178.1,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(43.1,33.5,56.9,53.9), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ86();
	this.instance.parent = this;
	this.instance.setTransform(42.4,-6,0.372,0.372,0,0,0,139.6,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-9.4,-33.1,103.7,54.3), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ87();
	this.instance.parent = this;
	this.instance.setTransform(2.3,16.9,0.454,0.454,0,0,0,106,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-45.8,0.1,96.1,33.6), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-37.4,30,1.12,1.12,0,7,0,45.4,13);

	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.7,27.5,1.33,1.329,0,7,0,30.2,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-99.9,-21.2,190.4,76.3), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(63.3,22.4,1,1,0,0,0,39.6,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(2).to({alpha:0},0).wait(6).to({alpha:1},0).wait(2).to({alpha:0},0).to({_off:true},1).wait(5));

	// Слой 1
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.5,91,1,1,0,0,0,72.5,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,182);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(72.5,171,1,1,4,0,0,72.5,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:171.1,rotation:-4,y:171.1},11,cjs.Ease.get(1)).to({regY:171,rotation:4,y:171},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-4.6,157.4,191.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(50.5,-249.6,0.613,0.613,168.6,0,0,72.2,91.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({regX:72.5,regY:91.1,x:68.7,y:-159.4},9,cjs.Ease.get(-1)).to({regY:90.8,x:67.5,y:-165.3},6,cjs.Ease.get(1)).wait(14).to({regX:72.2,regY:91.2,x:50.5,y:-249.6},15,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-318.7,-67.8,0.777,0.777,72.8,0,0,72.4,91);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({regX:72.5,x:-207.3,y:-102.3},9,cjs.Ease.get(-1)).to({regY:90.9,x:-214.7,y:-100.1},6,cjs.Ease.get(1)).wait(14).to({regX:72.4,regY:91,x:-318.7,y:-67.8},15,cjs.Ease.get(1)).to({_off:true},1).wait(28));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(476.4,-78.8,0.718,0.718,-67.9,0,0,72.5,91);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({x:376.5,y:-119.3},9,cjs.Ease.get(-1)).to({x:383.2,y:-116.6},6,cjs.Ease.get(1)).wait(14).to({x:476.4,y:-78.8},15,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// Слой 1
	this.instance_3 = new lib.Символ45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(72.5,231,1,1,0,0,0,72.5,91);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:81},9,cjs.Ease.get(-1)).to({y:91},6,cjs.Ease.get(1)).wait(14).to({y:231},15,cjs.Ease.get(1)).to({_off:true},1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(72.5,91,1,1,0,0,0,72.5,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, null, null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-250.5,-113,0.86,0.86,0,0,180,49.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:42.6,y:15},24).to({x:301.5,y:-156},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.1,-133.6,85.2,41.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(49.5,24,0.63,0.63,0,0,0,49.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-322.5,y:87},24).to({x:-794.4,y:-59},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,8.9,62.4,30.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(345.5,-212,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:24.1,rotation:25,x:23.5,y:70.1},39,cjs.Ease.get(-1)).to({regX:49.6,regY:23.9,rotation:68,x:-154.3,y:-132.9},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296,-236,99,48);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(75.5,69,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383.5,20,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.4,0,0.51,0.51,0,0,180,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.5,24,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-267.1,-236,681.8,271.1), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(49.5,24,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-90.5},3,cjs.Ease.get(1)).wait(1).to({x:49.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.1,-236,681.8,271.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(16,16,0.84,0.84,0,0,0,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10,y:10},10,cjs.Ease.get(1)).to({x:16,y:16},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,31.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(168.2,19.9,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,79.2,0.477,0.477,0,7,0,93,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-33.9,-0.3,218,36.2), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(295.6,96,1,1,0,0,0,178.1,168.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:235.6,alpha:1},10,cjs.Ease.get(1)).to({x:245.6},5,cjs.Ease.get(1)).wait(30).to({x:255.6},5,cjs.Ease.get(1)).to({x:205.6,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.6,45.1,1,1,0,0,0,45.6,30.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({x:137.6,alpha:1},10,cjs.Ease.get(1)).to({x:127.6},5,cjs.Ease.get(1)).wait(30).to({x:117.6},5,cjs.Ease.get(1)).to({x:147.6,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69,38.5,0.773,0.773,0,5.8,0,64,12.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.23,scaleY:1.23,x:69.2,y:46.9,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1.19,scaleY:1.19,x:69.1,y:46.3},5,cjs.Ease.get(1)).wait(30).to({scaleX:1.26,scaleY:1.26,x:69.2,y:47.6},5,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:69.1,y:39.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// Символ 29
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.7,12.7,0.975,0.974,0,5.8,0,51.1,13);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.54,scaleY:1.54,y:5.9,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1.5,scaleY:1.5,x:68.8,y:6.5},5,cjs.Ease.get(1)).wait(30).to({scaleX:1.59,scaleY:1.59,y:5.5},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,y:11.8,alpha:0},5,cjs.Ease.get(1)).wait(56));

	// Слой 4
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.9,85.5,1,1,0,0,0,93,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-24.4,218,131.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(170.5,170.5,1,1,0,0,0,170.5,170.5);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,341,341), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// guli
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(-31.4,140,1,1,0,0,0,34,34.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:118.6,alpha:1},3,cjs.Ease.get(1)).wait(1).to({x:-31.4,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// garp
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(639.6,-78,1,1,0,0,0,36,36.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// text
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(283.5,95.1,1,1,0,0,0,174.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-96.5,alpha:0},3,cjs.Ease.get(1)).wait(1).to({x:283.5,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// krug
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(174.5,158.5,1,1,0,0,0,170.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-205.5,alpha:0},3,cjs.Ease.get(1)).wait(1).to({x:174.5,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-12,700.6,341);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(172.4,84.2,2.21,2.21,0,0,0,190.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:171.6,y:67.2},10).to({x:172.4,y:84.2},14).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.5,112.4,2.21,2.21,0,0,0,190.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:222.7,y:96.4},8).to({x:223.5,y:112.4},16).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191.4,53.5,2.21,2.21,0,0,0,190.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:191.5,y:56.5},13).to({x:191.4,y:53.5},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.8,-20.3,893.3,286);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(127,50,1,1,0,0,0,10.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:62.1,rotation:-6},14,cjs.Ease.get(1)).to({regY:62,rotation:6},15,cjs.Ease.get(1)).to({rotation:0},15,cjs.Ease.get(1)).wait(16));

	// Слой 1
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86,69,1,1,0,0,0,86,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 3
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.7,50.5,1,1,0,0,0,20.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:157.2,y:45.5},14,cjs.Ease.get(1)).to({rotation:-7,x:159.7,y:50.5},15,cjs.Ease.get(1)).to({regX:20.6,regY:25.1,rotation:4,x:158.2,y:48.1},15).to({regX:20.5,regY:25,rotation:0,x:159.7,y:50.5},15).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71.2,99.5,1,1,0,0,0,97,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:20,y:99.6},14,cjs.Ease.get(1)).to({rotation:11,y:99.5},15,cjs.Ease.get(1)).to({regY:57.1,rotation:-13,y:99.6},15,cjs.Ease.get(1)).to({regY:57,rotation:0,y:99.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-12,206,150);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(40.5,31,1,1,0,0,0,40.5,31);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,-15.6,83.2,77.7), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(138,42,1,1,0,0,0,138,42);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,276,84), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(383,105.5,1,1,0,0,0,383,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,766,211), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(390,105.5,1,1,0,0,0,383,105.5);
	this.instance.alpha = 0.59;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:413,y:104.5,alpha:0.738},18).to({x:390,y:105.5,alpha:1},21,cjs.Ease.get(1)).to({x:349},20,cjs.Ease.get(1)).to({x:390,alpha:0.59},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383,105.5,1,1,0,0,0,383,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,773,211);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(383,105.5,1,1,0,0,0,383,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:382.9,rotation:-2},29,cjs.Ease.get(1)).to({regX:383,rotation:0},10,cjs.Ease.get(1)).to({regX:382.9,rotation:2,x:382.9},29,cjs.Ease.get(1)).to({regX:383,rotation:0,x:383},11,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(373.5,-108,1,1,0,0,0,383,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2},31,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(1)).to({rotation:2,y:-108.1},31,cjs.Ease.get(1)).to({rotation:0,y:-108},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-232.5,782.6,443.6);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(160.6,214.4,0.74,0.74,51,0,0,137.5,168.1);

	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(311.1,24,1,1,0,0,0,42,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(0,0,353.1,371.6), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(176.6,185.8,1,1,0,0,0,176.6,185.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353.1,371.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// volna
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(5.3,160.2,1,1,4,0,0,190.6,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.4,rotation:1,x:5.2},14,cjs.Ease.get(1)).to({regY:33.3,rotation:4,x:5.3},25,cjs.Ease.get(1)).to({regY:33.2,rotation:-1},21,cjs.Ease.get(1)).to({regY:33.3,rotation:4},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447.2,77.3,904.8,346.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(95.2,82.5,1.07,1.07,0,0,0,37.6,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91.7,y:83.5,alpha:0.371},29,cjs.Ease.get(1)).to({x:95.2,y:82.5,alpha:0},30,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47,82,1,1,0,0,0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.14,scaleY:1.14,x:40,y:83.5},29,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:47,y:82},30,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86,69,1,1,0,0,0,86,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-12,206,150);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(473.2,38,1,1,0,0,0,26.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.6,rotation:-19,x:468.7,y:35},19,cjs.Ease.get(1)).to({regX:26.5,regY:18.9,rotation:8,x:472.7,y:37.5},20,cjs.Ease.get(1)).to({regY:19,rotation:0,x:473.2,y:38},20,cjs.Ease.get(1)).wait(1));

	// girl_29.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(367,96,1,1,0,0,0,138,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// girl_06.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(359.5,74.5,1,1,0,0,0,165.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3,x:363,y:76},18,cjs.Ease.get(1)).to({rotation:-3,x:359.5,y:74.5},22,cjs.Ease.get(1)).to({rotation:0},19,cjs.Ease.get(1)).wait(1));

	// girl_03.png
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(369,69,1,1,0,0,0,45,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3,y:72},18,cjs.Ease.get(1)).to({rotation:0,y:69},22,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(194,-55,311,198);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(392.6,338.1,1,1,0,0,0,383,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:348.1},14,cjs.Ease.get(1)).to({y:338.1},15,cjs.Ease.get(1)).to({y:343.1},10,cjs.Ease.get(1)).to({y:338.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,782.6,443.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,86,1,1,0,0,0,349.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2},30,cjs.Ease.get(1)).to({rotation:0},9,cjs.Ease.get(1)).to({regY:43.1,rotation:2,y:86.1},30,cjs.Ease.get(1)).to({regY:43,rotation:0,y:86},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-12,311,198);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(287.5,114,1,1,0,0,0,127.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:120},9,cjs.Ease.get(1)).to({y:114},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,311,198);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(155.5,100,1,1,0,0,0,155.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:146.5},29,cjs.Ease.get(1)).to({x:172.5},30,cjs.Ease.get(1)).to({x:155.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,311,198);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,86,1,1,0,0,0,155.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-137.5},3,cjs.Ease.get(1)).wait(1).to({x:-4.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-12,311,198);


// stage content:
(lib.sea1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.gun.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
		this.pric.x = stage.mouseX/window.devicePixelRatio;
		this.pric.y = stage.mouseY/window.devicePixelRatio;
			this.gun.x = stage.mouseX/window.devicePixelRatio;
		}
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.gun_pric.gotoAndPlay(1);
			_this.gun.gotoAndPlay(0);
			_this.pric.gotoAndPlay(0);
			_this.girl.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			_this.guli.gotoAndPlay(1);
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.gun_pric.gotoAndPlay(0);
			_this.gun.gotoAndPlay(1);
			_this.pric.gotoAndPlay(1);
			_this.girl.gotoAndPlay(5);
			_this.text.gotoAndPlay(5);
			_this.guli.gotoAndPlay(5);
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pric
	this.pric = new lib.Символ57();
	this.pric.parent = this;
	this.pric.setTransform(508.6,178.5,1,1,0,0,0,42,24);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// gun
	this.gun = new lib.Символ55();
	this.gun.parent = this;
	this.gun.setTransform(464.6,350.1,0.89,0.89,0,0,0,-45.6,168.1);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// chayka_big
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(320,265.9,1,1,0,0,0,72.5,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gun+pric
	this.gun_pric = new lib.Символ65();
	this.gun_pric.parent = this;
	this.gun_pric.setTransform(253.1,258.9,1,1,0,0,0,176.6,185.8);

	this.timeline.addTween(cjs.Tween.get(this.gun_pric).wait(1));

	// chayki
	this.guli = new lib.Символ35();
	this.guli.parent = this;
	this.guli.setTransform(459.5,62,1,1,0,0,0,49.5,24);

	this.timeline.addTween(cjs.Tween.get(this.guli).wait(1));

	// text
	this.text = new lib.Символ25();
	this.text.parent = this;
	this.text.setTransform(97.5,291.5,1,1,0,0,0,170.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// volna_2
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.7,132.9,1,1,0,0,0,24.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// girl
	this.girl = new lib.Символ18();
	this.girl.parent = this;
	this.girl.setTransform(583,194,1,1,0,0,0,127.5,100);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// volna_1
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(314.6,52.9,1,1,0,0,180,24.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(336.8,141.8,1,1,0,0,0,387.8,221.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201.9,-45.6,942.8,729.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/aio.png?1493293647839", id:"aio"},
		{src:"images/chayka.png?1493293647839", id:"chayka"},
		{src:"images/chayka_big.png?1493293647839", id:"chayka_big"},
		{src:"images/garp_icon.png?1493293647839", id:"garp_icon"},
		{src:"images/girl_03.png?1493293647839", id:"girl_03"},
		{src:"images/girl_06.png?1493293647839", id:"girl_06"},
		{src:"images/girl_09.png?1493293647839", id:"girl_09"},
		{src:"images/girl_12.png?1493293647839", id:"girl_12"},
		{src:"images/girl_15.png?1493293647839", id:"girl_15"},
		{src:"images/girl_17.png?1493293647839", id:"girl_17"},
		{src:"images/girl_20.png?1493293647839", id:"girl_20"},
		{src:"images/girl_29.png?1493293647839", id:"girl_29"},
		{src:"images/guli_icon.png?1493293647839", id:"guli_icon"},
		{src:"images/mouse.png?1493293647839", id:"mouse"},
		{src:"images/sea.jpg?1493293647839", id:"sea"},
		{src:"images/sky.jpg?1493293647839", id:"sky"},
		{src:"images/trizub.png?1493293647839", id:"trizub"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;