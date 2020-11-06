import { Box, Button, Text } from "@chakra-ui/core";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../../recoil/state";
import { useRouter } from "next/router";

function CartFooter() {
  const router = useRouter();
  const subTotal = useRecoilValue(cartTotal);

  return (
    <Box w="100%" bg="white" py="6" position="absolute" bottom="0" right="0" px="4">
      <Text fontSize="2xl" textAlign="right" mb="2">
        Sub Total: ${subTotal.toFixed(2)}
      </Text>
      <Button onClick={() => router.push("/checkout")} w="100%" variantColor="bluex" size="lg" disabled={!subTotal}>
        CHECKOUT
      </Button>
    </Box>
  );
}

export default CartFooter;
