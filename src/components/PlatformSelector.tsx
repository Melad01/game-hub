import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendo,
  SiWindows11,
  SiPlaystation,
  SiXbox,
  SiLinux,
  SiApple,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { ImAndroid } from "react-icons/im";

const iconMap: { [key: string]: IconType } = {
  windows: SiWindows11,
  playstaion: SiPlaystation,
  xbox: SiXbox,
  android: ImAndroid,
  linux: SiLinux,
  apple: SiApple,
  iphone: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
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
        as={Button}
        rightIcon={!isOpen ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
      >
        {selectedPlatform ? selectedPlatform : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              onSelectPlatform(platform);
              setSelectedPlatform(platform.name);
              setOpen(false);
            }}
          >
            <HStack>
              <Icon
                as={iconMap[platform.slug]}
                color="gray.500"
                key={platform.id}
              />
              <Text>{platform.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
