import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';
import { scene } from './main-3';

var box, text;
function buildScene() {


   var loader = new THREE.TextureLoader();
   var Map = loader.load('https://i.imgur.com/1Wm9iUF.png');
   box = new THREE.Group();
   material = new THREE.ShadowMaterial();
   material.opacity = 0.2;
   
   scene.add(plane);
   var mat = new THREE.MeshLambertMaterial({
      map: Map
   });
   var box1 = new THREE.Mesh(new THREE.ConeGeometry(15, 20, 32), mat, material);
   var box2 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 5, 32), mat, material);
   box1.rotation.x = Math.PI;
   box1.position.set(0, 10, 0);
   box2.position.set(0, 22.5, 0);
   box.add(box1, box2);
   box.position.y = -200;
   box.receiveShadow = true;
   scene.add(box);

   text = new MeshText2D("START trun clockwise", {
      align: textAlign.right, font: '30px Arial',
      fillStyle: '#A1FFFF', antialias: true
   });
   text.position.y = 100;
   scene.add(text);
}

export { buildScene, box, text };

