import { RigidBody } from "@react-three/rapier";
import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  boxGeometry,
  roadMaterial,
  obstacleMaterial,
} from "../../Data/meshData";

//Obstacle on road moving up and down
const RoadLimbo = ({ position = [0, 0, 0] }) => {
  const obstacle = useRef();
  // const [speed] = useState(()=> (Math.random() + 0.3 ) * Math.random()<0.5 ? -1: 1 )
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(time + timeOffset) + 1.25;
    if (obstacle.current) {
      obstacle.current.setNextKinematicTranslation({
        x: position[0],
        y: position[1] + y,
        z: position[2],
      });
    }
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={roadMaterial}
        position={[0, 0, 0]}
        scale={[4.7, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.5, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[0.3, 0.3, 3.5]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

export default RoadLimbo;
