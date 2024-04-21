import "./CSS/style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience/index.jsx";
import { StrictMode } from "react";
import Controlsinterface from "./ControlsInterface/ControlsInterface.jsx";
import Search from "./Components/Search/index.jsx";
// import { Leva } from "leva";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <StrictMode>
      {/* <Leva collapsed /> */}
      <Canvas
        shadows
        flat // corrects the tonemapping to get same model colors from blender
        camera={{
          fov: 80,
          near: 0.1,
          far: 300,
          position: [0, 1, 6],
        }}
      >
        <Experience />
      </Canvas>
      <Controlsinterface />
      <Search/> 
    </StrictMode>
  </>
);
