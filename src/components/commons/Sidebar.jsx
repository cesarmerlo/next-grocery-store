import { Box, RadioButtonGroup } from "@chakra-ui/core";
import { BiMinus } from "react-icons/bi";
import CustomRadio from "../others/CustomRadio";
import { useRecoilState } from "recoil";
import { selectedCategory } from "../../recoil/state";
import { useEffect } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";

export default function Sidebar({ showSidebar, setSidebar }) {
  const [category, setCategory] = useRecoilState(selectedCategory);
  const isDesktop = useIsDesktop();

  //close sidebar on select when is mobile
  useEffect(() => {
    if (!isDesktop) {
      setSidebar(false);
    }
  }, [category]);

  return (
    <Box
      w={["100%", "100%", "280px"]}
      h="calc(100vh - 100px)"
      bg="white"
      position="fixed"
      transform={!showSidebar ? ["translateX(-100%)", "translateX(-100%)", "translateX(-280px)"] : "translateX(0)"}
      transition="transform .3s ease"
      left="0"
      top="100px"
      py="5"
      zIndex="1100"
    >
      <RadioButtonGroup defaultValue="all" value={category} onChange={(val) => setCategory(val)} isInline>
        <CustomRadio value="all" title="All Products" icon={<Box as={BiMinus} size="24px" mr="10" />} />
        <CustomRadio value="fruits" title="Fruits" icon={<Box as={BiMinus} size="24px" mr="10" />} />
        <CustomRadio value="vegetable" title="Vegetables" icon={<Box as={BiMinus} size="24px" mr="10" />} />
        <CustomRadio value="meat" title="Meats" icon={<Box as={BiMinus} size="24px" mr="10" />} />
        <CustomRadio value="bakery" title="Bakery" icon={<Box as={BiMinus} size="24px" mr="10" />} />
        <CustomRadio value="drink" title="Drinks" icon={<Box as={BiMinus} size="24px" mr="10" />} />
      </RadioButtonGroup>
    </Box>
  );
}
