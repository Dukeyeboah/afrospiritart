// import { Perf } from "r3f-perf";
import { useRef, useEffect, Suspense } from "react";
import {
  Sparkles,
  Stars,
  Environment,
  Lightformer,
  KeyboardControls,
  //OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Ecctrl from "ecctrl";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Sun from "../Sun";
import Room from "../Room";
import { Road } from "../Road";
import Placeholder from "../Placeholder";
import ModelRigidBodies from "../ModelRigidBodies";
import useMyGame from "../../stores/useMyGame";
import { keyboardMap } from "../../Data/positions";

const Experience = () => {
  const blocksCount = useMyGame((state) => {
    return state.blocksCount;
  });
  const restart = useMyGame((state) => state.restart);
  const start = useMyGame((state) => state.start);

  const playerRef = useRef();
  useFrame(() => {
    if (playerRef.current) {
      const playerPosition = playerRef.current.translation();
      if (playerPosition.y < -4) {
        restart();
      }
    }
  });

  useEffect(() => {
    const unsubscribeReset = useMyGame.subscribe(
      (state) => state.phase,
      (phase) => {
        if (phase === "ready") reset();
      }
    );
    return () => {
      unsubscribeReset();
    };
  }, []);
  //reset ball position when it falls below space
  const reset = () => {
    playerRef.current.setTranslation({ x: 0, y: 1.2929608821868896, z: 0 });
    playerRef.current.setLinvel({ x: 0, y: 0, z: 0 });
    playerRef.current.setAngvel({ x: 0, y: 0, z: 0 });
    start(); //set phase to playing
  };

  return (
    <>
      <color args={["#030202"]} attach="background" />
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="sunset" resolution={32}>
        <Lightformer
          position-z={-5}
          scale={10}
          color="lightcyan"
          intensity={4}
          form="ring"
        />
      </Environment>
      <Physics debug={false}>
        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
          <KeyboardControls map={keyboardMap}>
            <Ecctrl
              ref={playerRef}
              floatHeight={0.5}
              maxVelLimit={5}
              jumpVel={4}
              capsuleRadius={1}
              capsuleHalfHeight={0.01}
            >
              <Sun />
            </Ecctrl>
          </KeyboardControls>
          <Room />
          <ModelRigidBodies />
          <Road count={blocksCount} />
          <Sparkles
            size={9}
            scale={[60, 8, 60]}
            position-y={15}
            speed={0.8}
            count={100}
            noise={[2, 4, 5]}
            color={"#91deff"}
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <EffectComposer>
            <Bloom mipmapBlur intensity={0.7} luminanceThreshold={1.1} />
          </EffectComposer>
        </Suspense>
      </Physics>
    </>
  );
};

export default Experience;