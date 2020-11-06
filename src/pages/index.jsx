import { Box } from "@chakra-ui/core";
import Header from "../components/commons/Header";
import Sidebar from "../components/commons/Sidebar";
import Cart from "../components/cart/Cart";
import MainContainer from "../components/home/MainContainer";
import Footer from "../components/commons/Footer";
import { useEffect, useState } from "react";
import useIsDesktop from "../hooks/useIsDesktop";

const Index = () => {
  const isDesktop = useIsDesktop();
  const [showSidebar, setSidebar] = useState(false);
  const [showCart, setCart] = useState(false);

  useEffect(() => {
    setSidebar(isDesktop);
  }, [isDesktop]);

  return (
    <>
      <Box bg="gray.100">
        <Header page="home" showSidebar={showSidebar} setSidebar={setSidebar} setCart={setCart} />

        <Sidebar showSidebar={showSidebar} setSidebar={setSidebar} />

        <MainContainer showSidebar={showSidebar} />
      </Box>

      <Cart showCart={showCart} setCart={setCart} />
      <Footer />
    </>
  );
};

export default Index;
