import { Button, Flex } from "@chakra-ui/core";
import React from "react";

const CustomRadio = React.forwardRef((props, ref) => {
  const { title = "category", icon = "", isChecked, isDisabled, value, ...rest } = props;

  return (
    <Button
      ref={ref}
      bg={isChecked ? "gray.200" : "white"}
      color="bluex.600"
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      border="none"
      _focus={{ outline: "none" }}
      rounded="none"
      py="6"
      w="100%"
      {...rest}
    >
      <Flex w="100%" align="center">
        {icon}
        {title}
      </Flex>
    </Button>
  );
});

export default CustomRadio;
