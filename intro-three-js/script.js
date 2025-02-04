import * as THREE from "three";

//Créer une div pour y ajouter notre 3D
const canvas = document.querySelector(".js-canvas");
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

//Créer notre espace de dessin 3D
const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

//Créer une camera, notre point de vue
const aspectRatio = canvasWidth / canvasHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;

// Créer un render pour afficher la scene du opoint de vue de notre camera
const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvasWidth, canvasHeight);
canvas.appendChild(renderer.domElement);

// ajouter une forme
const geometry = new THREE.BoxGeometry(1, 1, 1);
const cubeColor = new THREE.Color("red");
const material = new THREE.MeshBasicMaterial({ color: cubeColor });
const cube = new THREE.Mesh(geometry, material);
cube.rotation.x = Math.PI * 0.25;
cube.rotation.y = Math.PI * 0.25;
scene.add(cube);

//Fait le rendu de la scene : montrer le point de vue de la camera dans la scene
animate();

//faire un rendu continu
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
