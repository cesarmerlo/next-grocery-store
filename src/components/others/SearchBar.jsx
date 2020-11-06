import { Box, CloseButton, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { searchValue } from "../../recoil/state";

export default function SearchBar({ setShowSearch }) {
  const [search, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useRecoilState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setTimeout(() => {
        //avoid freezing in UI when typing
        setSearchQuery("");
      }, 0);
    } else {
      setValue(e.target.value);
    }
  };

  const handleClose = (e) => {
    setSearchQuery("");
    setShowSearch(false);
  };

  return (
    <Box w="100%" bg="white" py="6" shadow="md" h="100px" position="fixed" top="0" left="0" zIndex="1102">
      <Flex w="96%" mx="auto" justify="space-between" align="center">
        <Box w="1px" h="1px" display={["none", "none", "none", "block"]} /> {/* pseudo offset */}
        <InputGroup
          as="form"
          onSubmit={handleSubmit}
          w={["85%", "85%", "60%", "60%"]}
          size="lg"
          display="block"
          rounded="lg"
          border="2px solid black"
        >
          <Input pl="4rem" type="search" placeholder="Search Product" onChange={handleChange} defaultValue={searchQuery} />
          <InputLeftElement w="4rem">
            <button>
              <Box as={BiSearch} size="28px" />
            </button>
          </InputLeftElement>
        </InputGroup>
        <CloseButton size="lg" onClick={handleClose} />
      </Flex>
    </Box>
  );
}
