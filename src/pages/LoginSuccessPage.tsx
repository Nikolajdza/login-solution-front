import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { State, useAuthState } from '@/store';

export const LoginSuccessPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState() as State;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Create a broadcast channel
    const bc = new BroadcastChannel('auth_channel');

    // Send a message to the main window
    bc.postMessage('authentication complete');

    setTimeout(() => {
      // Close the broadcast channel
      bc.close();

      // Close the window
      window.close();
    }, 1000);
  }, []);

  return (
    <div>
      Thank you for logging in!
    </div>
  );
};

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { State, useAuthState } from '@/store';
//
// export const LoginSuccessPage = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuthState() as State;
//
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);
//
//   useEffect(() => {
//     setTimeout(() => {
//       window.close();
//     }, 1000);
//   }, []);
//
//   return (
//     <div>
//       Thank you for logging in!
//     </div>
//   );
// };
//
