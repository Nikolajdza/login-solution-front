import { useQuery } from 'react-query'
import { userService } from '@/services/user.service.ts'

const useUser = () => {
  return useQuery('user', userService.fetchUser, {
    enabled: false,
    cacheTime: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}

export default useUser
