
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
  ctx.translate(50,50);

	drawBase(ctx, number);

	drawThousands(ctx, altitude());
	// drawHundreds(ctx, number);
	// drawTens(ctx, number);
	drawText(ctx, number);

  ctx.restore();

};

function drawBase(_ctx, number){
	_ctx.drawImage(altimeterBase,0,0);

};


function drawThousands(_ctx, number) {
	_ctx.save();
	_ctx.translate(95,90);
	_ctx.rotate(to_rad(pitch));
	_ctx.drawImage(altimeterThousandsBase,-95,-90)
	_ctx.restore();
};


function drawText(_ctx, number){
	_ctx.drawImage(altimeterText,0,0);
};


altimeterInit()



///////////   
