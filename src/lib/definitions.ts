import { JWTPayload } from 'jose'
import { RowDataPacket } from 'mysql2'

export interface UserData extends RowDataPacket {
  id: string
  username: string
  email: string
  password: string
  created_at: Date
  status: number
}

export interface SessionPayload extends JWTPayload {
  userId: string
  username: string
  email: string
}
