import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildScene, box, text } from './buildScene';
import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';

var camera, scene, renderer;
var angle = 0;
var l = false, r = true,s = false;

init();
animate();

$('#left').click(function() {
  l = true;
  r = false;
  s = false;
});
$('#right').click(function() {
  l = false;
  r = true;
  s = false;
});
$('#space').click(function() {
  l = false;
  r = false;
  s = true;
});

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(100, 200, 100);

  const controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////////////
  var woodTex = new THREE.TextureLoader().load("https://i.imgur.com/fcnpLvp.png")//"./imguer/plane");
  var mat = new THREE.MeshLambertMaterial({
    map: woodTex
  });
  var floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), mat);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 300, 0);
  directionalLight.target = floor;
  scene.add(directionalLight);


  buildScene();

}

function update() {
  if (l === true) {
    scene.remove(text);
    text = new MeshText2D("START trun counterclockwise", {
      align: textAlign.left, font: '20PX Arial',
      fillStyle: '#73BF00', antialias: true
    });
    text.position.y = 100;
    scene.add(text);
    angle -= 0.01;
  }
  else if (r === true) {
    scene.remove(text);
    text = new MeshText2D("START trun clockwise", {
      align: textAlign.right, font: '20px Arial',
      fillStyle: '#A1FFFF', antialias: true
    });
    text.position.y = 100;
    scene.add(text);
    angle += 0.01;
  }
  else if (s === true) {
    scene.remove(text);
    text = new MeshText2D("STOP", {
      align: textAlign.center, font: '30px Arial',
      fillStyle: '#FF5151', antialias: true
    });
    text.position.y = 100;
    scene.add(text);
    angle += 0;
  }
}

function animate() {

  requestAnimationFrame(animate);
  update();
  box.rotation.y = angle;
  box.position.set(25 * Math.cos(angle), 0, 25 * Math.sin(angle));

  renderer.render(scene, camera);

}

export { scene };
