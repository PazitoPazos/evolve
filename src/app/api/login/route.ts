import { compare } from 'bcrypt'
import { getUserByUsername } from '@/lib/db'
import { User } from '@/models/users.model'
import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { UserData } from '@/lib/definitions'

const secret = process.env.SESSION_SECRET

export async function POST(req: NextRequest) {
  const { username, password }: User = await req.json()

  try {
    // Buscar al usuario por su nombre de usuario
    const user: UserData | null = await getUserByUsername(username)

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      )
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      )
    }

    if (!secret) {
      console.error(
        'Error: No se encontró la clave secreta en las variables de entorno'
      )
      process.exit(1) // Salir del programa con código de error
    }

    // 4. Crear la sesión de usuario
    await createSession({
      userId: user.id,
      username: user.username,
      email: user.email,
    })

    return NextResponse.json({ error: 'Éxito' }, { status: 200 })
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
