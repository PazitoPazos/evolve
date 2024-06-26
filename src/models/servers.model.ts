// Importa los tipos necesarios
import { RowDataPacket } from 'mysql2'

// Define la interfaz del modelo de usuario
export interface Server {
  id: string
  name: string
  description: string
  icon: string
  version: string
}

// Convierte un resultado de fila de la base de datos en un objeto de usuario
export const parseServer = (row: RowDataPacket): Server => {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    icon: row.icon,
    version: row.version,
  }
}
