import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from '@/routes/router';
import './index.css';
import { Header } from '@/components/ui/Header.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main>
          <Header />
          <RouterProvider router={router} />
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
