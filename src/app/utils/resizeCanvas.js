const resizeCanvas = (canvas) => {
  const drawXLarge = () => {
    canvas.width = 400;
    canvas.height = 403;
    canvas.xOffset = 30;
    canvas.yOffset = 0;
    canvas.size = 1;
  };

  const drawLarge = () => {
    canvas.width = 350;
    canvas.height = 350;
    canvas.xOffset = 30;
    canvas.yOffset = 0;
    canvas.size = 1;
  };

  const drawMedium = () => {
    canvas.width = 281;
    canvas.height = 281;
    canvas.xOffset = 25;
    canvas.yOffset = 0;
    canvas.size = 0.5;
  };

  const drawSmall = () => {
    canvas.width = 200;
    canvas.height = 200;
    canvas.xOffset = 15;
    canvas.yOffset = -5;
    canvas.size = 0.25;
  };

  if (window.innerWidth < 600) {
    drawSmall();
  } else if (window.innerWidth < 900) {
    drawMedium();
  } else if (window.innerWidth > 900 && window.innerWidth < 1050) {
    drawLarge();
  } else if (window.innerWidth > 1200) {
    drawXLarge();
  }
};

export default resizeCanvas;
