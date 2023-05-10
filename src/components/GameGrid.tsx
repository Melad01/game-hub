import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardContainer";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && (
        <Text fontSize="40px" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardConatainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
