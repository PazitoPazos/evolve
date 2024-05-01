import 'server-only'

import { connectDB } from '@/lib/dbConfig'
import { UserData } from '@/lib/definitions'
import { cookies } from 'next/headers'
import { decrypt } from '@//lib/session'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import { ServerItemDataRDP } from '@/types/types.d'

export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.user) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.user.userId }
})

export async function getUserByUsername(
  username: string
): Promise<UserData | null> {
  try {
    const connection = await connectDB()

    const [rows, _] = await connection.execute<UserData[]>(
      'SELECT * FROM users WHERE username = ?',
      [username]
    )

    connection.end()

    return rows.length ? rows[0] : null
  } catch (error) {
    console.error('Error fetching user by username:', error)
    throw new Error('Error fetching user by username')
  }
}

export async function getServerById(serverId: string): Promise<string | null> {
  try {
    const connection = await connectDB()

    const [rows, _] = await connection.execute<ServerItemDataRDP[]>(
      `SELECT s.id, s.name, s.description, s.icon, s.version
        FROM servers AS s
        WHERE s.id = ?`,
      [serverId]
    )

    connection.end()

    return JSON.stringify(rows[0]) || null
  } catch (error) {
    console.error('Error fetching server by id:', error)
    throw new Error('Error fetching server by id')
  }
}

export async function getAllServersFromUser(
  userId: string
): Promise<string | null> {
  try {
    const connection = await connectDB()

    const [rows, _] = await connection.execute<ServerItemDataRDP[]>(
      `SELECT s.id, s.name, s.description, s.icon, s.version
        FROM servers AS s JOIN users_servers AS us
        ON us.user_id = ?
        WHERE us.owner = 1`,
      [userId]
    )

    connection.end()

    return JSON.stringify(rows) || null
  } catch (error) {
    console.error('Error fetching servers:', error)
    throw new Error('Error fetching servers')
  }
}
