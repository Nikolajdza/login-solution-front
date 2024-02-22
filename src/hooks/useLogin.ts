import { useCallback } from 'react';
import useUser from '@/hooks/useUser.ts';

export const useLogin = () => {
  const { refetch } = useUser();

  const handleLogin = useCallback((provider: 'google' | 'microsoft' | 'facebook') => {
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
  }, [refetch]);

  return handleLogin;
};