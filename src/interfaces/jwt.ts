export interface JwtDecode {
  email: string;
  name: string;
  profilePicture?: string;
  provider: 'google' | 'microsoft' | 'facebook';
}