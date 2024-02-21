import { FC, useEffect } from 'react';
import { Button, VStack, Box, Icon, Card, CardHeader, CardBody, Text, Divider, CardFooter } from '@chakra-ui/react';
import { FaGoogle, FaMicrosoft, FaFacebook } from 'react-icons/fa';
import useUser from '@/hooks/useUser.ts';
import { useNavigate } from 'react-router-dom';
import { useAuthState, State } from '@/store';

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState() as State;
  const { refetch } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/login/success');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (provider: 'google' | 'microsoft' | 'facebook') => {
    const newWindow = window.open(`http://localhost:3000/auth/${provider}`,
      '_blank',
      'width=500,height=600'
    );

    // Create a broadcast channel
    const bc = new BroadcastChannel('auth_channel');
    bc.onmessage = (event) => {
      if (event.data === 'authentication complete') {
        if (newWindow) newWindow.close();
        refetch();
      }
    };
  };

  return (
    <Box w="100%" mx="auto" pt="100px" display="flex" flexDirection="column" justifyContent="center"
         alignItems="center">
      <Card w="md" maxW="md">
        <CardHeader>
          <Text fontSize="xl" textAlign="center">Welcome to Login Solution</Text>
          <Divider />
        </CardHeader>
        <CardBody>
          <VStack spacing={4} align="center">
            <Button leftIcon={<Icon as={FaGoogle} color="#DB4437" />} colorScheme="gray" minW="220px"
                    onClick={() => handleLogin('google')}>
              Login with Google
            </Button>
            <Button leftIcon={<Icon as={FaMicrosoft} color="#2B5797" />} colorScheme="gray" minW="220px"
                    onClick={() => handleLogin('microsoft')}>
              Login with Microsoft
            </Button>
            <Button leftIcon={<Icon as={FaFacebook} color="#3C5A99" />} colorScheme="gray" minW="220px"
                    onClick={() => handleLogin('facebook')}>
              Login with Facebook
            </Button>
          </VStack>
        </CardBody>
        <CardFooter display="table-column">
          <Divider />
          <Text fontSize="xl" textAlign="center">Please choose a provider to login</Text>
        </CardFooter>
      </Card>
    </Box>
  );
};