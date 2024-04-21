// Importa los tipos necesarios
import { RowDataPacket } from 'mysql2'

// Define la interfaz del modelo de usuario
export interface User {
  id: string
  username: string
  password: string
  email: string
  createdAt: Date
  status: number
}

// Convierte un resultado de fila de la base de datos en un objeto de usuario
export const parseUser = (row: RowDataPacket): User => {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    password: row.password,
    createdAt: row.create_at,
    status: row.status,
  }
}