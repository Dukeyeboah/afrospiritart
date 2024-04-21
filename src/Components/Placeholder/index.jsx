import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useState, useEffect } from "react";
import { Center, useGLTF, useTexture } from "@react-three/drei";
import { placeholderTextmaterial, plane } from "../../Data/meshData";

//Placeholder object whilst site loads
const Placeholder = (props) => {
  const { nodes } = useGLTF("./model/nsaaSpaceMerged.glb"); //import model
  const bakedTexture = useTexture("./model/finalBake.jpg"); //model baked texture
  const placehoderTexture = useTexture("./images/loadingImage.jpg");
  const [isSuspenseActive, setIsSuspenseActive] = useState(true);

  useEffect(() => {
    return () => {
      setIsSuspenseActive(true); // Reset state on unmount
    };
  }, []);

  return (
    <>
      {isSuspenseActive && (
        <>
          <Center>
            <mesh geometry={plane} scale={16}>
              <meshBasicMaterial map={placehoderTexture} />
            </mesh>
            <Text
              font="./fonts/bangers-v20-latin-regular.woff"
              fontSize={1}
              color="salmon"
              position={[0, 3, 3]}
              textAlign="center"
              material={placeholderTextmaterial}
            >
              Loading...
            </Text>
          </Center>
        </>
      )}
    </>
  );
};
export default Placeholder;

useGLTF.preload("./model/nsaaSpaceMerged.glb");

// {/* <mesh
//   receiveShadow
//   geometry={nodes.merged.geometry}
//   position={nodes.merged.position}
//   scale={[0.3, 0.3, 0.3]}
//   rotation={[Math.PI * 0.4, 0, 0]}
// >
//   <meshBasicMaterial map={bakedTexture} map-flipY={false} />
// </mesh> */}
