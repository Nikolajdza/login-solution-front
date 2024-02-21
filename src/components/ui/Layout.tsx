import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Layout: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      w="100%"
      p={4}
      bg="gray.50"
    >
      <Outlet />
    </Box>
  );
};
