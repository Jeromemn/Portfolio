const resizeCanvas = (canvas) => {
  // const drawXLarge = () => {
  //   canvas.width = 719;
  //   canvas.height = 862;
  // };

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
    canvas.width = 359;
    canvas.height = 431;
    canvas.xOffset = 50;
    canvas.yOffset = 0;
    canvas.size = 2;
  };

  const drawSmall = () => {
    canvas.width = 250;
    canvas.height = 250;
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
  else if (window.innerWidth < 1050) {
    drawLarge();
  }
  else if (window.innerWidth > 1200) {
    drawXLarge();
  }
}

export default resizeCanvas;
