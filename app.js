let canvas = document.getElementById("renderCanvas"); // Get the canvas element 
let engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

function createScene() {
  let scene = new BABYLON.Scene(engine);
  let topCam = new BABYLON.TargetCamera("topdown", new BABYLON.Vector3(0, 0, -2000), scene, true);
}

// createScene();

window.addEventListener("mousemove", function (evt) {
  console.log('mousemove');
});

window.addEventListener("mousedown", function (evt) {
  console.log('mousedown');
});

// window.addEventListener("click", function (evt) {
//   // console.log('click');
// });