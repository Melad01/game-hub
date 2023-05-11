import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch size={20} />} />
      <Input placeholder="Search Games" size="md" borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
