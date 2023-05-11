import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { usePlatforms } from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const { data, error, isLoading } = usePlatforms();

  if (isLoading)
    return <Skeleton height="40px" width="120px" marginStart={4} />;

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        onClick={() => setOpen(!isOpen)}
        marginStart={3}
        marginBottom={4}
        as={Button}
        rightIcon={!isOpen ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
      >
        {selectedPlatform ? selectedPlatform : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              setSelectedPlatform(item.name);
              setOpen(false);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
