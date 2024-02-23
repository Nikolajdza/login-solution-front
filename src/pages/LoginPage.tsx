import { FC, useEffect } from 'react'
import {
  Button,
  VStack,
  Box,
  Icon,
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  CardFooter,
} from '@chakra-ui/react'
import { FaGoogle, FaMicrosoft, FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from '@/store'
import { isAuthenticated } from '@/services/auth.service.ts'
import { jwtDecode } from 'jwt-decode'
import { useLogin } from '@/hooks/useLogin.ts'

export const LoginPage: FC = () => {
  const handleLogin = useLogin()
  const navigate = useNavigate()
  const { setUser, token } = useAuthState()
  const isUserAuthenticated = isAuthenticated()

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token))
      navigate('/login/success')
    }
  }, [isUserAuthenticated, navigate, setUser, token])

  return (
    <Box
      w="100%"
      mx="auto"
      pt="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card w="md" maxW="md">
        <CardHeader>
          <Text fontSize="xl" textAlign="center">
            Welcome to Login Solution
          </Text>
          <Divider />
        </CardHeader>
        <CardBody>
          <VStack spacing={4} align="center">
            <Button
              leftIcon={<Icon as={FaGoogle} color="#DB4437" />}
              colorScheme="gray"
              minW="220px"
              onClick={() => handleLogin('google')}
            >
              Login with Google
            </Button>
            <Button
              leftIcon={<Icon as={FaMicrosoft} color="#2B5797" />}
              colorScheme="gray"
              minW="220px"
              onClick={() => handleLogin('microsoft')}
            >
              Login with Microsoft
            </Button>
            <Button
              leftIcon={<Icon as={FaFacebook} color="#3C5A99" />}
              colorScheme="gray"
              minW="220px"
              onClick={() => handleLogin('facebook')}
            >
              Login with Facebook
            </Button>
          </VStack>
        </CardBody>
        <CardFooter display="table-column">
          <Divider />
          <Text fontSize="xl" textAlign="center">
            Please choose a provider to login
          </Text>
        </CardFooter>
      </Card>
    </Box>
  )
}
