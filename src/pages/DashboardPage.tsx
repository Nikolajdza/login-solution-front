import { FC } from 'react';
import {
  Box,
  Text,
  Image,
  VStack,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Divider
} from '@chakra-ui/react';
import { useAuthState, State } from '@/store';
import { FaUserCircle } from 'react-icons/fa';

export const DashboardPage: FC = () => {
  const { user } = useAuthState() as State;

  return (
    <Box w="100%" mx="auto" pt="100px" display="flex" flexDirection="column" justifyContent="center"
         alignItems="center">
      <Card w="md" maxW="md">
        <CardHeader>
          <Text fontSize="xl" textAlign="center">User Profile</Text>
          <Divider />
        </CardHeader>
        <CardBody>
          <VStack spacing="3" align="center">
            {user?.provider === 'google' ? (
              <Image
                border="2px"
                borderColor="gray.200"
                shadow="md"
                boxSize="200px"
                borderRadius="full"
                src={user?.profilePicture}
                alt="Profile"
              />
            ) : (
              <Box as={FaUserCircle} borderRadius="full" border="2px" shadow="md" borderColor="gray.200" boxSize="200px"
                   color="gray.500" />
            )}
            <Divider />
            <Text>{user?.name}</Text><Divider />
            <Text>{user?.email}</Text>
            <Divider />
          </VStack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  );
};