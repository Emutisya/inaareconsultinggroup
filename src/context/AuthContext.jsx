import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth as firebaseAuth } from '@/lib/firebase'

const AuthContext = createContext(null)
const STORAGE_KEY = 'inaare_admin_auth'

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  })
  const [firebaseUser, setFirebaseUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setFirebaseUser(user)

      if (!user) {
        setAuth(null)
        localStorage.removeItem(STORAGE_KEY)
      }

      setAuthLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = (payload) => {
    setAuth(payload)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }

  const logout = async () => {
    await signOut(firebaseAuth)
    setAuth(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const value = useMemo(
    () => ({
      auth,
      token: auth?.token,
      user: auth?.user,
      firebaseUser,
      authLoading,
      isAuthenticated: Boolean(firebaseUser),
      login,
      logout
    }),
    [auth, firebaseUser, authLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
