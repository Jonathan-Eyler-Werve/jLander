
// Altimeter.js 

	var altimeterBase = new Image();
	var altimeterThousandsBase = new Image();
	var altimeterThousandsTop = new Image();
	var altimeterHundreds = new Image();
	var altimeterTens = new Image();
	var altimeterText = new Image();

function altimeterInit(){

	console.log("altimeterInit runs");
  altimeterBase.src = "source-images/dials-base.svg";
  altimeterThousandsBase.src = "source-images/dials-10k-bottom.svg";
  altimeterThousandsTop.src = "source-images/dials-10k-top.svg";
  altimeterHundreds.src = "source-images/dials-100.svg";
  altimeterTens.src = "source-images/dials-100.svg";
  altimeterText.src = "source-images/dials-text.svg";
}

function drawAltimeter(ctx, number){

 console.log("drawAltimeter called")
	ctx.save();
  // ctx.translate(10, 50);

	drawBase(ctx, number);
	// drawThousands(ctx, number);
	// drawHundreds(ctx, number);
	// drawTens(ctx, number);
	// drawText(ctx, number);

  ctx.restore();

};

function drawBase(_ctx, number){
	_ctx.drawImage(altimeterBase,0,0);
};

altimeterInit()



///////////   
