import React, { useCallback, useState } from 'react'
import { Box, Fab } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import { validateEthereumAddress } from '../../utils/utils';
import useAddressStore from '../store/contractStore';


const Search = () => {
    const [addressInput, setAddressInput] = useState("");
    const setAddress = useAddressStore((state) => state.setAddress);

    const checkAddress = (address) => {
        setAddressInput(address.trim());
    };

    const getNewCollection = useCallback(() => {
        if (!validateEthereumAddress(addressInput || "")) {
           console.log('invalid address')
          setAddressInput("");
          return;
        }
     console.log('address is:',addressInput);
     setAddress(addressInput);
    }, [addressInput]);
    
  return (
    <React.Fragment>
        <Box component={'div'} 
            sx={{
              position:'fixed',
              bottom:'20vh',
              width:'100%',
              display:'flex',
              justifyContent:'center',
              '.box':{
                padding:'2rem',
                background:'#cecece',
                borderRadius:'14px',
                opacity: 0.5,
                width:{
                    md:'auto'
                },
                height:{
                    md:'auto'
                },
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                gap:'20px',
                '.addressInput':{
                    borderRadius:'12px',
                    height:'25px',
                    padding:'5px 10px',
                },
                '.fetchBtn': {

                  width: {
                        md:'40px'
                  },
                  height: {
                        md:'40px'
                  }
                }
              }
          }}
        >
<div className='box'>
<input
          value={addressInput}
          onChange={(e) => checkAddress(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? getNewCollection() : null)}
          type="text"
          placeholder="enter contract address... 0x320b3cc84afef86d7"
          className="addressInput"
        />

        <Fab
          className={`fetchBtn ${addressInput.length > 5 ? "fetch" : ""}`}
          disabled={addressInput.length < 4}
          onClick={getNewCollection}
        >
          <RocketIcon className="icon" />
        </Fab>
</div>
        </Box>
    </React.Fragment>
  )
}

export default Search