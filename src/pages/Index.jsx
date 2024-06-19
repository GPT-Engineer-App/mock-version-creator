import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh">
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center" mb={8}>
          <HStack spacing={4}>
            <Image src="/images/logo.png" alt="GPTEngineer Logo" boxSize="40px" />
            <Heading size="md">GPTEngineer</Heading>
          </HStack>
          <Text>vilde.huseby@avoconsulting.no</Text>
        </Flex>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            What do you want to <Text as="span" color="teal.300">build</Text>?
          </Heading>
          <Box w="full" maxW="md">
            <Input placeholder="Can you create a mock version of t" size="lg" bg="gray.800" border="none" />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              size="lg"
              position="absolute"
              right="4"
              top="50%"
              transform="translateY(-50%)"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            />
          </Box>
        </VStack>
        <Box mt={16}>
          <Heading as="h2" size="lg" mb={4}>Featured Projects</Heading>
          <Flex wrap="wrap" spacing={4}>
            <Box bg="gray.800" p={4} borderRadius="md" w="200px" h="150px" m={2}>
              <Text>mondrian-paint</Text>
              <Text fontSize="sm">Created by n.chishtie</Text>
            </Box>
            <Box bg="gray.800" p={4} borderRadius="md" w="200px" h="150px" m={2}>
              <Text>dynamic-signal-visualizer</Text>
              <Text fontSize="sm">Created 6 days ago</Text>
            </Box>
            <Box bg="gray.800" p={4} borderRadius="md" w="200px" h="150px" m={2}>
              <Text>create-node-button</Text>
              <Text fontSize="sm">Created by Harry Roper</Text>
            </Box>
            <Box bg="gray.800" p={4} borderRadius="md" w="200px" h="150px" m={2}>
              <Text>modern-crypto-explorer</Text>
              <Text fontSize="sm">Created by kati8e3</Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;