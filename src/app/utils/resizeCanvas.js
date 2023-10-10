const resizeCanvas = (canvas) => {
  const drawXLarge = () => {
    canvas.width = 450;
    canvas.height = 450;
    canvas.xOffset = 50;
    canvas.yOffset = 0;
    canvas.size = 2;
  };

  const drawLarge = () => {
    canvas.width = 350;
    canvas.height = 400;
    canvas.xOffset = 30;
    canvas.yOffset = 0;
    canvas.size = 1;
  };

  const drawMedium = () => {
    canvas.width = 280;
    canvas.height = 280;
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
