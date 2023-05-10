import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardConatainer = ({ children }: Props) => {
  return <Box width="370px">{children}</Box>;
};

export default GameCardConatainer;
