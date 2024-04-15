import { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import sunVertexShader from "../../shaders/sun/vertex.glsl";
import sunFragmentShader from "../../shaders/sun/fragment.glsl";
import { sunGeometry } from "../../Data/meshData";

//we get this from drei this will create the material - a class we can instantiate
const SunMaterial = shaderMaterial(
  {
    uTime: 0,
    uBigWavesElevation: 0.03,
    uBigWavesFrequency: new THREE.Vector3(5, 5, 5),
    uBigWavesSpeed: 2.222,
    //Small waves
    uSmallWavesElevation: 0.15,
    uSmallWavesFrequency: 9.0,
    uSmallWavesSpeed: 0.2,
    uSmallWavesIterations: 2.0,
    //ColorStuff
    uDepthColor: new THREE.Color("#004f80"),
    uSurfaceColor: new THREE.Color("#6ac3fb"),
    uColorOffset: 0.08, // to offset it
    uColorMultiplier: 5.7, //to multiply it
  },
  sunVertexShader,
  sunFragmentShader
);

extend({ SunMaterial: SunMaterial });

const Sun = ({ ref }) => {
  const sunMaterialRef = useRef();
  const sun = useRef();
  const ring = useRef();
  const ringVert = useRef();

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    sunMaterialRef.current.uTime += delta;
    0.5;
    ring.current.rotation.y = 0.2 * Math.sin(elapsedTime * 1.5);
    ring.current.rotation.z = 0.2 * Math.cos(elapsedTime * 1.5);

    ringVert.current.rotation.y = 0.2 * Math.sin(elapsedTime * 1.5);
    ringVert.current.rotation.x = 0.2 * Math.cos(elapsedTime * 1.5);
  });

  return (
    <>
      <mesh ref={sun} scale={[0.22, 0.22, 0.22]} geometry={sunGeometry}>
        {/* can use this tag multiple times, even put it in a diff file */}
        <sunMaterial ref={sunMaterialRef} />
      </mesh>
      {/* Rings Around Sun */}
      <mesh
        ref={ring}
        position={[-0.1, -0.1, -0.1]}
        rotation={[Math.PI * 0.5, 0, 0]}
      >
        <torusGeometry args={[0.76, 0.04, 16, 32]} />
        <meshStandardMaterial color={[0.6, 2.3, 3.0]} />
      </mesh>
      <mesh
        ref={ringVert}
        position={[-0.1, -0.1, -0.1]}
        rotation={[0, 0, Math.PI * 0.5]}
      >
        <torusGeometry args={[0.66, 0.04, 16, 32]} />
        <meshStandardMaterial color={[7.0, 1.1, 0.6]} />
      </mesh>
    </>
  );
};

export default Sun;
