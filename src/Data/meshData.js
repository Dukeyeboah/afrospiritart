import * as THREE from "three";

//Geometries
export const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
export const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 32);
export const plane = new THREE.PlaneGeometry(1.78512, 1);
export const vertPlane = new THREE.PlaneGeometry(1, 1);
export const sunGeometry = new THREE.SphereGeometry(2, 64, 64);

//Materials
export const newLandMaterial = new THREE.MeshBasicMaterial({
  color: "lightcyan",
});
export const myColor = new THREE.Color(5, 2, 2.2);
export const platformMaterial = new THREE.MeshBasicMaterial({ color: myColor });
export const placeholderTextmaterial = new THREE.MeshBasicMaterial({
  color: "crimson",
});
export const road1Material = new THREE.MeshBasicMaterial({
  color: "palegreen",
});


export const pathColor = new THREE.Color(3, 1.4, 0.2);
export const roadMaterial = new THREE.MeshBasicMaterial({ color: pathColor });
export const obstacleMaterial = new THREE.MeshBasicMaterial({
  color: "crimson",
});
export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xcccccc, // Optional: Set a faint color for the glass
  roughness: 0.1, // Adjust for desired reflectiveness (0 - smooth, 1 - rough)
  metalness: 0.0, // Glass is not metallic
  opacity: 1.0,
  transparent: true,
  transmission: 1.0,
  ior: 1.5,
  thickness: 0.1, // Adjust for material thickness
});

