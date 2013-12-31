
// Altimeter.js 

var altimeterBase = new image();
var altimeterThousands = new image();
var altimeterHundreds = new image();
var altimeterTens = new image();
var altimeterText = new image();

function drawAltimeter(ctx, number){

	ctx.save();
  ctx.translate(50, 50);

	drawBase(ctx, number);
	drawThousands(ctx, number);
	drawHundreds(ctx, number);
	drawTens(ctx, number);
	drawText(ctx, number);

  ctx.restore();

};

function drawBase(){
	ctx.drawImage(lander,-32,-32);
};






///////////   

ctx.rotate(to_rad(pitch));