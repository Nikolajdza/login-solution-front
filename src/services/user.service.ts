import axiosInstance from './api.service';
import { decodeJwt } from '@/services/auth.service.ts';
import { JwtDecode } from '@/interfaces/jwt.ts';
import { useAuthState } from '@/store';

class UserService {
  async fetchUser(): Promise<JwtDecode> {
    try {
      const response = await axiosInstance.get('auth/user', { withCredentials: true });
      if (response.data.token) {
        const decoded = decodeJwt(response.data.token);
        useAuthState.getState().setToken(response.data.token);
        useAuthState.getState().setUser(decoded);
        return decoded;
      }
      return response.data;
    } catch (error) {
      console.log('Error fetching user', error);
      useAuthState.getState().setUser(null);
      useAuthState.getState().setToken(null);
      throw error;
    }
  }
}

export const userService = new UserService();