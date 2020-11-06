import { Button, Flex, IconButton, Text } from "@chakra-ui/core";
import React from "react";
import { useSetRecoilState } from "recoil";
import { refreshCart } from "../../recoil/state";

export default function CounterBtn({ type = "default", counter = 0, item }) {
  const setCart = useSetRecoilState(refreshCart);

  //button for cart item (item provided for cart state)
  if (type === "cart") {
    return (
      <Flex w="100px" bg="bluex.600" justify="space-between" align="center" rounded="md" overflow="hidden" mt="2">
        <IconButton variantColor="bluex" icon="minus" size="sm" onClick={() => setCart({ item, n: item.qty - 1 })} />

        <Text fontSize="sm" fontWeight="medium" color="white">
          {item.qty}
        </Text>

        <IconButton variantColor="bluex" icon="add" size="sm" onClick={() => setCart({ item, n: item.qty + 1 })} />
      </Flex>
    );
  }

  //buttons for main item card(item provided for items state)
  return (
    <>
      {counter < 1 ? (
        <Button variantColor="teal" size="md" w="65%" onClick={() => setCart({ item, n: 1 })}>
          Add to Cart
        </Button>
      ) : (
        <Flex w="65%" bg="gray.200" justify="space-between" align="center" rounded="md" overflow="hidden">
          <IconButton variantColor="bluex" icon="minus" onClick={() => setCart({ item, n: counter - 1 })} />

          <Text fontSize="md" fontWeight="medium">
            {counter}
          </Text>

          <IconButton variantColor="bluex" icon="add" onClick={() => setCart({ item, n: counter + 1 })} />
        </Flex>
      )}
    </>
  );
}
