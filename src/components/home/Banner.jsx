import { Box, Image } from "@chakra-ui/core";

export default function Banner() {
  return (
    <Box w="100%" h={["150px", "200px", "250px", "300px"]} bg="gray.300">
      <Image size="100%" objectFit="cover" src={`/images/banner-bg.webp`} />
    </Box>
  );
}
