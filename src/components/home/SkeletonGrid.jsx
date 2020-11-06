import { Box, Grid } from "@chakra-ui/core";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => (
  <Box w="100%" h="300px" bg="white" p="8">
    <Skeleton count={1} width={"100%"} height={120} />
    <Box mt="2">
      <Skeleton count={1} width={80} height={20} />
      <Skeleton count={1} width={"100%"} height={20} />
    </Box>
    <Box w="100%" textAlign="center" mt="3">
      <Skeleton count={1} width={"70%"} height={40} />
    </Box>
  </Box>
);

export default function SkeletonGrid() {
  const cards = [];

  for (let i = 0; i <= 16; i++) {
    cards.push(<SkeletonCard key={i} />);
  }

  return (
    <Grid templateColumns="repeat(auto-fill,minmax(220px,1fr))" gap={6} mt="8">
      {cards}
    </Grid>
  );
}
