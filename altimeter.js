
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
  altimeterTens.src = "source-images/dials-10.svg";
  altimeterText.src = "source-images/dials-text.svg";
};

function drawAltimeter(ctx, number){

 // console.log("drawAltimeter called")
	ctx.save();
  ctx.translate((canvasEdgeX - 240),50);

	drawBase(ctx, number);
	drawThousands(ctx, number);
	drawText(ctx, number);
	drawHundreds(ctx, number);
	drawTens(ctx, number);

  ctx.restore();
};

function drawBase(_ctx, number){
	_ctx.drawImage(altimeterBase,0,0);
};

function drawThousands(_ctx, number) {
	console.log(number);
	_ctx.save();
	_ctx.translate(90,90);
	_ctx.rotate(to_rad(number/(10000/360)));
	_ctx.drawImage(altimeterThousandsBase,-90,-90);
	_ctx.restore();
	_ctx.drawImage(altimeterThousandsTop,0,0);
};

function drawHundreds(_ctx, number) {
	_ctx.save();
	_ctx.translate(90,90);
	_ctx.rotate(to_rad(number/(1000/360)));
	_ctx.drawImage(altimeterHundreds,-90,-90);
	_ctx.restore();
};

function drawTens(_ctx, number) {
	_ctx.save();
	_ctx.translate(90,90);
	_ctx.rotate(to_rad(number/(100/360)));
	_ctx.drawImage(altimeterTens,-90,-90);
	_ctx.restore();
};

function drawText(_ctx, number){
	_ctx.drawImage(altimeterText,0,0);
};

function altitude() {
  return to_i((canvasEdgeY - posY - landerRadius) * 3)
};


altimeterInit()

