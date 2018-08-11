
import { AUTH_TOKEN } from '../constants/constants'

export const getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN)
}
