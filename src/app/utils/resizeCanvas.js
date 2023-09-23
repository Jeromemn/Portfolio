const resizeCanvas = (canvas) => {

  const drawXLarge = () => {
    canvas.width = 582;
    canvas.height = 582;
    canvas.xOffset = 50;
    canvas.yOffset = 0;
    canvas.size = 2;

  };

  const drawLarge = () => {
    canvas.width = 539;
    canvas.height = 647;
    canvas.xOffset = 50;
    canvas.yOffset = 0;
    canvas.size = 2;

  };

  const drawMedium = () => {
    canvas.width = 300;
    canvas.height = 300;
    canvas.xOffset = 25;
    canvas.yOffset = 0;
    canvas.size = 1;
  };

  const drawSmall = () => {
    canvas.width = 200;
    canvas.height = 200;
    canvas.xOffset = 15;
    canvas.yOffset = -5;
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
