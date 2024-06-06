import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">Featured Playlists</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Top Hits</Heading>
              <Text mt={2}>The latest and greatest hits.</Text>
            </Box>
            <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Chill Vibes</Heading>
              <Text mt={2}>Relax and unwind with these tracks.</Text>
            </Box>
            <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Workout</Heading>
              <Text mt={2}>Get pumped with these workout tunes.</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;