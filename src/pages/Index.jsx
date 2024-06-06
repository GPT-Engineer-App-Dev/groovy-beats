import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" flexDirection="column">
        {/* Navigation Bar */}
        <Flex as="nav" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
          <HStack spacing={8}>
            <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton aria-label="Browse" icon={<FaSearch />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton aria-label="Library" icon={<FaBook />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" />
          </HStack>
        </Flex>

        {/* Main Section */}
        <Flex flex="1" bg="gray.800" color="white" p={8} flexDirection="column" alignItems="center">
          <Heading mb={6}>Featured Playlists</Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
            <Box>
              <Image src="https://via.placeholder.com/150" alt="Playlist 1" borderRadius="md" />
              <Text mt={2}>Playlist 1</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/150" alt="Playlist 2" borderRadius="md" />
              <Text mt={2}>Playlist 2</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/150" alt="Playlist 3" borderRadius="md" />
              <Text mt={2}>Playlist 3</Text>
            </Box>
          </Stack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="gray.900" color="white" p={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 Music Streaming Service</Text>
            <HStack spacing={4}>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Terms of Service</Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;