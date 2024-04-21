//Shuffle Arrays
export const shuffleArray = (imageUrlsArray) => {
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
};
