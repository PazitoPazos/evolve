'use client'
import { SessionPayload } from '@/lib/definitions'
import { createContext, useContext, ReactNode } from 'react'

// Crear el contexto de autenticación
const AuthContext = createContext<{
  session: SessionPayload | null | undefined
}>({
  session: null,
})

// Proveedor de autenticación
export const AuthProvider: React.FC<{
  session: SessionPayload | undefined
  children: ReactNode
}> = ({ session, children }) => {
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  )
}

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext)
