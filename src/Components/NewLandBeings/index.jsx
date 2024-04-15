import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Clone } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

//Working Robots & masks on newLand
const NewLandBeings = () => {
  //LOAD MODELS
  const africanMask = useGLTF("./model/africanMask.glb");
  const funRobot1 = useGLTF("./model/funRobot1.glb");
  const funRobot3 = useGLTF("./model/funRobot3.glb");

  const robot1 = useRef();
  const robot3 = useRef();
  const mask = useRef();

  //Animating Robots & masks
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const angle = time * 0.5;
    const x = Math.cos(angle * 0.2) * 24;
    const z = Math.sin(angle * 0.4) * 23;
    const x2 = -Math.sin(angle * 1.2) * 24;
    const z2 = -Math.cos(angle * 0.7) * 24;

    //Quaternion angles Calculated from Euler
    const quartenionRotationY = new THREE.Quaternion();
    const eulerRotationY = new THREE.Euler(0, time * 0.5, 0);
    quartenionRotationY.setFromEuler(eulerRotationY);

    //Mask & Robot motions - Rotation & Position
    if (mask.current) {
      mask.current.setNextKinematicRotation(quartenionRotationY);
    }
    if (robot1.current) {
      robot1.current.setNextKinematicRotation(quartenionRotationY);
      robot1.current.setNextKinematicTranslation({
        x: x2 + 190,
        y: 2,
        z: z,
      });
    }
    if (robot3.current) {
      robot3.current.setNextKinematicRotation(quartenionRotationY);
      robot3.current.setNextKinematicTranslation({
        x: x + 190,
        y: 1.9,
        z: z2,
      });
    }
  });

  return (
    <>
      {/* African mask */}
      <RigidBody ref={mask} type="kinematicPosition" position={[195, 9.5, 0]}>
        <Clone object={africanMask.scene} scale={[12, 12, 12]} />
      </RigidBody>

      {/* ROBOTS  */}
      <RigidBody ref={robot1} type="kinematicPosition" position={[195, 1.9, 0]}>
        <Clone object={funRobot1.scene} scale={[4, 4, 4]} />
      </RigidBody>
      <RigidBody ref={robot3} type="kinematicPosition" position={[175, 2, -15]}>
        <Clone object={funRobot3.scene} scale={[4, 4, 4]} />
      </RigidBody>
    </>
  );
};
export default NewLandBeings;


useGLTF.preload("./model/africanMask.glb");
useGLTF.preload("./model/funRobot1.glb");
useGLTF.preload("./model/funRobot3.glb");
