import { createContext, useCallback, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedToken = window.localStorage.getItem('jwt')
    const storedUser = window.localStorage.getItem('user')

    if (storedToken) {
      setIsLogin(true)
      setUser(JSON.parse(storedUser))
    } else {
      setIsLogin(false)
    }

    setLoading(false)
  }, [])

  const login = useCallback((token, user) => {
    window.localStorage.setItem('jwt', token)
    window.localStorage.setItem('user', JSON.stringify(user))
    setIsLogin(true)
    setUser(user)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt')
    window.localStorage.removeItem('user')
    setIsLogin(false)
  }, [])

  return (
    <AuthContext.Provider value={{ loading, isLogin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
