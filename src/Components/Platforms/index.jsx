import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { platformMaterial, boxGeometry } from "../../Data/meshData";

const Platforms = () => {
  const platform = useRef();
  const platform2 = useRef();

  //ANIMATE
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const angle = time * 0.5;
    const y = 2 + Math.sin(angle) * 1.5;
    const yCos = 2 + Math.cos(angle) * 1.5;
    const z = 2 * Math.sin(angle) * 1;

    //Quaternion angles Calculated from Euler
    const quartenionRotationY = new THREE.Quaternion();
    const eulerRotationY = new THREE.Euler(0, time * 0.5, 0);
    quartenionRotationY.setFromEuler(eulerRotationY);

    const negQuartenionRotationY = new THREE.Quaternion();
    const negEulerRotationY = new THREE.Euler(0, time * -0.5, 0);
    negQuartenionRotationY.setFromEuler(negEulerRotationY);

    //Platform motion
    if (platform.current) {
      platform.current.setNextKinematicTranslation({ x: 0, y: y, z: 13.5 - z });
      platform.current.setNextKinematicRotation(negQuartenionRotationY);
    }
    if (platform2.current) {
      platform2.current.setNextKinematicTranslation({
        x: 0,
        y: yCos,
        z: -13.5 + z,
      });
      platform2.current.setNextKinematicRotation(quartenionRotationY);
    }
  });

  return (
    <>
      {/* PLATFORMS */}
      <RigidBody ref={platform} type="kinematicPosition">
        <mesh
          scale={[4, 0.3, 4]}
          geometry={boxGeometry}
          material={platformMaterial}
        />
      </RigidBody>
      <RigidBody ref={platform2} type="kinematicPosition">
        <mesh
          scale={[4, 0.3, 4]}
          geometry={boxGeometry}
          material={platformMaterial}
        />
      </RigidBody>
    </>
  );
};
export default Platforms;
