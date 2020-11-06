import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/core";
import { useSetRecoilState } from "recoil";
import { refreshCart } from "../../recoil/state";
import CounterBtn from "../others/CounterBtn";

export default function CartItem({ item }) {
  const { title, price, offerPrice, img, qty } = item;
  const setCart = useSetRecoilState(refreshCart);

  const itemTotal = (offerPrice ? offerPrice * qty : price * qty).toFixed(2);
  return (
    <Flex w="100%" justify="flex-start" align="center" position="relative" borderTop="1px solid black" py="2">
      <Box w="100px" h="100px" mr="2">
        <Image size="100%" objectFit="cover" src={`/images/${img}`} fallbackSrc="/images/fallbackImg.png" alt="" />
      </Box>

      <Box w="80%">
        <Text w="85%" fontSize="sm" fontWeight="medium">
          {title}
        </Text>

        <Text fontSize="sm">Unit Price ${offerPrice || price}</Text>

        <CounterBtn type="cart" item={item} />
      </Box>

      <Text fontSize="lg" fontWeight="medium" position="absolute" bottom="10px" right="12px">
        $ {itemTotal}
      </Text>

      <CloseButton size="sm" position="absolute" top="10px" right="12px" onClick={() => setCart({ item, n: 0 })} />
    </Flex>
  );
}
