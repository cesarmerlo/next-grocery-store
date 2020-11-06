import { Box, Flex, Heading } from "@chakra-ui/core";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import OrderDetails from "../components/checkout/OrderDetails";
import Router from "next/router";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../recoil/state";

const Checkout = () => {
  const total = useRecoilValue(cartTotal);

  //only work in client side
  if (typeof window !== "undefined" && !total) {
    Router.replace("/");
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Box bg="gray.100" minHeight="calc(100vh - 50px)">
        <Header />

        <Box as="main" py="8">
          <Heading as="h2" size="xl" textAlign="center">
            CHECKOUT
          </Heading>

          <Flex w={["100%", "80%", "90%", "80%"]} mx="auto" justify="center" mt="8" wrap="wrap">
            <CheckoutForm />
            <OrderDetails />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Checkout;
