import {
  landscapePhotosPositions,
  verticalPhotosPositions,
} from "../../Data/positions";
import { vertPlane, plane } from "../../Data/meshData";

const WallArt = ({
  artworks,
  landscapeArtworks,
  textures,
  landscapeTextures,
}) => {
  return (
    <>
      {/* Vertical photos (Conditional rendering) */}
      {artworks.map((_, index) => (
        <mesh
          key={index}
          geometry={vertPlane}
          scale={3}
          position={verticalPhotosPositions[index].position}
          rotation={verticalPhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={textures[index]} />
        </mesh>
      ))}

      {/* Landscape photos {Conditional Rendering}*/}
      {landscapeArtworks.map((photo, index) => (
        <mesh
          key={index}
          geometry={plane}
          scale={3}
          position={landscapePhotosPositions[index].position}
          rotation={landscapePhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={landscapeTextures[index]} />
        </mesh>
      ))}
    </>
  );
};

export default WallArt;
