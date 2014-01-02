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



function consumeFuel (_thrust) {
  if (_thrust > 0) {
    fuel += -1; 
  };
};

fuelInit();