import React, { useCallback, useState } from 'react'
import { Box, Fab } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import { validateEthereumAddress } from '../../utils/utils';


const Search = () => {
    const [addressInput, setAddressInput] = useState("");

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
                background:'red',
                width:{
                    md:'400px'
                },
                height:{
                    md:'350px'
                },
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center'

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