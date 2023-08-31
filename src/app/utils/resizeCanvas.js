const resizeCanvas = (canvas) => {
  // const drawXLarge = () => {
  //   canvas.width = 719;
  //   canvas.height = 862;
  // };

  const drawXLarge = () => {
    canvas.width = 582;
    canvas.height = 582;
  };

  const drawLarge = () => {
    canvas.width = 539;
    canvas.height = 647;
  };

  const drawMedium = () => {
    canvas.width = 359;
    canvas.height = 431;
  };

  const drawSmall = () => {
    canvas.width = 179;
    canvas.height = 215;
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
