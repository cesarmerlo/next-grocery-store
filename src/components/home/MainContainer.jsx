import { Box, Flex } from "@chakra-ui/core";
import Banner from "./Banner";
import ItemsGrid from "./ItemsGrid";
import OBreadcrumb from "../others/OBreadcrumb";
import Sort from "../others/Sort";

function MainContainer({ showSidebar }) {
  return (
    <Box
      as="main"
      ml={showSidebar ? ["auto", "auto", "280px"] : ["auto", "auto", "0"]}
      mr={["auto", "auto", "0"]}
      w={showSidebar ? ["90%", "90%", "calc(100% - 280px)"] : ["90%", "85%", "100%"]}
      bg="gray.100"
      minHeight="calc(100vh - 99px)"
      p={["3", "5"]}
      transition="all .3s ease"
    >
      <Banner />

      <Flex justify="space-between" align="center" w="100%" mt="8">
        <OBreadcrumb />
        <Sort />
      </Flex>

      <ItemsGrid />
    </Box>
  );
}

export default MainContainer;
