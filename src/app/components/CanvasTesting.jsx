"use client";
import React, { useRef, useEffect } from "react";
import resizeCanvas from "../utils/resizeCanvas";

const fitImageToCanvas = (image,canvas) => {
  const canvasContext = canvas.getContext("2d");
  const ratio = image.width / image.height;
  let newWidth = canvas.width;
  let newHeight = newWidth / ratio;
  if (newHeight < canvas.height) {
    newHeight = canvas.height;
    newWidth = newHeight * ratio;
  }
  const xOffset = newWidth > canvas.width ? (canvas.width - newWidth) / 2 : 0;
  const yOffset =
    newHeight > canvas.height ? (canvas.height - newHeight) / 2 : 0;
  canvasContext.drawImage(image, xOffset, yOffset, newWidth, newHeight);
};

const CanvasTesting = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true});
    if (ctx.getContextAttributes) {
      const attributes = ctx.getContextAttributes();
      console.log(JSON.stringify(attributes));
    } else {
      console.log("CanvasRenderingContext2D.getContextAttributes() is not supported");
    }
    // canvas.width = 719;
    // canvas.height = 862;
    // canvas.style.width = '100%';
    // canvas.style.height = '100%';
    const myImage = new Image(582, 582);
    myImage.src = "smallCropped.jpg";
    myImage.onload = () => {
      resizeCanvas(canvas);
      fitImageToCanvas(myImage, canvas);
      ctx.imageSmoothQuality = "high";
      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
      // ctx.drawImage(myImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
      const scannedImage = ctx.getImageData(50, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let particlesArray = [];
      const numberOfParticles = 7000;
      let mappedImage = [];
      for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
          const red = scannedImage.data[y * 4 * scannedImage.width + x * 4];
          const green =
            scannedImage.data[y * 4 * scannedImage.width + (x * 4 + 1)];
          const blue =
            scannedImage.data[y * 4 * scannedImage.width + (x * 4 + 2)];
          const brightness = calculateRelativeBrightness(red, green, blue);
          const cell = [brightness, `rgb(${red}, ${green}, ${blue})`];
          row.push(cell);
        }
        mappedImage.push(row);
      }

      function calculateRelativeBrightness(red, green, blue) {
        return (
          Math.sqrt(
            red * red * 0.05 + green * green * 0.587 + blue * blue * 0.814
          ) / 100
        );
      }

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.speed = 0;
          this.velocity = Math.random() * 3.5;
          this.size = Math.random() * 2 + 1;
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
        }
        update() {
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
          this.speed = mappedImage[this.position1][this.position2][0];

          let movement = 2.2 - this.speed + this.velocity;
          this.y += movement;
          if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
        }
        draw() {
          ctx.beginPath(canvas.height + 50);
          ctx.fillStyle = mappedImage[this.position1][this.position2][1];
          ctx.arc(this.x, this.y - 3, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      function init() {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      }
      init();
      function animate() {
        ctx.globalAlpha = 0.02;
        ctx.fillStyle = "rgba(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.01;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.2;
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }
      animate();

      // ctx.beginPath();
      // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      // ctx.clip();
    };
  }, []);
  return (
    <canvas
    id="testing"
      ref={canvasRef}
      {...props}
      style={{
        // position: "absolute",
        flexShrink: "0",
        position: 'relative',
        // borderRadius: "50%",
        // bottom: "72px",
        // right: "0px",
      }}
    />
  );
};

export default CanvasTesting;
