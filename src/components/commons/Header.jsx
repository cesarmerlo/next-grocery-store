import { Badge, Box, Flex, PseudoBox, Text } from "@chakra-ui/core";
import { useState } from "react";
import { BiMenuAltLeft, BiSearch, BiShoppingBag, BiStoreAlt } from "react-icons/bi";
import SearchBar from "../others/SearchBar";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartLength } from "../../recoil/state";
import Logo from "../others/Logo";

export default function Header({ page = "", showSidebar = false, setSidebar = false, setCart = () => {} }) {
  const [showSearch, setShowSearch] = useState(false);
  const itemsCount = useRecoilValue(cartLength);

  return (
    <>
      <Box as="header" w="100%" bg="white" py="28px" shadow="md" h="100px" position="sticky" top="0" zIndex="1101">
        <Flex w="95%" mx="auto" justify="space-between" align="center" wrap="wrap">
          <Flex mr="10" align="center" onClick={() => {}}>
            {page === "home" && (
              <button onClick={() => setSidebar(!showSidebar)}>
                <Box as={BiMenuAltLeft} size="38px" mr="2" />
              </button>
            )}
            <Logo />
          </Flex>

          <div>
            {page === "home" && (
              <PseudoBox as="button" mr="10" onClick={() => setShowSearch(!showSearch)}>
                <Box as={BiSearch} size="38px" />
              </PseudoBox>
            )}

            {page === "home" ? (
              <PseudoBox as="button" position="relative" onClick={() => setCart(true)}>
                <Box as={BiShoppingBag} size="38px" />
                <Badge
                  color="white"
                  bg="bluex.600"
                  borderRadius="999px"
                  w="6"
                  h="6"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  top="-12px"
                  left="-12px"
                >
                  {itemsCount}
                </Badge>
              </PseudoBox>
            ) : (
              <Link href="/">
                <PseudoBox as="button">
                  <Box as={BiStoreAlt} size="38px" />
                </PseudoBox>
              </Link>
            )}
          </div>
        </Flex>
      </Box>

      {showSearch && <SearchBar setShowSearch={setShowSearch} />}
    </>
  );
}
