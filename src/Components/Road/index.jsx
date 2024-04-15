import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useMemo } from "react";
import NewLand from "../NewLand";
import RoadSpinner from "../RoadSpinner";
import RoadLimbo from "../RoadLimbo";
import RoadSlider from "../RoadSlider";
import RoadFlipper from "../RoadFlipper";
import { boxGeometry, road1Material, glassMaterial } from "../../Data/meshData";

//Road starting platorm
const RoadStart = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh
        position={[0, 0, 0]}
        geometry={boxGeometry}
        material={road1Material}
        scale={[5, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
};
//Road ending platform
const RoadEnd = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh
        position={[0, 0.2, 0]}
        geometry={boxGeometry}
        material={road1Material}
        scale={[4.9, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
};
//Wall bounding the road
const Bounds = ({ length = 7, count = 5 }) => {
  const positionX = 40 + length * 2 + (count - 3) * 0.5;
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
        <mesh
          position={[positionX, 1.6, 2.15]}
          geometry={boxGeometry}
          material={glassMaterial}
          scale={[length * 5, 3, 0.3]}
          castShadow
        />
        <mesh
          position={[positionX, 1.6, -2.15]}
          geometry={boxGeometry}
          material={glassMaterial}
          scale={[length * 5, 3, 0.3]}
          receiveShadow
        />
        <CuboidCollider
          restitution={0.2}
          friction={1}
          args={[2.5 * length, 0.1, 2]}
          position={[positionX, 0.1, 0]}
        />
      </RigidBody>
    </>
  );
};

//Entire road consisting of RoadStart, Roadobstacles, Bounds, RoadEnd & New Land
const Road = ({
  count = 3,
  obstacleTypes = [RoadSpinner, RoadLimbo, RoadSlider, RoadFlipper],
  newLandScale = 36,
}) => {
  //Generate random obstacles based on obstacleTypes array
  const roadObstacles = useMemo(() => {
    const roadObstacles = [];
    for (let i = 0; i < count; i++) {
      const type =
        obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
      roadObstacles.push(type);
    }
    return roadObstacles;
  }, [count, obstacleTypes]);
  return (
    <>
      <RoadStart position={[40, 0.2, 0]} />
      {/* Obstacles */}
      {roadObstacles.map((Type, index) => (
        <Type key={index} position={[45 + index * 5, 0.2, 0]} />
      ))}
      <Bounds length={count + 2} count={count} />
      <RoadEnd position={[40 + (count + 1) * 5, 0, 0]} />
      {/* New land site at end of Road */}
      <NewLand
        length={count + 2}
        count={count}
        scale={[newLandScale, 0.2, newLandScale]}
      />
    </>
  );
};

export { Road };
