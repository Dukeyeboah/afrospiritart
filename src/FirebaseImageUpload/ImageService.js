import { getTokensByContract } from "../services/contracts.service";
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

export const imageUrls = [];  //['https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3','https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3','https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3']; //await fetchImageUrls();
export const landscapeImageUrls = [];//  ['https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3','https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3','https://firebasestorage.googleapis.com/v0/b/bashbash-art.appspot.com/o/collections%2FTANGERINE%2FTWENTY%20THREE-min%20XL.PNG?alt=media&token=5874b7b0-5010-47a3-8851-63f5ec8c64c3']; //await fetchLandscapeImageUrls();



// function shuffleArray(imageUrls) {
//   const randomUrls = [...imageUrls];

//   // Loop through the array one element at a time
//   for (let i = randomUrls.length - 1; i > 0; i--) {
//     // Generate a random index between 0 and the current index (inclusive)
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     // Swap the current element with the element at the random index
//     [randomUrls[i], randomUrls[randomIndex]] = [randomUrls[randomIndex], randomUrls[i]];
//   }
//   // Return the shuffled array
//   return randomUrls;
// }

// export const randomLandscapeUrls = shuffleArray(landscapeImageUrls);
// console.log(imageUrls)

// Inside any component or module where you need image URLs
// const loadImageUrls = async () => {
//   imageUrls = await fetchImageUrls();
//   // Do something with imageUrls
// };
