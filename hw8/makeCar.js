import * as THREE from 'https://cdn.skypack.dev/three';

function makecar() {
    var car = new THREE.Group();
    var normalMat = new THREE.MeshNormalMaterial();
    var loader = new THREE.TextureLoader();
    var Map = loader.load('https://i.imgur.com/zdEuNn6.png');
    let mesh = new THREE.MeshBasicMaterial({
        map: Map
    });
    var Map2 = loader.load('https://i.imgur.com/dJQHzao.png');
    let mesh2 = new THREE.MeshBasicMaterial({
        map: Map2
    });
    var Map3 = loader.load('https://i.imgur.com/Rv2I26n.png');
    let mesh3 = new THREE.MeshBasicMaterial({
        map: Map3
    });
    var Map4 = loader.load('https://i.imgur.com/Rve1SyV.png');
    let mesh4 = new THREE.MeshBasicMaterial({
        map: Map4
    });
    var wheel1 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 20), mesh);
    var wheel2 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 20), mesh);
    var wheel3 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 20), mesh);
    var wheel4 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 2, 20), mesh);
    var body1 = new THREE.Mesh(new THREE.BoxGeometry(30, 10, 20), mesh2);
    var body2 = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), mesh4);
    var light1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 20), mesh3);
    var light2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 20), mesh3);
    wheel1.rotation.x = Math.PI / 2;
    wheel2.rotation.x = Math.PI / 2;
    wheel3.rotation.x = Math.PI / 2;
    wheel4.rotation.x = Math.PI / 2;
    light1.rotation.z = Math.PI / 2;
    light2.rotation.z = Math.PI / 2;
    light1.rotation.x = Math.PI / 2;
    light2.rotation.x = Math.PI / 2;
    body1.position.y = 10;
    body2.position.y = 20;
    wheel1.position.set(10, 5, 11);
    wheel2.position.set(-10, 5, 11);
    wheel3.position.set(-10, 5, -11);
    wheel4.position.set(10, 5, -11);
    light1.position.set(16, 10, 5);
    light2.position.set(16, 10, -5);
    car.add(body1, body2, wheel1, wheel2, wheel3, wheel4, light1, light2);
    return car;
}
export{ makecar };