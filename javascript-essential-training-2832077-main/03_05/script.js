/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const main = document.querySelector("h2");

main.innerHTML = `${backpack.strapLength.left}`;

console.dir(backpack.color)

const helloWorld = document.querySelector("h1");

console.dir(helloWorld)

helloWorld.onmouseleave = function() {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
}
