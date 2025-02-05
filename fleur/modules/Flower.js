import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

class Flower {
  constructor() {
    this.canvas = document.querySelector(".js-canvas");
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.flowerSize = 50;

    this.init();
  }

  init() {
    // Création de la scène
    this.createScene();
    this.createCamera();
    this.createRender();
    this.createStem();
    this.createPistil();
    this.createPetals();
    this.createOrbitControls();
    this.animate();
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("skyblue");
  }

  createCamera() {
    const aspectRatio = this.canvasWidth / this.canvasHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;
  }

  createRender() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.canvas.appendChild(this.renderer.domElement);
  }

  createStem() {
    //tige
    const geometry = new THREE.CylinderGeometry(1, 1, this.flowerSize, 32);
    const color = new THREE.Color("green");
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cylinder = new THREE.Mesh(geometry, material);
    this.scene.add(cylinder);
  }

  createPistil() {
    const geometry = new THREE.SphereGeometry(3, 32, 16);
    const color = new THREE.Color("yellow");
    const material = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = this.flowerSize / 2;
    this.scene.add(sphere);
  }

  createPetals() {
    const geometry = new THREE.TorusGeometry(6, 1, 16, 100);
    const color = new THREE.Color("red");
    const material = new THREE.MeshBasicMaterial({ color: color });
    const positionX = [-5, 0, 5, 0];
    const positionZ = [0, -5, 0, 5];
    const rotationY = [-30, 0, 30, 0];
    const rotationX = [90, 120, 90, 60];
    for (let i = 0; i < 4; i++) {
      const torus = new THREE.Mesh(geometry, material);
      torus.position.y = this.flowerSize / 2;
      torus.position.x = positionX[i];
      torus.position.z = positionZ[i];
      torus.rotation.y = THREE.MathUtils.degToRad(rotationY[i]);
      torus.rotation.x = THREE.MathUtils.degToRad(rotationX[i]);
      this.scene.add(torus);
    }
  }
  createOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }
}

export { Flower };
