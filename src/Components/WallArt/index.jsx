import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { landscapePhotos, verticalPhotos } from "../../Data/images";
import {
  landscapePhotosPositions,
  verticalPhotosPositions,
} from "../../Data/positions";

const plane = new THREE.PlaneGeometry(1.78512, 1);
const vertPlane = new THREE.PlaneGeometry(1, 1);

const WallArt = () => {
  return (
    <>
      {/* // Landscape photos */}
      {landscapePhotos.map((photo, index) => (
        <mesh
          key={index}
          geometry={plane}
          scale={3}
          position={landscapePhotosPositions[index].position}
          rotation={landscapePhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={useTexture(photo)} />
        </mesh>
      ))}
      {/* // Vertical photos */}
      {verticalPhotos.map((photo, index) => (
        <mesh
          key={index}
          geometry={vertPlane}
          scale={3}
          position={verticalPhotosPositions[index].position}
          rotation={verticalPhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={useTexture(photo)} />
        </mesh>
      ))}
    </>
  );
};

export default WallArt;
