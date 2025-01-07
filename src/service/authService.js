import { apiClient } from "../API/axios"

  const AUTH_URL = "/auth/login"


  export async function login(username, password){
    const res = await apiClient.post(AUTH_URL, {username, password})
    return res?.data?.data?.token
  }