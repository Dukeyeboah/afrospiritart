import axios from 'axios';
import { isImageAsset, sanitizeAndSetUrl } from '../utils/utils';


const alchemyapiKey = 'lW_NoYAb4qo9f2cBMfM4HzpxrGJ05nnT'; //process.env.ALCHEMY_API_KEY;
/** Fetches Metadata for a specified contract */


/** Fetches NFTs belonging to a specified contract from server or client*/
export const getTokensByContract = async(contractAddress, startToken) => {
    let {success, data} = {success:false, data:null}
    try {
        const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${alchemyapiKey}/getNFTsForCollection`;
       console.log('baseUrl',baseURL);
    
        const config = {
            method: 'get',
            url: `${baseURL}?contractAddress=${contractAddress}&startToken=${startToken}&limit=6&withMetadata=${true}`,
            headers: { }
          };
          

        let tokenAssets = {
            assets: [],
            nextToken: "true"
        } 
         const response = await axios(config);
         const {nfts, nextToken } = response.data; 
         tokenAssets.nextToken = nextToken;

         const results  = nfts;
         results.map((x) => {
            console.log(x)
            if(x.media[0].raw.length !== 0 && isImageAsset(x.media[0].format) && x.error === undefined) {
                tokenAssets.assets.push(sanitizeAndSetUrl(x));
            }
            return 0;
         });  
    
        
    success = true;
    data = tokenAssets;
    }catch(error) {
       success = false;
       data = null;
        if(error.code === "ERR_BAD_REQUEST") {
            console.log(error.response.data);
        }
    }

    console.log({success, data})
    return {success, data};
}


//export const nftArtworks = await getTokensByContract('0xe785e82358879f061bc3dcac6f0444462d4b5330','');  //0xeba9509627C1296188633c79C67dC7b302d4C993ß