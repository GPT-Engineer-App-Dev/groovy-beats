import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="brand.900" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MusicStream</Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={3} py={2} _hover={{ textDecoration: "none", bg: "brand.800" }}>Home</Link>
          <Link as={NavLink} to="/browse" px={3} py={2} _hover={{ textDecoration: "none", bg: "brand.800" }}>Browse</Link>
          <Link as={NavLink} to="/library" px={3} py={2} _hover={{ textDecoration: "none", bg: "brand.800" }}>Library</Link>
          <Link as={NavLink} to="/profile" px={3} py={2} _hover={{ textDecoration: "none", bg: "brand.800" }}>Profile</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;