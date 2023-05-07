// Get the canvas element and its context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define the worm object
const worm = {
  x: 10,
  y: 10,
  dx: 10,
  dy: 0,
  segments: [{x: 10, y: 10}],
  length: 3
};

// Define the food object
const food = {
  x: 50,
  y: 50
};

// Define the game loop function
function gameLoop() {
  // Update the worm's position
  worm.x += worm.dx;
  worm.y += worm.dy;
  worm.segments.unshift({x: worm.x, y: worm.y});
  if (worm.segments.length > worm.length) {
    worm.segments.pop();
  }

  // Check for collisions with the food
  if (worm.x === food.x && worm.y === food.y) {
    worm.length++;
    food.x = Math.floor(Math.random() * canvas.width);
    food.y = Math.floor(Math.random() * canvas.height);
  }

  // Check for collisions with the walls
  if (worm.x < 0 || worm.x >= canvas.width || worm.y < 0 || worm.y >= canvas.height) {
    // End the game
  }

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the worm and the food
  ctx.fillStyle = "#000000";
  worm.segments.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, 10, 10);
  });
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(food.x, food.y, 10, 10);

  // Call the game loop function again
  requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
