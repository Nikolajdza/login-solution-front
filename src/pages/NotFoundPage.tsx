import { FC } from 'react'
import { Heading, Text, Center, VStack, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const NotFoundPage: FC = () => {
  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Heading textAlign="center" as="h1" size="2xl" color="red.500">
          404
        </Heading>
        <Text textAlign="center" fontSize="xl">
          Page Not Found :(
        </Text>
        <Link to="/login">
          <Box
            as="button"
            mt="100px"
            p={4}
            borderRadius="md"
            bg="blue.500"
            color="white"
            cursor="pointer"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
          >
            Return to Login
          </Box>
        </Link>
      </VStack>
    </Center>
  )
}
