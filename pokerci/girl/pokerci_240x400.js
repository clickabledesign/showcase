(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,258);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,299);


(lib.ray1 = function() {
	this.initialize(img.ray1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,268);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,257);// helper functions:

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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-0.5,-27.4,-0.5,39.6).s().p("A3bHDIAAuFMAu3AAAIgKOFg");
	this.shape.setTransform(150,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,300,90.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ray1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,336,268), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,261,257), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,36.6).s().p("AlTFTQiMiMAAjHQAAjGCMiMQCNiNDGAAQDHAACNCNQCMCMAADGQAADHiMCMQiNCNjHAAQjGAAiNiNg");
	this.shape.setTransform(-18.1,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,36.6).s().p("AlTFTQiMiMAAjHQAAjGCMiMQCNiNDGAAQDHAACNCNQCMCMAADGQAADHiMCMQiNCNjHAAQjGAAiNiNg");
	this.shape_1.setTransform(114.8,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-66.1,14.1,229,96), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZFMIAAqXICzAAIAAKXg");
	this.shape.setTransform(3.8,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-5.2,0,18,66.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiA4IAAhvIAZAAIAABXIAtAAIAAAYg");
	this.shape.setTransform(55,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLA5IgLgDIgLgFIgIgHIgHgIQgEgEgCgGQgDgGAAgGIgBgMIABgLIACgLIAGgKIAHgIQADgEAFgDQAFgDAGgCIALgEIAMgBIANABIALADIAKAFIAJAHIAHAIQADAFACAFIAEALIABAMIgBAMIgEALIgFAKIgHAIIgJAHIgKAGIgLADIgNABIgLgBgAgMgfQgGADgEAFQgEAEgDAGQgCAHAAAGQAAAHACAGQADAGAEAFQAFAFAGACQAFADAGAAQAHAAAHgDQAGgDAEgEQAEgFACgGQACgGAAgHQAAgGgCgHQgDgGgEgEQgFgFgFgDQgHgCgGAAQgGAAgGACg");
	this.shape_1.setTransform(43.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA4IAAhvIBCAAIAAAYIgpAAIAAATIAjAAIAAAYIgjAAIAAAUIAqAAIAAAYg");
	this.shape_2.setTransform(29.3,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMA4IAAgtIgnhCIAdAAIAXAqIAYgqIAbAAIgnBCIAAAtg");
	this.shape_3.setTransform(19.2,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRBHIgJgEIgHgFIgGgHQgCgEgCgFQgCgEAAgGIgBgLIAAhAIAZAAIAAA6IABANQABAFADAEQADAFAEACQAFACAFAAQAGAAAEgCQAEgCACgEQADgDABgGIABgMIAAg8IAZAAIAABBIgBAMIgDAKQgBAEgDAEIgGAHIgHAFIgHADQgIADgKAAQgNgBgFgCgAAGgzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAGAAQAGAAAFADQAEAEAAAFQAAAHgEADQgEAEgHAAQgGAAgFgEgAgegzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAHAAQAFAAAFADQAEAEAAAFQAAAHgEADQgFAEgFAAQgHAAgFgEg");
	this.shape_4.setTransform(8,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,60.9,27.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36F36A","#01C634"],[0,1],48.1,-26.8,-30,18).s().rr(-74.75,-17.5,149.5,35,17.5);
	this.shape.setTransform(74.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,149.5,35), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(113,18,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,18,161.4,258);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-119,10,0.974,0.974);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-119,10,584.5,251.3), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqDEIAAj/IBVAAIAAD/gAgihsQgPgPAAgYQAAgWAPgNQAPgNAVAAQATAAAOANQAPANAAAWQAAAYgPAPQgOANgTAAQgVAAgPgNg");
	this.shape.setTransform(254.5,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBiQgmglAAg9QAAg4AlgmQAngoA6AAQBGAAAiAlIgnBDQgXgYgfAAQgWAAgPAOQgRAPAAAZQgBAZATAQQAPAOAWAAQAfAAAbgcIAoA+QgQAWgcAMQgcAMghAAQg/AAgmglg");
	this.shape_1.setTransform(232.7,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYCCIAAj+IBVAAIAAAUQAIgMAKgGQAOgHAUAAQAbAAANAKIgeBPQgQgJgQAAQgUAAgKASIAAChg");
	this.shape_2.setTransform(209.9,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBiQgmglAAg9QAAg4AmgmQAngoA8AAQAzAAAkAhQAlAjAAA1QAAAagFAPIioAAQAGASAQAJQAQAJAUAAQAlAAAfgTIAXA9QgnAdg9AAQg+AAglglgAgtgbIBbAAQAAgPgKgKQgMgLgUAAQglAAgMAkg");
	this.shape_3.setTransform(183.5,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcDHIhOh6IAAB6IhWAAIAAmNIBWAAIAAD8IBEhuIBrAAIhTBzIBfCMg");
	this.shape_4.setTransform(156.7,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhnBgQgmglAAg7QAAg6AmglQAngnBAAAQBAAAAoAnQAmAlAAA6QAAA7gmAlQgoAnhAAAQhAAAgngngAgjgoQgPAQAAAYQAAAYAOAQQAPAPAVAAQAXAAANgOQAPgQAAgZQAAgYgPgPQgOgPgWAAQgVAAgOAOg");
	this.shape_5.setTransform(123.9,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMDHIAAmMIB6gBQBTAAApAnQAjAjAAA5QAAA4gnAlQgpAohCAAQgeAAgOgCIAACHgAgxhwIAABbQAVADAUAAQAVgBAOgJQASgNAAgaQAAgug2AAg");
	this.shape_6.setTransform(95.2,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#3FFD78","#13904B"],[0,0.996],22.3,-24,-24,22.3).s().p("ACxEQQgUgTAAgcQAAgcAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAcQAAAcgUATQgUAUgcAAQgbAAgUgUgAjnDoQg8g8AAhVIAAlyQAAgIAIAAIFyAAQBUAAA8A8QA8A8AABVQAABNgzA4QgyA6hLAKQgKBLg6AzQg5AzhNAAQhUAAg8g8gAiyiuIAAEFQAAAlAZAbQAbAcAnAAQAlAAAagZQAbgaAAgpIABhLQAAgIAHAAIBMgBQApAAAagbQAZgaAAgkQAAgogcgaQgbgaglAAIkFAAQgEAAAAAEg");
	this.shape_7.setTransform(29.2,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,259.5,58.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggA5IAAgLIAohUIgoAAIAAgSIBAAAIAAALIgoBVIApAAIAAARg");
	this.shape.setTransform(73,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBIIAAhxIAVAAIAABxgAgLg0IAAgTIAXAAIAAATg");
	this.shape_1.setTransform(67.2,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAxQgMgJABgSIAAAAIAVAAQAAAKAFAFQAEAFAHAAQAHAAAEgEQADgEAAgHQAAgGgDgEQgDgEgJgEQgRgGgJgHQgIgIAAgOQAAgOAKgJQAKgIAOAAQARAAAKAJQAKAJAAAQIgBABIgVAAQAAgJgEgFQgEgEgHAAQgFAAgEAEQgDAEAAAGQAAAGADAEQAEADAJAFQARAFAIAIQAIAIAAAOQAAAPgJAIQgKAIgRAAQgPAAgLgJg");
	this.shape_2.setTransform(60.8,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA5IAAhfIgaAAIAAgSIBJAAIAAASIgaAAIAABfg");
	this.shape_3.setTransform(52.7,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBIIAAhxIAVAAIAABxgAgLg0IAAgTIAXAAIAAATg");
	this.shape_4.setTransform(46.7,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA5IAAgLIAohUIgoAAIAAgSIBAAAIAAALIgoBVIApAAIAAARg");
	this.shape_5.setTransform(40.8,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAvQgLgLAAgUIAAgfQAAgUALgLQALgLASAAQATAAALALQALALAAAUIAAAfQAAAUgLALQgLALgTAAQgSAAgLgLgAgNgiQgFAHAAAMIAAAfQAAANAFAGQAFAGAIAAQAKAAAFgGQAFgGAAgNIAAgfQAAgMgFgHQgFgGgKAAQgJAAgEAGg");
	this.shape_6.setTransform(32.5,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA5IAAhxIAmAAQARAAAKAKQAJAKABARQgBAQgJAJQgKAKgRAAIgPAAIAAApgAgOgBIAPAAQAHAAAEgFQAEgFAAgIQAAgJgEgFQgEgFgHAAIgPAAg");
	this.shape_7.setTransform(23.4,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIA/AAIAAASIgpAAIAAAdIAiAAIAAAQIgiAAIAAAhIApAAIAAARg");
	this.shape_8.setTransform(15.1,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglA5IAAhxIAjAAQARAAAMAOQALANAAAVIAAARQAAAVgLAOQgMANgRAAgAgPAoIANAAQAIAAAFgJQAFgIAAgOIAAgRQAAgOgFgIQgFgIgIAAIgNAAg");
	this.shape_9.setTransform(6.6,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-0.2,0,79,22.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgZAyQgMgJABgTIAAAAIAVAAQAAALAFAEQAEAFAHAAQAIAAADgEQAEgEAAgHQAAgGgEgEQgDgEgJgEQgRgGgJgHQgIgIAAgOQAAgOAKgIQAKgKAOABQARAAAKAJQAKAJAAAQIAAABIgWAAQAAgJgEgFQgEgEgHAAQgFgBgEAFQgDAEAAAGQAAAGAEAEQAEAEAIAEQARAFAIAIQAJAIAAAOQAAAPgKAIQgKAJgRAAQgPAAgLgJg");
	this.shape.setTransform(44.4,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgcAvQgLgLAAgUIAAhJIAWAAIAABJQAAAMAFAGQAFAHAHAAQAJAAAEgHQAFgFAAgNIAAhJIAWAAIAABJQAAAUgLALQgLALgSAAQgRAAgLgLg");
	this.shape_1.setTransform(35.3,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AASA5IgjhIIAAAAIAABIIgWAAIAAhxIAWAAIAjBIIAAAAIAAhIIAWAAIAABxg");
	this.shape_2.setTransform(25.6,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgdAwQgMgMABgUIAAgeQgBgUAMgMQALgLASAAQASAAAMALQAMAMAAAUIAAAeQAAAUgMAMQgLAKgTABQgSgBgLgKgAgNghQgGAFAAANIAAAfQAAAMAGAHQAEAGAJABQAJgBAGgGQAEgHAAgMIAAgfQAAgNgEgFQgGgHgJAAQgJAAgEAHg");
	this.shape_3.setTransform(15.9,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AgkA5IAAhxIAgAAQARAAAKAIQAKAIAAAPQAAAIgEAGQgEAHgHADQAKABAFAHQAEAHAAAKQAAAQgJAIQgKAJgRAAgAgOAoIAPAAQAHAAADgEQAEgEAAgIQAAgIgDgFQgEgEgHgBIAAAAIgPAAgAgOgIIALAAQAGAAAEgEQAEgEAAgHQAAgIgEgEQgEgEgHAAIgKAAg");
	this.shape_4.setTransform(6.8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,50.7,22.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AAUA5IgGgZIgbAAIgHAZIgXAAIAghxIAWAAIAhBxgAAJAPIgJgjIgJAjIASAAg");
	this.shape.setTransform(48.7,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC01").s().p("AgLA5IgghxIAYAAIATBUIAAAEIAAAAIABgEIAUhUIAXAAIggBxg");
	this.shape_1.setTransform(40.3,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC01").s().p("AAUA5IgGgZIgbAAIgHAZIgXAAIAghxIAWAAIAhBxgAAJAPIgJgjIgJAjIASAAg");
	this.shape_2.setTransform(32.2,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC01").s().p("AglA5IAAhxIAjAAQAQAAANANQALAOAAAVIAAARQAAAVgLAOQgNANgQAAgAgPAoIANAAQAIAAAEgJQAGgIAAgOIAAgSQAAgNgGgIQgEgJgIAAIgNAAg");
	this.shape_3.setTransform(23.4,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC01").s().p("AgfA5IAAhxIA/AAIAAARIgpAAIAAAdIAiAAIAAARIgiAAIAAAhIApAAIAAARg");
	this.shape_4.setTransform(15,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC01").s().p("AgkA5IAAhxIAgAAQARAAAKAIQAKAIAAAPQAAAIgEAGQgEAHgHADQAKABAFAHQAEAHAAAKQAAAQgJAIQgKAJgRAAgAgOAoIAPAAQAHAAADgEQAEgEAAgIQAAgIgDgFQgEgEgHgBIAAAAIgPAAgAgOgIIALAAQAGAAAEgEQAEgEAAgHQAAgIgEgEQgEgEgHAAIgKAAg");
	this.shape_5.setTransform(6.6,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,55.3,22.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AggA5IAAgLIAohVIgoAAIAAgRIBAAAIAAALIgoBVIApAAIAAARg");
	this.shape.setTransform(72.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC01").s().p("AgcAvQgLgLAAgUIAAhJIAWAAIAABJQAAAMAFAGQAEAHAIAAQAIAAAGgHQAEgFAAgNIAAhJIAWAAIAABJQAAAUgLALQgLALgSAAQgRAAgLgLg");
	this.shape_1.setTransform(63.5,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC01").s().p("AAPA5QgDgDAAgFIgBgMIAAgIQAAgIgEgFQgDgFgGAAIgNAAIAAAuIgWAAIAAhxIAiAAQAQAAAKAJQAJAJAAAQQAAAIgEAHQgEAGgHADQAIADAEAHQAEAHAAAKIAAAIIABAKQABAGADACIAAACgAgPgFIAMAAQAGAAAEgEQADgFAAgHQAAgIgDgFQgEgFgGAAIgMAAg");
	this.shape_2.setTransform(54.6,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC01").s().p("AgdAwQgLgMAAgUIAAgeQAAgUALgMQALgLASAAQATAAALALQALAMAAAUIAAAeQAAAUgLAMQgLAKgTABQgSgBgLgKgAgOghQgEAFgBANIAAAfQABAMAEAHQAFAGAJABQAKgBAEgGQAGgHAAgMIAAgfQAAgNgGgFQgEgHgKAAQgJAAgFAHg");
	this.shape_3.setTransform(45.1,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC01").s().p("AgKA5IAAgqIghhHIAYAAIATAxIABAAIATgxIAYAAIghBIIAAApg");
	this.shape_4.setTransform(36.1,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC01").s().p("AgKBIIAAhxIAVAAIAABxgAgLg0IAAgTIAXAAIAAATg");
	this.shape_5.setTransform(29.6,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC01").s().p("AAPA5QgCgDgBgFIgBgMIAAgIQAAgIgDgFQgEgFgGAAIgNAAIAAAuIgWAAIAAhxIAiAAQAQAAAJAJQAKAJAAAQQAAAIgEAHQgEAGgHADQAIADAEAHQAEAHAAAKIAAAIIABAKQABAGADACIAAACgAgPgFIALAAQAHAAAEgEQADgFAAgHQAAgIgDgFQgEgFgGAAIgMAAg");
	this.shape_6.setTransform(23.4,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC01").s().p("AgfA5IAAhxIA/AAIAAARIgpAAIAAAdIAiAAIAAARIgiAAIAAAhIApAAIAAARg");
	this.shape_7.setTransform(15,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC01").s().p("AgKA5IghhxIAYAAIATBUIAAAEIAAAAIABgEIAUhUIAXAAIghBxg");
	this.shape_8.setTransform(6.5,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,78,22.8), null);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBKIAAgPQgPgBgJgJQgKgJAAgQIAAgBIAXAAQAAAKAFAFQAEAEAHAAQAIAAAEgEQAEgEAAgGQAAgHgEgDQgEgEgJgEQgRgGgIgHQgJgIAAgOQAAgNAJgIQAIgJAPgBIAAgRIALAAIAAARQAOACAIAJQAIAJAAAOIAAABIgWAAQAAgJgEgEQgEgFgHAAQgHAAgDAEQgDAEAAAGQAAAGADAEQAEADAJAFQARAFAJAHQAIAIAAAPQAAANgIAIQgJAJgOABIAAAPg");
	this.shape.setTransform(25,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAvQgLgLAAgUIAAgeQAAgUALgMQALgLAQAAQARAAALALQALAMAAAUIAAAeQAAAUgLALQgLAMgRAAQgQAAgLgMgAgLgiQgEAGAAALIAAAjQAAALAEAGQAFAGAGAAQAHAAAFgGQADgGAAgLIAAgjQAAgLgDgGQgFgGgHAAQgGAAgFAGg");
	this.shape_1.setTransform(15.8,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAA6IAAhdIgWAAIAAgSIAtgEIAABzg");
	this.shape_2.setTransform(5.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8копия, new cjs.Rectangle(0,0,32,22.8), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(130.5,123.5,1,1,0,0,0,130.5,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,257);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(173,105.5,1,1,0,0,0,173,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.62,scaleY:0.62,y:105.6},39,cjs.Ease.backOut).to({scaleX:1,scaleY:1,y:105.5},40,cjs.Ease.backOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,268);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA4IAAhvIAZAAIAABXIAtAAIAAAYg");
	this.shape.setTransform(55,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA5IgLgDIgLgFIgIgHIgHgIQgEgEgCgGQgDgGAAgGIgBgMIABgLIACgLIAGgKIAHgIQADgEAFgDQAFgDAGgCIALgEIAMgBIANABIALADIAKAFIAJAHIAHAIQADAFACAFIAEALIABAMIgBAMIgEALIgFAKIgHAIIgJAHIgKAGIgLADIgNABIgLgBgAgMgfQgGADgEAFQgEAEgDAGQgCAHAAAGQAAAHACAGQADAGAEAFQAFAFAGACQAFADAGAAQAHAAAHgDQAGgDAEgEQAEgFACgGQACgGAAgHQAAgGgCgHQgDgGgEgEQgFgFgFgDQgHgCgGAAQgGAAgGACg");
	this.shape_1.setTransform(43.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA4IAAhvIBCAAIAAAYIgpAAIAAATIAjAAIAAAYIgjAAIAAAUIAqAAIAAAYg");
	this.shape_2.setTransform(29.3,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA4IAAgtIgnhCIAdAAIAXAqIAYgqIAbAAIgnBCIAAAtg");
	this.shape_3.setTransform(19.2,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBHIgJgEIgHgFIgGgHQgCgEgCgFQgCgEAAgGIgBgLIAAhAIAZAAIAAA6IABANQABAFADAEQADAFAEACQAFACAFAAQAGAAAEgCQAEgCACgEQADgDABgGIABgMIAAg8IAZAAIAABBIgBAMIgDAKQgBAEgDAEIgGAHIgHAFIgHADQgIADgKAAQgNgBgFgCgAAGgzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAGAAQAGAAAFADQAEAEAAAFQAAAHgEADQgEAEgHAAQgGAAgFgEgAgegzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAHAAQAFAAAFADQAEAEAAAFQAAAHgEADQgFAEgFAAQgHAAgFgEg");
	this.shape_4.setTransform(8,11.1);

	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(39.7,14.6,1,1,0,0,0,38.9,13.8);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,61.7,28.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA4IAAhvIAZAAIAABXIAtAAIAAAYg");
	this.shape.setTransform(55,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA5IgLgDIgLgFIgIgHIgHgIQgEgEgCgGQgDgGAAgGIgBgMIABgLIACgLIAGgKIAHgIQADgEAFgDQAFgDAGgCIALgEIAMgBIANABIALADIAKAFIAJAHIAHAIQADAFACAFIAEALIABAMIgBAMIgEALIgFAKIgHAIIgJAHIgKAGIgLADIgNABIgLgBgAgMgfQgGADgEAFQgEAEgDAGQgCAHAAAGQAAAHACAGQADAGAEAFQAFAFAGACQAFADAGAAQAHAAAHgDQAGgDAEgEQAEgFACgGQACgGAAgHQAAgGgCgHQgDgGgEgEQgFgFgFgDQgHgCgGAAQgGAAgGACg");
	this.shape_1.setTransform(43.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA4IAAhvIBCAAIAAAYIgpAAIAAATIAjAAIAAAYIgjAAIAAAUIAqAAIAAAYg");
	this.shape_2.setTransform(29.3,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA4IAAgtIgnhCIAdAAIAXAqIAYgqIAbAAIgnBCIAAAtg");
	this.shape_3.setTransform(19.2,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBHIgJgEIgHgFIgGgHQgCgEgCgFQgCgEAAgGIgBgLIAAhAIAZAAIAAA6IABANQABAFADAEQADAFAEACQAFACAFAAQAGAAAEgCQAEgCACgEQADgDABgGIABgMIAAg8IAZAAIAABBIgBAMIgDAKQgBAEgDAEIgGAHIgHAFIgHADQgIADgKAAQgNgBgFgCgAAGgzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAGAAQAGAAAFADQAEAEAAAFQAAAHgEADQgEAEgHAAQgGAAgFgEgAgegzIgDgEQgBgCAAgEQAAgFAEgEQAFgDAHAAQAFAAAFADQAEAEAAAFQAAAHgEADQgFAEgFAAQgHAAgFgEg");
	this.shape_4.setTransform(8,11.1);

	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(39.4,14.8,1,1,0,0,0,38.9,13.8);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,61.4,28.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(109.3,109.3,2.271,2.271,0,0,0,48.1,48.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,32,519.9,218);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(136.5,94.2,0.682,0.682,0,0,0,200,138);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103.2},59,cjs.Ease.quadInOut).to({y:94.2},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,12.3,110.2,176);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(30.4,48.3,1,1.62,30,0,0,3.9,33);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.62,rotation:45,x:-185.8,y:44.6,alpha:0.18},63).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-2.6,69.3,102);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqnDQQhVAAg+g9Qg8g9gBhWQABhVA8g9QA+g9BVAAIVPAAQBWAAA8A9QA+A9gBBVQABBWg+A9Qg8A9hWAAg");
	mask.setTransform(88.8,20.8);

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(198.1,21,1,1,0,0,0,30.2,48.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.8,20.9,1.187,1.187,0,0,0,74.8,17.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5копия, new cjs.Rectangle(-11,-11,207,71), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqnDQQhWAAg8g9Qg+g9AAhWQAAhVA+g9QA8g9BWAAIVOAAQBWAAA+A9QA8A9AABVQAABWg8A9Qg+A9hWAAg");
	mask.setTransform(88.8,21.1);

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,21,1,1,180,0,0,30.2,48.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.8,20.9,1.187,1.187,0,0,0,74.8,17.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-11,-11,207,71), null);


(lib.Символ11копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8копия();
	this.instance.parent = this;
	this.instance.setTransform(125.3,32.3,2.835,2.835,0,0,0,16.1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.3,scaleX:3.36,scaleY:3.36,x:125.5,y:32},17,cjs.Ease.quadInOut).to({regY:11.4,scaleX:2.84,scaleY:2.84,x:125.3,y:32.3},17,cjs.Ease.quadInOut).to({regY:11.3,scaleX:3.36,scaleY:3.36,x:125.5,y:32},17,cjs.Ease.quadInOut).to({regY:11.4,scaleX:2.84,scaleY:2.84,x:125.3,y:32.3},17,cjs.Ease.quadInOut).to({regY:11.3,scaleX:3.36,scaleY:3.36,x:125.5,y:32},17,cjs.Ease.quadInOut).to({regY:11.4,scaleX:2.84,scaleY:2.84,x:125.3,y:32.3},17,cjs.Ease.quadInOut).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(327.3,22.2,1,1,0,0,0,33.6,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:216.1},17,cjs.Ease.backOut).wait(69).to({x:327.3},16,cjs.Ease.backOut).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(332.6,43.4,1,1,0,0,0,38.9,11.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:221.4},17,cjs.Ease.backOut).wait(60).to({x:332.6},16,cjs.Ease.backOut).wait(5));

	// Символ 21
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-76.3,22.3,1,1,0,0,0,39.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:31.9},17,cjs.Ease.backOut).wait(69).to({x:-76.3},16,cjs.Ease.backOut).wait(1));

	// Символ 20
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-62.4,43.4,1,1,0,0,0,25.4,11.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:45.8,y:43.5},17,cjs.Ease.backOut).wait(60).to({x:-62.4,y:43.4},16,cjs.Ease.backOut).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,0,464.9,64.5);


(lib.Символ30копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(175.5,100,1,1,0,0,0,175.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},139).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,268);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(175.5,100,1,1,0,0,0,175.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},139).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,268);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(136.5,94.2,1,1,0,0,0,136.5,94.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:136.4,regY:94.1,scaleX:1.2,scaleY:1.2,y:94.1},7,cjs.Ease.quadOut).to({regX:136.5,regY:94.2,scaleX:1,scaleY:1,y:94.2},7,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,12.3,110.2,176);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(265.5,138.5,1,1,0,0,0,130.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ30копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258,165,1,1,0,0,0,168,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258,165,1,1,0,0,0,168,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.7,219.4,1.024,1.024,0,0,0,249.8,214.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-121.8,10,598.3,289), null);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(88.8,22.9,1,1,0,0,0,30.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.7,20.7,1,1,180,0,0,88.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6копия, new cjs.Rectangle(-55.1,-30.4,251.2,102), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(88.8,22.7,1,1,0,0,0,30.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.8,20.8,1,1,0,0,0,88.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-55.1,-30,251.2,102), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(88.8,20.8,1,1,0,0,0,88.8,20.8);

	this.instance_1 = new lib.Символ6копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.8,20.7,1.122,1.122,0,0,0,88.7,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-30,251.2,102);


// stage content:
(lib.pokerci_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		 stage.scaleX = stage.scaleY = 2;
		 stage.canvas.width = 240 * 2;
		 stage.canvas.height = 400 * 2;
		 stage.canvas.style.width = '240px';
		 stage.canvas.style.height = '400px';
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.girls.gotoAndPlay(1);
		this.grad.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.girls.gotoAndPlay(9);
		this.grad.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(124.9,33,0.434,0.434,0,0,0,141,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ11копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.5,82.4,0.838,0.838,0,0,0,126.8,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.1,363.6,1.079,1.079,0,0,0,88.8,20.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ12(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 7
	this.grad = new lib.Символ25();
	this.grad.parent = this;
	this.grad.setTransform(112.2,351.1,0.838,0.838,0,0,0,109,109);

	this.timeline.addTween(cjs.Tween.get(this.grad).wait(1));

	// girls
	this.girls = new lib.Символ23();
	this.girls.parent = this;
	this.girls.setTransform(123,258.1,1.571,1.571,0,0,0,136.4,94.2);

	this.timeline.addTween(cjs.Tween.get(this.girls).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,80.1,1,1.776,0,0,0,150,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// fire_bg
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.3,334.4,1.584,1.584,0,0,0,255.9,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.8,200,947.4,469.3);
// library properties:
lib.properties = {
	id: 'E4368CE7977A43F8B72370741E71EDEC',
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1508859572609", id:"bg"},
		{src:"images/girl.png?1508859572609", id:"girl"},
		{src:"images/ray1.png?1508859572609", id:"ray1"},
		{src:"images/round.png?1508859572609", id:"round"}
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
an.compositions['E4368CE7977A43F8B72370741E71EDEC'] = {
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