import { JwtDecode } from '../interfaces/jwt'
import { jwtDecode } from 'jwt-decode'
import { useAuthState } from '@/store'

export const decodeJwt = (token: string): JwtDecode => {
  const jwtDecoded: never = jwtDecode(token)
  let res = {}
  Object.keys(jwtDecoded).forEach(function (key) {
    const spitProperty: string[] = key.split('/claims/')
    const splitPropetyLenth: number = spitProperty.length
    res = {
      ...res,
      [splitPropetyLenth == 1 ? key : spitProperty[splitPropetyLenth - 1]]:
        jwtDecoded[key],
    }
  })
  return res as JwtDecode
}

export const isAuthenticated = (): boolean => {
  const token = useAuthState.getState().token
  return !!token
}
