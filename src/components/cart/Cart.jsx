import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading } from "@chakra-ui/core";
import CartFooter from "./CartFooter";
import CartList from "./CartList";

const Cart = ({ showCart = false, setCart }) => {
  return (
    <Drawer isOpen={showCart} onClose={() => setCart(false)} placement="right" size="md">
      <DrawerOverlay />

      <DrawerContent p="4">
        <Flex justify="space-between" align="center" w="100%">
          <Heading as="h2" size="xl">
            Shopping Cart
          </Heading>
          <DrawerCloseButton size="lg" position="static" />
        </Flex>

        <CartList />

        <CartFooter />
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
