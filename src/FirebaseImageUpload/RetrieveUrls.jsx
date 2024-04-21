// import { useEffect, useState } from "react";
// import { fetchImageUrls, getImageUrls } from "./ImageService";
// import { glassMaterial, vertPlane } from "../Data/meshData";
// import { verticalPhotosPositions } from "../Data/positions";

// const RetrieveUrls = () => {
//   const [fetchedImages, setFetchedImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imageUrls = await fetchImageUrls();
//         setFetchedImages(imageUrls); // Update state with fetched URLs
//       } catch (error) {
//         console.error("Error fetching image URLs:", error);
//         // Handle errors here if needed
//       }
//     };
//     fetchImages();
//   }, []);
//   console.log(fetchedImages);

//   return (
//     <>
//       {fetchedImages.map((photo, index) => (
//         <mesh
//           key={index}
//           geometry={vertPlane}
//           scale={3}
//           position={verticalPhotosPositions[index].position}
//           rotation={verticalPhotosPositions[index].rotation}
//           matrial={glassMaterial}
//         >
//           {/* <meshBasicMaterial map={useTexture(photo)} /> */}
//         </mesh>
//       ))}
//     </>
//   );
// };

// export default RetrieveUrls;
