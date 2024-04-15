import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useTexture, useGLTF, Clone } from "@react-three/drei";
import NewLandBeings from "../NewLandBeings";
import { cylinderGeometry, plane, newLandMaterial } from "../../Data/meshData";
import { coneInfo } from "../../Data/positions";

//NewLand Component
const NewLand = ({ length = 3, count = 5, scale = [6, 0.2, 6] }) => {
  //Model & Texture Imports
  const cone = useGLTF("./model/cone.glb");
  const construction = useTexture("./images/underConstruction.jpg");

  const radius = scale[0];
  const signRef = useRef();

  //Position newLand (being constructed) based on road distance
  const boundsPositionX = 40 + length * 2 + (count - 3) * 0.5; //road wall x-position
  const positionX =
    boundsPositionX +
    radius * 3 -
    (radius > 6 ? (radius - 6) * 2 : 0) +
    count +
    0.5 +
    (count > 5 ? (count - 5) * 1.5 : 0);

  //Animate "ongoing construction" sign
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const angle = time * 0.5;
    const y = -Math.PI * 0.5 + Math.sin(angle * 0.5) * 2.75;
    if (signRef) {
      signRef.current.position.y = y + 13;
    }
  });

  return (
    <>
      <RigidBody type="fixed">
        <mesh
          position={[positionX, 0, 0]}
          geometry={cylinderGeometry}
          material={newLandMaterial}
          scale={scale}
          receiveShadow
        />
      </RigidBody>
      {/* Site-Construction sign */}
      <mesh
        ref={signRef}
        geometry={plane}
        scale={8}
        position={[positionX - 20, 1, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={construction} />
      </mesh>
      {/* CONES*/}
      {coneInfo.map((pos, index) => (
        <RigidBody
          key={index}
          position={pos.position}
          rotation={pos.rotation}
          type="fixed"
        >
          <Clone object={cone.scene} scale={[4, 4, 4]} />
        </RigidBody>
      ))}
      {/* Animated Robots & mask */}
      <NewLandBeings />
    </>
  );
};

export default NewLand;
useGLTF.preload("./model/cone.glb");
