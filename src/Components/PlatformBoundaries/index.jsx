import React from "react";
import { RigidBody } from "@react-three/rapier";
import {
  platformBoundaryPositions,
  coverTopPositions,
} from "../../Data/positions";
import { glassMaterial, boxGeometry } from "../../Data/meshData";

//Boundary walls surrounding the space
const PlatformBoundaries = () => {
  return (
    <>
      {platformBoundaryPositions.map((platform, index) => (
        <RigidBody key={index} type="fixed" position={platform.position}>
          <mesh
            scale={platform.scale}
            geometry={boxGeometry}
            material={glassMaterial}
          ></mesh>
        </RigidBody>
      ))}
      {coverTopPositions.map((cover, index) => (
        <RigidBody key={index} type="fixed" position={cover.position}>
          <mesh
            scale={cover.scale}
            geometry={boxGeometry}
            material={glassMaterial}
          ></mesh>
        </RigidBody>
      ))}
    </>
  );
};

export default PlatformBoundaries;
