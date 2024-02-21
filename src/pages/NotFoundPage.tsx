import { FC } from 'react';
import { Heading, Text, Center, VStack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/login');
  };

  return (
    <Center h="100vh" bg="gray.100">
      <VStack spacing={4}>
        <Heading textAlign="center" as="h1" size="2xl" color="red.500">
          404
        </Heading>
        <Text textAlign="center" fontSize="xl">Page Not Found :(</Text>
        <Button colorScheme="blue" mt="100px" onClick={handleReturn}>
          Return to Login
        </Button>
      </VStack>
    </Center>
  );
};