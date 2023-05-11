import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch size={20} />} />
        <Input
          ref={ref}
          placeholder="Search Games"
          size="md"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
