const player = document.getElementById('player');
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
let isJumping = false;
let isMovingLeft = false;
let isMovingRight = false;
let playerPosition = 0;

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp' && !isJumping) {
    isJumping = true;
    jump();
  } else if (event.code === 'ArrowLeft') {
    isMovingLeft = true;
  } else if (event.code === 'ArrowRight') {
    isMovingRight = true;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft') {
    isMovingLeft = false;
  } else if (event.code === 'ArrowRight') {
    isMovingRight = false;
  }
});

function jump() {
  let position = 0;
  const jumpInterval = setInterval(() => {
    if (position === 100) {
      clearInterval(jumpInterval);
      const fallInterval = setInterval(() => {
        if (position === 0) {
          clearInterval(fallInterval);
          isJumping = false;
        }
        position -= 5;
        player.style.bottom = position + 'px';
      }, 20);
    }
    position += 5;
    player.style.bottom = position + 'px';
  }, 20);
}

function move() {
  if (isMovingLeft && playerPosition > 0) {
    playerPosition -= 5;
    player.style.left = playerPosition + 'px';
  } else if (isMovingRight && playerPosition < 550) {
    playerPosition += 5;
    player.style.left = playerPosition + 'px';
  }
}

setInterval(move, 20);
