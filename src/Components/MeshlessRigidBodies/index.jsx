import { RigidBody, CuboidCollider } from "@react-three/rapier";
//CREATES MESHLESS RIGID BODIES BASED ON SIZE & POSITION PROMPT
const MeshlessRigidBodies = ({
  size = [3.01, 2, 2],
  positions = [
    [5, 2, 3.1],
    [5, 2, -3.1],
    [-5, 2, -3.1],
    [-5, 2, 3.1],
  ],
}) => {
  return (
    <>
      {positions.map((position) => (
        <RigidBody key={position.join("")} type="fixed">
          <CuboidCollider args={size} position={position} />
        </RigidBody>
      ))}
    </>
  );
};
export default MeshlessRigidBodies;
