import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.900" color="white" py={4} mt={10}>
      <Flex direction="column" align="center">
        <Flex mb={2}>
          <Link href="/about" mx={2} _hover={{ textDecoration: "underline" }}>About</Link>
          <Link href="/contact" mx={2} _hover={{ textDecoration: "underline" }}>Contact</Link>
          <Link href="/terms" mx={2} _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
        </Flex>
        <Text fontSize="sm">© 2023 MusicStream. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;