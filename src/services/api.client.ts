import axiosInstance from '@/services/api.service.ts'

class APIClient {
  constructor(private endpoint: string) {}

  async fetchUser<T>(): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(this.endpoint)
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
}

export default APIClient
