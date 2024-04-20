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

export const randomLandscapeImageUrls = shuffleArray(landscapeImageUrls);
export const randomImageUrls = shuffleArray(imageUrls)

//Shuffle Arrays
function shuffleArray(imageUrlsArray) {
  // Create a copy of the original array to avoid modifying it directly
  const randomUrls = [...imageUrlsArray];
  // Loop through the array one element at a time
  for (let i = randomUrls.length - 1; i > 0; i--) {
    // Generate a random index between 0 and the current index (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the current element with the element at the random index
    [randomUrls[i], randomUrls[randomIndex]] = [randomUrls[randomIndex], randomUrls[i]];
  }
  // Return the shuffled array
  return randomUrls;
}