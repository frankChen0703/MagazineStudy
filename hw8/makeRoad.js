import * as THREE from 'https://cdn.skypack.dev/three';

function makeroad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
    var plane = new THREE.Object3D();
    let points = [];
    points.push(new THREE.Vector3(x1, y1, z1), //0
        new THREE.Vector3(x2, y2, z2), //1
        new THREE.Vector3(x3, y3, z3), //2
        new THREE.Vector3(x4, y4, z4)) //3
    var geometry = new THREE.BufferGeometry().setFromPoints(points);

    let indices = [];
    indices.push(0, 1, 2, 0, 2, 3);
    geometry.setIndex(indices);

    geometry.computeBoundingSphere();
    geometry.computeVertexNormals();

    var loader = new THREE.TextureLoader();
    var Map = loader.load('https://i.imgur.com/wvL1rQB.png');
    let mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: Map
    }));
    plane.add(mesh);
    return plane;
}
export{ makeroad };