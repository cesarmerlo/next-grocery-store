import { Badge, Box, Flex, Image, Text, useToast } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import useIsInCart from "../../hooks/useIsInCart";
import CounterBtn from "../others/CounterBtn";
import ItemModal from "../others/ItemModal";

export default function ItemCard({ item }) {
  const { title, price, img, offerPrice } = item;

  //HOOKS
  const [showModal, setModal] = useState(false);
  const [isAdded, setAdded] = useState("initial");
  const counter = useIsInCart(item);
  const toast = useToast();

  //effect for handle toast
  useEffect(() => {
    if (counter === 1 && isAdded === "noAdded") {
      toast({
        position: "bottom-left",
        title: "Item Added to Cart.",
        status: "success",
        duration: 1500,
      });
      setAdded("added");
    } else if (counter === 0 && isAdded === "added") {
      toast({
        position: "bottom-left",
        title: "Item Removed to Cart.",
        status: "error",
        duration: 1500,
      });
      setAdded("noAdded");
    } else if (isAdded === "initial" && counter === 0) {
      setAdded("noAdded");
    } else if (isAdded === "initial" && counter > 0) {
      setAdded("added");
    }
  }, [counter]);

  return (
    <>
      <Flex
        w="100%"
        h="300px"
        bg="white"
        direction="column"
        justify="center"
        align="center"
        position="relative"
        pb="2"
        shadow="lg"
        rounded="md"
      >
        {offerPrice && (
          <Badge size="" variant="solid" variantColor="red" position="absolute" px="2" top="10px" right="10px">
            SALE
          </Badge>
        )}

        <Box w="100%" h="50%" onClick={() => setModal(true)}>
          <Image size="100%" objectFit="cover" src={`/images/${img}`} fallbackSrc="/images/fallbackImg.png" alt="" />
        </Box>

        <Box w="85%" my="3">
          <Flex align="flex-end">
            <Text fontSize="md" fontWeight="medium">
              ${offerPrice || price}
            </Text>
            {offerPrice && (
              <Text ml="1" fontSize="sm" fontWeight="medium" as="del" color="gray.400">
                ${price}
              </Text>
            )}
          </Flex>

          <Text fontSize="sm" textTransform="capitalize" minHeight="42px">
            {title}
          </Text>
        </Box>

        <CounterBtn item={item} counter={counter} />
      </Flex>

      <ItemModal showModal={showModal} setModal={setModal} img={img} />
    </>
  );
}
