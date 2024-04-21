// Importa los tipos necesarios
import { RowDataPacket } from 'mysql2'

// Define la interfaz del modelo de usuario
export interface UserServer {
  id: string
  userId: string
  serverId: string
  owner: number
}

// Convierte un resultado de fila de la base de datos en un objeto de usuario
export const parseUserServer = (row: RowDataPacket): UserServer => {
  return {
    id: row.id,
    userId: row.user_id,
    serverId: row.server_id,
    owner: row.owner,
  }
}
