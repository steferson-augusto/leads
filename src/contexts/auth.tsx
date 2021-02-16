import React, { createContext, useState, useEffect, useContext } from 'react'

import api from '../services/api'
import * as auth from '../services/auth'

interface AuthContextData {
  signed: boolean
  signin: (email: string, password: string) => Promise<auth.Token>
  signout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const localToken = auth.getToken()
    if (localToken) {
      console.log(token)
      api.defaults.headers.Authorization = `Bearer ${localToken}`
      setToken(localToken)
    }
  }, [])

  const signin = async (
    email: string,
    password: string
  ): Promise<auth.Token> => {
    const response = await auth.signin(email, password)
    api.defaults.headers.Authorization = `Bearer ${response?.token}`
    setToken(response?.token)
    return response
  }

  const signout = () => {
    auth.logout()
    setToken(null)
  }

  return (
    // <AuthContext.Provider value={{ signed: !!token, signin, signout }}>
    <AuthContext.Provider value={{ signed: true, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  return context
}
