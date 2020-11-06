import { Alert, AlertDescription, AlertIcon, AlertTitle, Grid } from "@chakra-ui/core";
import ItemCard from "./ItemCard";

import { useRecoilValueLoadable } from "recoil";
import { itemsList } from "../../recoil/state";
import SkeletonGrid from "./SkeletonGrid";

console.log(itemsList);

export default function ItemsGrid() {
  const data = useRecoilValueLoadable(itemsList);

  if (data.state === "loading") return <SkeletonGrid />;

  if (data.state === "hasError") {
    return (
      <Alert
        status="error"
        variant="solid"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="200px"
        mt="80px"
        mx="auto"
        w={["100%", "80%"]}
      >
        <AlertIcon size="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          An Error Ocurred!
        </AlertTitle>
        <AlertDescription maxWidth="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</AlertDescription>
      </Alert>
    );
  }

  if (!data.contents.length) {
    return (
      <Alert
        status="info"
        variant="solid"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="200px"
        mt="80px"
        mx="auto"
        w={["100%", "80%"]}
      >
        <AlertIcon size="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No Items Found!
        </AlertTitle>
        <AlertDescription maxWidth="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</AlertDescription>
      </Alert>
    );
  }

  return (
    <Grid templateColumns="repeat(auto-fill,minmax(220px,1fr))" gap={6} mt="8">
      {data.contents.map((item) => (
        <ItemCard item={item} key={item.img} />
      ))}
    </Grid>
  );
}
