import { useGLTF, useTexture, Html, Clone } from "@react-three/drei";
import { useRef } from "react";
import WallArt from "../WallArt";
import SocialProps from "../SocialProps";
import { RigidBody } from "@react-three/rapier";
import Platforms from "../Platforms";
import { glassMaterial, boxGeometry, plane } from "../../Data/meshData";

const Room = () => {
  //REFS
  const signpostBack = useRef();
  const roomRef = useRef();
  const signScreenRef = useRef();

  //Models
  const shoppingCartModel = useGLTF("./model/shoppingCart.glb");
  const signScreen = useGLTF("./model/signScreen.glb");
  const { nodes } = useGLTF("./model/nsaaSpaceMerged.glb"); //import model
  const bakedTexture = useTexture("./model/finalBake.jpg"); //model baked texture
  bakedTexture.flipY = false;

  const occludeArray = [roomRef, signpostBack];

  

  return (
    <>
      {/* ROOM_ACTUAL MODEL */}
      <mesh
        receiveShadow
        ref={roomRef}
        geometry={nodes.merged.geometry}
        position={nodes.merged.position}
      >
        <meshBasicMaterial
          map={bakedTexture}
          //map-flipY = {false}
        />
      </mesh>
      {/* ROUND WINDOWS */}
      <mesh
        geometry={nodes.circleWindows.geometry}
        position={nodes.circleWindows.position}
        material={glassMaterial}
      />
      <WallArt />

      {/* SIGNPOSTS */}
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, -Math.PI * 0.25, 0]}
        position={[24, 0, -24]}
      />
      {/* SHOPPING CART*/}
      <RigidBody
        type="fixed"
        colliders="cuboid"
        position={[-32, 0, -32]}
        rotation={[0, Math.PI * 0.75, 0]}
      >
        <primitive object={shoppingCartModel.scene} scale={[4.7, 3.8, 6.3]} />
      </RigidBody>
      {/* SCREEN TO DISPLAY SITE */}
      <RigidBody
        colliders="cuboid"
        type="fixed"
        rotation={[0, -Math.PI * 0.25, 0]}
        position={[33, 4.2, -34]}
      >
        <Clone
          ref={signScreenRef}
          object={signScreen.scene}
          scale={[2, 2, 1.2]}
        >
          <Html
            transform
            wrapperClass="webspace1"
            distanceFactor={1.3}
            position={[0, 3.8, 0.2]}
            scale={[2.01, 2.01, 2.01]}
            occlude={occludeArray}
          >
            <iframe src="https://dukesportfolio.vercel.app/" />
          </Html>
          <mesh
            ref={signpostBack}
            geometry={plane}
            scale={6.9}
            position={[0.0, 4, -0.2]}
            rotation={[0, -Math.PI, 0]}
          >
            <meshBasicMaterial color="silver" />
          </mesh>
          {/* signpost stand */}
          <mesh
            geometry={boxGeometry}
            scale={[1, 2.4, 0.3]}
            position={[0, -1, 0]}
          >
            <meshStandardMaterial color="silver" />
          </mesh>
        </Clone>
      </RigidBody>
      <SocialProps />
      <Platforms />
    </>
  );
};

export default Room;

useGLTF.preload("./model/signScreen.glb");
useGLTF.preload("./model/shoppingCart.glb");
useGLTF.preload("./model/nsaaSpaceMerged.glb");
