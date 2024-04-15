import NavigationInstructions from "../Data/NavigationInstructions";
import { EcctrlJoystick } from "ecctrl";
import { useState, useEffect } from "react";

//Changes interface to joyestick or instructions based on screen Size
const ControlsInterface = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1370);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <EcctrlJoystick /> : <NavigationInstructions />}</>;
};

export default ControlsInterface;
