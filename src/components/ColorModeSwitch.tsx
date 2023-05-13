import { useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" && (
        <BsMoonFill size={25} onClick={toggleColorMode} />
      )}
      {colorMode === "light" && (
        <BsFillSunFill size={25} onClick={toggleColorMode} />
      )}
    </>
  );
};

export default ColorModeSwitch;
