import { Box, Container, Flex, Heading, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10}>
      <Container maxW="container.xl">
        {/* Header */}
        <Flex justify="space-between" align="center" mb={10}>
          <HStack spacing={4}>
            <Image src="/logo.png" alt="Logo" boxSize="40px" />
            <Heading size="md">GPTEngineer</Heading>
          </HStack>
          <Text>vilde.huseby@avoconsulting.no</Text>
        </Flex>

        {/* Main Section */}
        <VStack spacing={6} mb={10}>
          <Heading size="2xl" textAlign="center">
            What do you want to <Text as="span" color="teal.300">build</Text>?
          </Heading>
          <Flex align="center" bg="gray.800" p={4} borderRadius="md" w="full" maxW="md">
            <Input variant="unstyled" placeholder="Can you create a mock version of t" />
            <FaCog />
          </Flex>
        </VStack>

        {/* Featured Projects */}
        <Box>
          <Heading size="lg" mb={4}>Featured Projects</Heading>
          <Flex wrap="wrap" spacing={4}>
            <Box bg="gray.700" p={4} borderRadius="md" w="full" maxW="sm" mb={4}>
              <Text>mondrian-paint</Text>
              <Text fontSize="sm">Created by n.chishtie</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md" w="full" maxW="sm" mb={4}>
              <Text>dynamic-signal-visualizer</Text>
              <Text fontSize="sm">Created 6 days ago</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md" w="full" maxW="sm" mb={4}>
              <Text>create-node-button</Text>
              <Text fontSize="sm">Created by Harry Roper</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md" w="full" maxW="sm" mb={4}>
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