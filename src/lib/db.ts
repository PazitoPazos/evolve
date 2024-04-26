import 'server-only'

import { connectDB } from '@/lib/dbConfig'
import { UserData } from '@/lib/definitions'
import { cookies } from 'next/headers'
import { decrypt } from '@//lib/session'
import { cache } from 'react'
import { redirect } from 'next/navigation'

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
