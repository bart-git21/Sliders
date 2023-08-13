const arrow_to_left = document.querySelector(".arrow_to_left");
const arrow_to_right = document.querySelector(".arrow_to_right");
const wrap = document.querySelector(".wrap");

function checkAndChangeDistance() {
  let distance = 0;
  return function (x) {
    distance += x;
    (distance === 310 || wrap.clientWidth + distance <= 10) && (distance = 0);
    return distance;
  };
}
const getDistance = checkAndChangeDistance();

function toMove(distance) {
  wrap.style.transform = `translateX(${distance}px)`;
}

// game logic
function moveSlider(x) {
  const distance = getDistance(x);
  toMove(distance);
}
arrow_to_right.addEventListener("click", () => {
  moveSlider(-310);
});
arrow_to_left.addEventListener("click", () => {
  moveSlider(310);
});
