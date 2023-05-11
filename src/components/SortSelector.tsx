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
import useData from "../hooks/useData";
import { usePlatforms } from "../hooks/usePlatforms";

interface Props {
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ onSelectOrder }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [sorting, setSorting] = useState("Revelance");
  const { error, isLoading } = usePlatforms();

  const sortOrders = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  if (error) return null;

  if (isLoading)
    return <Skeleton height="40px" width="180px" marginStart={4} />;

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
