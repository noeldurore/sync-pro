// filename: sophisticatedCode.js

/**
 * This code generates a sophisticated, elaborate and complex pattern of shapes.
 * The pattern consists of multiple layers and each layer contains various shapes such as circles, squares, and triangles.
 * The sizes, positions, and colors of the shapes are dynamically calculated based on the layer and shape index.
 * The resulting pattern is visually stunning and can be used as a background for websites or applications.
 * Author: Your Name
 */

// Define the canvas properties
const canvasWidth = 800;
const canvasHeight = 600;
const canvas = document.createElement("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Define the pattern parameters
const layerCount = 5;
const shapeCount = 10;
const baseSize = 50;

// Define an array of colors
const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6", "#34495e"];
const colorCount = colors.length;

// Function to generate a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to draw a circle
function drawCircle(x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw a square
function drawSquare(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x - size / 2, y - size / 2, size, size);
}

// Function to draw a triangle
function drawTriangle(x, y, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y - size / 2);
  ctx.lineTo(x + size / 2, y + size / 2);
  ctx.lineTo(x - size / 2, y + size / 2);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// Main function to generate the pattern
function generatePattern() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Loop through each layer
  for (let layer = 0; layer < layerCount; layer++) {
    const layerSize = baseSize * (layer + 1);

    // Loop through each shape in the layer
    for (let shape = 0; shape < shapeCount; shape++) {
      const shapeSize = layerSize * ((shape + 1) / shapeCount);
      const shapeX = random(shapeSize, canvasWidth - shapeSize);
      const shapeY = random(shapeSize, canvasHeight - shapeSize);
      const shapeColor = colors[shape % colorCount];

      // Draw the shape based on its index
      if (shape % 3 === 0) {
        drawCircle(shapeX, shapeY, shapeSize, shapeColor);
      } else if (shape % 3 === 1) {
        drawSquare(shapeX, shapeY, shapeSize, shapeColor);
      } else {
        drawTriangle(shapeX, shapeY, shapeSize, shapeColor);
      }
    }
  }
}

// Call the generatePattern function to generate the initial pattern
generatePattern();

// Add event listener to regenerate pattern on click
canvas.addEventListener("click", generatePattern);