export default interface BaseResponse {
  loading?: boolean;
  error?: string | undefined;
}

export interface LoginResponse extends BaseResponse {
  token: string | null;
}

