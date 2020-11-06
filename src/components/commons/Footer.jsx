import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/core";

function Footer() {
  return (
    <Box as="footer" w="100%" bg="bluex.500" color="white" position="relative" zIndex="1101">
      <Flex w="90%" mx="auto" justify="space-between" align="center" py="6">
        <Text>2020 All Right Reserved</Text>

        <Stack isInline>
          <a href="#">
            <Icon name="question" mx="2" />
          </a>
          <a href="#">
            <Icon name="question" mx="2" />
          </a>
          <a href="#">
            <Icon name="question" mx="2" />
          </a>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Footer;
