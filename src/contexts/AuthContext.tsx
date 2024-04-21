'use client'
import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react'

// Definir el tipo del estado de autenticación
export interface AuthState {
  user: null | { username: string }
  isAuthenticated: boolean
}

// Definir los tipos de las acciones de autenticación
type AuthAction =
  | { type: 'LOGIN'; payload: { username: string } }
  | { type: 'LOGOUT' }

// Crear el contexto de autenticación
const AuthContext = createContext<{
  state: AuthState
  dispatch: Dispatch<AuthAction>
}>({
  state: { user: null, isAuthenticated: false },
  dispatch: () => null,
})

// Reducer para el contexto de autenticación
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          username: action.payload.username,
        },
        isAuthenticated: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

// Proveedor de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  })

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext)
