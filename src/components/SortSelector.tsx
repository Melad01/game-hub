import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

interface Props {
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ onSelectOrder }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [sorting, setSorting] = useState("Revelance");

  const sortOrders = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

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
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              onSelectOrder(order.value);
              setSorting(order.label);
              setOpen(false);
            }}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
