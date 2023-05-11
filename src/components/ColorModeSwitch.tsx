import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack paddingEnd="10px">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Icon>
        {colorMode === "dark" ? (
          <BsMoonFill size={25} />
        ) : (
          <BsFillSunFill size={25} />
        )}
      </Icon>
    </HStack>
  );
};

export default ColorModeSwitch;
