import { useTexture, Float, Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { boxGeometry } from "../../Data/meshData";
import { floatingSocialData, fixedSocialData } from "../../Data/socialData";
import { v4 as uuidv4 } from "uuid";

const SocialProps = () => {
  const linkedin = useRef();
  const instagram = useRef();
  const youtube = useRef();
  const twitter = useRef();
  const etsy = useRef();
  const redbubble = useRef();

  const occludeArray1 = [twitter, instagram, youtube, linkedin];
  const occludeArray2 = [redbubble, etsy];

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const angle = time * 0.5;
    const y = 2.7 + Math.sin(angle * 0.9) * 0.4;
    const yCos = 2.7 + Math.cos(angle * 0.9) * 0.4;
    const z = -0.5 * Math.sin(angle * 0.6);
    const zCos = -0.5 * Math.cos(angle * 0.6);

    if (redbubble.current) {
      redbubble.current.rotation.y = y;
      redbubble.current.rotation.z = z;
      redbubble.current.position.y = y;
    }

    if (etsy.current) {
      etsy.current.rotation.y = -y;
      etsy.current.rotation.z = zCos;
      etsy.current.position.y = yCos;
    }
  });

  return (
    <>
      {floatingSocialData.map((social, index) => (
        <Float key={uuidv4()} speed={0.5} floatingRange={[0.1, 0.2]}>
          <mesh
            key={uuidv4()}
            ref={occludeArray1[index]}
            geometry={boxGeometry}
            position={social.position}
            onClick={() => window.open(social.link)}
          >
            <meshBasicMaterial
              key={uuidv4()}
              map={useTexture(social.texturePath)}
            />
            <Html
              key={uuidv4()}
              position={[0, 0.55, 0]}
              wrapperClass="label"
              center
              distanceFactor={5}
              occlude={occludeArray1[index]}
            >
              {social.label}
            </Html>
          </mesh>
        </Float>
      ))}

      {fixedSocialData.map((social, index) => (
        <mesh
          key={uuidv4()}
          ref={occludeArray2[index]}
          geometry={boxGeometry}
          position={social.position}
          onClick={() => window.open(social.link)}
        >
          <meshBasicMaterial
            key={uuidv4()}
            map={useTexture(social.texturePath)}
          />
          <Html
            key={uuidv4()}
            position={[0, 0.55, 0]}
            wrapperClass="label"
            center
            distanceFactor={5}
            occlude={occludeArray2[index]}
          >
            {social.label}
          </Html>
        </mesh>
      ))}
    </>
  );
};

export default SocialProps;
