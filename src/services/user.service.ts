import axiosInstance from './api.service';
import { decodeJwt } from '@/services/auth.service.ts';
import { JwtDecode } from '@/interfaces/jwt.ts';
import { useAuthState, State } from '@/store';

class UserService {
  async fetchUser(): Promise<JwtDecode> {
    try {
      const response = await axiosInstance.get('auth/user', { withCredentials: true });
      if (response.data.token) {
        const decoded = decodeJwt(response.data.token);
        (useAuthState.getState() as State).setUser(decoded);
        (useAuthState.getState() as State).setIsAuthenticated(true);
        return decoded;
      }
      return response.data;
    } catch (error) {
      console.log('Error fetching user', error);
      (useAuthState.getState() as State).setUser(null);
      (useAuthState.getState() as State).setIsAuthenticated(false);
      throw error;
    }
  }
}

export const userService = new UserService();