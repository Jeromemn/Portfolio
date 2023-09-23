const resizeCanvas = (canvas) => {

  const drawXLarge = () => {
    canvas.width = 505;
    canvas.height = 505;
    canvas.xOffset = 48;
    canvas.yOffset = 0;
    canvas.size = 1.5;

  };

  const drawLarge = () => {
    canvas.width = 305;
    canvas.height = 305;
    canvas.xOffset = 28;
    canvas.yOffset = 0;
    canvas.size = 1.5;

  };

  const drawMedium = () => {
    canvas.width = 260;
    canvas.height = 260;
    canvas.xOffset = 25;
    canvas.yOffset = -5;
    canvas.size = 1;
  };

  const drawSmall = () => {
    canvas.width = 205;
    canvas.height = 205;
    canvas.xOffset = 20;
    canvas.yOffset = 0;
    canvas.size = .5;
  };

  if (window.innerWidth < 600) {
    drawSmall();
  }
  else if (window.innerWidth < 900) {
    drawMedium();
  }
  else if (window.innerWidth > 900 && window.innerWidth < 1050) {
    drawLarge();

  }
  else if (window.innerWidth > 1200) {
    drawXLarge();
  }
}

export default resizeCanvas;
