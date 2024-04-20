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

// console.log(imageUrls)

// Inside any component or module where you need image URLs
// const loadImageUrls = async () => {
//   imageUrls = await fetchImageUrls();
//   // Do something with imageUrls
// };
