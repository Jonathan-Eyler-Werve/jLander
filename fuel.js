// fuel.js

var fuelBase = new Image();
var fuelLampDoNot = new Image();
var fuelLampPanic = new Image();
var fuelArrow = new Image();
var fuelOverlay = new Image();

function fuelInit(){

	console.log("fuelInit runs");
  fuelBase.src = "source-images/fuel-base.svg";
  fuelLampDoNot.src = "source-images/fuel-lamp1.svg";
  fuelLampPanic.src = "source-images/fuel-lamp2.svg";
  fuelArrow.src = "source-images/fuel-arrow.svg";
  fuelOverlay.src = "source-images/fuel-overlay.svg";
};

function drawFuel(ctx, max, current){

 // console.log("drawAltimeter called")
	ctx.save();
  ctx.translate((canvasEdgeX - 215),250);

	drawFuelBase(ctx, max, current);
	drawFuelLamps(ctx, max, current);
	drawFuelArrow(ctx, max, current);
	drawFuelOverlay(ctx, max, current);
  ctx.restore();
};

function drawFuelBase(_ctx, max, current){
	_ctx.drawImage(fuelBase,0,0);
};

function drawFuelLamps(_ctx, max, current){
	if ((current / max < .05) && ((gameLoopCounter % 30) > 15)) {
		_ctx.drawImage(fuelLampPanic,0,0);	
	}
	else if ((current / max < .10) && (current / max >= .05)) {
		_ctx.drawImage(fuelLampPanic,0,0);	
	}
	else if ((current / max < .25) && (current / max >= .10)) {
		_ctx.drawImage(fuelLampDoNot,0,0);
		_ctx.drawImage(fuelLampPanic,0,0);
	};
};

function drawFuelArrow (_ctx, max, current){
	_ctx.save();
	_ctx.translate(0,(-150 * (current/max)));
	_ctx.drawImage(fuelArrow,0,0);
	_ctx.restore();
};

function drawFuelOverlay(_ctx, max, current){
	_ctx.drawImage(fuelOverlay,0,0);
};

function consumeFuel (_thrust) {
  if ((_thrust > 0) && (fuel > 0)) {
    fuel += -1; 
  };
};

fuelInit();