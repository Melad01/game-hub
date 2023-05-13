import {
  Button,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading)
    return (
      <SkeletonText
        mt="4"
        noOfLines={19}
        spacing="10px"
        skeletonHeight="25px"
      />
    );

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginStart={4}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="1px">
            <Button
              whiteSpace="normal"
              textAlign="left"
              objectFit="cover"
              fontWeight="bold"
              onClick={() => onSelectGenre(genre)}
              variant="solid"
              fontSize="md"
              bg={genre.id === selectedGenre?.id ? "whiteAlpha.900" : ""}
              color={genre.id === selectedGenre?.id ? "#1A365D" : ""}
            >
              <Image
                marginEnd={3}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
