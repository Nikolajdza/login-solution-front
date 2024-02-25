import { FC } from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { FaChevronDown, FaReact } from 'react-icons/fa'
import { useAuthState } from '@/store'
import { isAuthenticated } from '@/services/auth.service.ts'
import { ROUTES } from '@/constants/pageRoutes.ts'

export const Header: FC = () => {
  const { user, setToken, setUser } = useAuthState()

  const handleLogout = () => {
    setToken(null)
    setUser(null)
    window.location.replace(ROUTES.LOGIN)
  }

  return (
    <Box
      position="fixed"
      bg="blue.500"
      w="100%"
      p={4}
      color="white"
      top="0"
      left="0"
      zIndex="1"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box as={FaReact} boxSize="50px" color="white" mr={4} />
          <Text fontSize="4xl">Login Solution</Text>
        </Flex>
        {isAuthenticated() && user && (
          <Flex alignItems="center">
            <Text fontSize="xl" mr={5}>
              {user.name}
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                variant="outline"
              >
                <Avatar size="sm" name={user.name} src={user.profilePicture} />
              </MenuButton>
              <MenuList>
                <MenuItem color="black">
                  {user.provider === 'google' ? user.email : user.name}
                </MenuItem>
                <MenuItem color="black" onClick={handleLogout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
