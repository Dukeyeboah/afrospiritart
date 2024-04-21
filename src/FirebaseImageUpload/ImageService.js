import { imageDB } from "./Config";
import { getDownloadURL, ref, listAll } from "firebase/storage";

//Async await function to get images from Fierbase Storage
export const fetchImageUrls = async () => {
  try {
    const imagesRef = ref(imageDB, "galleryImages");
    const result = await listAll(imagesRef);
    const promises = result.items.map(async (imageRef) => {
      return getDownloadURL(imageRef);
    });
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export const fetchLandscapeImageUrls = async () => {
  try {
    const imagesRef = ref(imageDB, "LandscapeImages");
    const result = await listAll(imagesRef);
    const promises = result.items.map(async (imageRef) => {
      return getDownloadURL(imageRef);
    });
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export const imageUrls = await fetchImageUrls();
export const landscapeImageUrls = await fetchLandscapeImageUrls();

// Export functions to retrieve image URLs
// export const getImageUrls = async () => {
//   return await fetchImageUrls();
// };

// export const getLandscapeImageUrls = async () => {
//   return await fetchLandscapeImageUrls();
// };

// New arrays to store the results
// Function to retrieve image URLs
// export const getImageUrls = async () => {
//   try {
//     const imageUrls = await fetchImageUrls();
//     // Add imageUrls array contents to newArray
//     //newArray = [...imageUrls]; // Using the spread operator to clone the array
//     //console.log(newArray)
//   } catch (error) {
//     console.error("Error fetching image URLs:", error);
//     const imageUrls = [];
//   }
// };

// getImageUrls();


// getLandscapeImageUrls();
// console.log(newArray)




// Function to retrieve landscape image URLs
const getLandscapeImageUrls = async () => {
  try {
    const landscapeImageUrls = await fetchLandscapeImageUrls();
  } catch (error) {
    console.error("Error fetching landscape image URLs:", error);
    const landscapeImageUrls = [];
  }
};

// Call the functions to populate the arrays


// console.log(imageUrls)

// console.log(imageUrls)

//Shuffle Arrays
function shuffleArray(imageUrlsArray) {
  // Create a copy of the original array to avoid modifying it directly
  const randomUrls = [...imageUrlsArray];
  // Loop through the array one element at a time
  for (let i = randomUrls.length - 1; i > 0; i--) {
    // Generate a random index between 0 and the current index (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the current element with the element at the random index
    [randomUrls[i], randomUrls[randomIndex]] = [
      randomUrls[randomIndex],
      randomUrls[i],
    ];
  }
  // Return the shuffled array
  return randomUrls;
}

// export const randomLandscapeImageUrls = shuffleArray(landscapeImageUrls);
// export const randomImageUrls = shuffleArray(imageUrls);

// export const fetchLandscapeImageUrls = async () => {
//   try {
//     const imagesRef = ref(imageDB, "LandscapeImages");
//     const result = await listAll(imagesRef);
//     const promises = result.items.map(async (imageRef) => {
//       return getDownloadURL(imageRef);
//     });
//     return Promise.all(promises);
//   //   // Use Promise.all to wait for all download URLs
//   //  imageUrls = await Promise.all(
//   //     result.items.map(async (imageRef) => getDownloadURL(imageRef))
//   //   );
//   //   return imageUrls;
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     return [];
//   }
// };
