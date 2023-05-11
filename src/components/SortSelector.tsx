import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const SortSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const [sorting, setSorting] = useState("Revelance");

  return (
    <Menu>
      <MenuButton
        as={Button}
        onClick={() => setOpen(!isOpen)}
        rightIcon={!isOpen ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
      >
        Order By : {sorting}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSorting("Revelance")}>Revelance</MenuItem>
        <MenuItem onClick={() => setSorting("Date Added")}>Date Added</MenuItem>
        <MenuItem onClick={() => setSorting("Name")}>Name</MenuItem>
        <MenuItem onClick={() => setSorting("Release Date")}>
          Release Date
        </MenuItem>
        <MenuItem onClick={() => setSorting("Popularity")}>Popularity</MenuItem>
        <MenuItem onClick={() => setSorting("Average Rating")}>
          Average Rating
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
