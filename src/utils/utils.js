export const validateEthereumAddress = (address) => {
  const txt_1 = address.slice(0, 2);
  const txt_2 = address.slice(2, address.length);
  if (txt_1 !== "0x") {
    return false;
  }

  if (txt_1 === "0x" && txt_2.length > 5) {
    return true;
  }
};

export const sanitizeAndSetUrl = (asset) => {
    const image_url = asset.media[0].raw;
    const hold = image_url.match("ipfs://");
    
    if (hold === null) {
      return image_url;
    }
  
    if (hold[0] === "ipfs://") {
      let image_location = null;
      const txt_ = image_url.split("ipfs://")[1];
      const isClean = txt_.match("ipfs/");
  
      if (isClean !== null) {
        image_location = txt_.split("ipfs/")[1];
      } else {
        image_location = txt_;
      }
  
      const url = "https://ipfs.io/ipfs/" + image_location;
      return url;
    } 

    return asset.media[0].raw;
};
  


export const isImageAsset = (format) => {
  const imageFormats = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg'];
  return imageFormats.includes(format.toLowerCase());
};

