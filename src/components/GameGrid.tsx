import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardContainer";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && (
        <Text fontSize="40px" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardConatainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
