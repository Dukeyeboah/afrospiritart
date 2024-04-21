import { useState, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import {
  landscapePhotosPositions,
  verticalPhotosPositions,
} from "../../Data/positions";
import {
  imageUrls,
  landscapeImageUrls,
} from "../../FirebaseImageUpload/ImageService";
import { vertPlane, plane } from "../../Data/meshData";

const WallArt = () => {
  const [artworks, setArtworks] = useState([]);
  const [landscapeArtworks, setLandscapeArtworks] = useState([]);
  const textures = useTexture(artworks);
  const landscapetextures = useTexture(landscapeArtworks);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        setArtworks(imageUrls);
        setLandscapeArtworks(landscapeImageUrls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <>
      {/* Vertical photos (Conditional rendering) */}
      {artworks.length > 0 && (
        <>
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
        </>
      )}
      {/* Landscape photos {Conditional Rendering}*/}
      {landscapeArtworks.length > 0 && (
        <>
          {landscapeArtworks.map((photo, index) => (
            <mesh
              key={index}
              geometry={plane}
              scale={3}
              position={landscapePhotosPositions[index].position}
              rotation={landscapePhotosPositions[index].rotation}
            >
              <meshBasicMaterial map={landscapetextures[index]} />
            </mesh>
          ))}
        </>
      )}
    </>
  );
};

export default WallArt;

// useEffect(() => {
//   setArtworks(imageUrls)
//   setLandscapeArtworks(landscapeImageUrls)

//   return () => {
//     setArtworks([]);
//   };
// }, []);

// const plane = new THREE.PlaneGeometry(1.78512, 1);
// const vertPlane = new THREE.PlaneGeometry(1, 1);

// const WallArt = ({}) => {
//   // const [imageUrls, setImageUrls] = useState([]);

//   // useEffect(() => {
//   //   const fetchUrls = async () => {
//   //     try {
//   //       const urls = await getImageUrls();
//   //       setImageUrls(urls);
//   //     } catch (error) {
//   //       console.error("Error fetching image URLs:", error);
//   //     }
//   //   };

//   //   fetchUrls();
//   // }, []); // Run once when the component mounts

//   return (
//     <>
//       {/* // Vertical shaped photos */}
//       {/* {imageUrls.map((photo, index) => (
//         <mesh
//           key={index}
//           geometry={vertPlane}
//           scale={3}
//           position={verticalPhotosPositions[index].position}
//           rotation={verticalPhotosPositions[index].rotation}
//         >
//           <meshBasicMaterial map={useTexture(photo)} />
//         </mesh>
//       ))} */}
//       {/* {randomImageUrls.map((photo, index) => (
//         <mesh
//           key={index}
//           geometry={vertPlane}
//           scale={3}
//           position={verticalPhotosPositions[index].position}
//           rotation={verticalPhotosPositions[index].rotation}
//         >
//           <meshBasicMaterial map={useTexture(photo)} />
//         </mesh>
//       ))} */}
//       {/* // Landscape photos */}
//       {/* {randomLandscapeImageUrls.map((photo, index) => (
//         <mesh
//           key={index}
//           geometry={plane}
//           scale={3}
//           position={landscapePhotosPositions[index].position}
//           rotation={landscapePhotosPositions[index].rotation}
//         >
//           <meshBasicMaterial map={useTexture(photo)} />
//         </mesh>
//       ))} */}
//     </>
//   );
// };

// export default WallArt;
