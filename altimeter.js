
// Altimeter.js 

var altimeterBase = new image();

var altimeterThousandsBase = new image();
var altimeterThousandsTop = new image();
var altimeterHundreds = new image();
var altimeterTens = new image();
var altimeterText = new image();

function altimeterInit(){
  altimeterBase.src = "/source-images/dials-base.svg";
  altimeterThousandsBase.src = "/source-images/dials-10k-bottom.svg";
  altimeterThousandsTop.src = "/source-images/dials-10k-top.svg";
  altimeterHundreds.src = "/source-images/dials-100.svg";
  altimeterTens.src = "/source-images/dials-100.svg";
  altimeterText.src = "/source-images/dials-text.svg";
}

function drawAltimeter(ctx, number){

 console.log("drawAltimeter called")
	ctx.save();
  ctx.translate(10, 50);

	drawBase(dialContext, number);
	// drawThousands(ctx, number);
	// drawHundreds(ctx, number);
	// drawTens(ctx, number);
	// drawText(ctx, number);

  ctx.restore();

};

function drawBase(_ctx, number){
	_ctx.drawImage(altimeterBase,0,0);
};





///////////   

ctx.rotate(to_rad(pitch));