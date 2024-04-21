import React, { useEffect, useState } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import {
  landscapePhotosPositions,
  verticalPhotosPositions,
} from "../../Data/positions";
import {
  imageUrls,
  landscapeImageUrls,
} from "../../FirebaseImageUpload/ImageService";
import { getTokensByContract } from "../../services/contracts.service";
import useAddressStore from "../store/contractStore";

const plane = new THREE.PlaneGeometry(1.78512, 1);
const vertPlane = new THREE.PlaneGeometry(1, 1);

const WallArt = () => {
  const [artworks, setArtworks] = useState([]);
  const textures = useTexture(artworks);
  const address = useAddressStore((state) => state.address);


  useEffect(() => {
    const getNFTs = async () => {
      const { success, data } = await getTokensByContract(
        address ||  "0xe785e82358879f061bc3dcac6f0444462d4b5330",
        ""
      );
      if (success && data !== null) {
        console.log(data.assets);
        setArtworks(data.assets);
      }
    };

    getNFTs();

    return () => {
      setArtworks([]);
    };
  }, [address]);

  return (
    <>
      {/* Vertical photos */}
      {artworks.map((_, index) => (
        <mesh
          key={index}
          geometry={vertPlane}
          scale={3}
          position={verticalPhotosPositions[index].position}
          rotation={verticalPhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={textures[index]} />
        </mesh>
      ))}
      {/* Landscape photos */}
      {landscapeImageUrls.map((photo, index) => (
        <mesh
          key={index}
          geometry={plane}
          scale={3}
          position={landscapePhotosPositions[index].position}
          rotation={landscapePhotosPositions[index].rotation}
        >
          <meshBasicMaterial map={useTexture(photo)} />
        </mesh>
      ))}
    </>
  );
};

export default WallArt;