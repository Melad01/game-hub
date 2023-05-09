import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { FaXbox, FaAndroid, FaLinux, FaApple } from "react-icons/fa";
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
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
