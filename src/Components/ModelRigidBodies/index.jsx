import MeshlessRigidBodies from "../MeshlessRigidBodies";
import { rigidBodyPositions } from "../../Data/positions";
import PlatformBoundaries from "../PlatformBoundaries";

const ModelRigidBodies = (props) => {
  return (
    <>
      {/* Meshless RigidBodies for the Room Model cubicles */}
      {rigidBodyPositions.map((body) => (
        <MeshlessRigidBodies
          key={body.positions.join("")} // Ensures a unique key for each set of positions
          size={body.size}
          positions={body.positions}
        />
      ))}
      {/* BOUNDARY WALLS */}
      <PlatformBoundaries />
    </>
  );
};
export default ModelRigidBodies;
