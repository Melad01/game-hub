import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius="20px">
      <Skeleton height="200">
        <CardBody>
          <SkeletonText noOfLines={4} spacing="4" skeletonHeight="4" />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
