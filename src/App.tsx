import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <Flex marginStart={3} marginBottom={5}>
          <Box marginEnd={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
          </Box>
          <SortSelector
            onSelectOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="10px" paddingY="50px">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
