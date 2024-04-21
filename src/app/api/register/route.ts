import { connectDB } from '@/lib/dbConfig'
import { User } from '@/models/users.model'
import { hash } from 'bcrypt'
import { RowDataPacket } from 'mysql2'
import { NextRequest, NextResponse } from 'next/server'

// Define el tipo de los resultados de la consulta
interface ICount extends RowDataPacket {
  count: number
}

// Handler para la ruta /api/register
export async function POST(req: NextRequest) {
  try {
    // Conectar a la base de datos
    const connection = await connectDB()

    // Obtener los datos del cuerpo de la solicitud
    const { username, password, email }: User = await req.json()

    // Verificar si el usuario ya existe
    const [rows, _] = await connection.execute<ICount[]>(
      'SELECT COUNT(*) AS count FROM users WHERE username = ?',
      [username]
    )

    const userExists = rows[0].count > 0

    // Si el usuario ya existe, devolver un error
    if (userExists) {
      return NextResponse.json(
        { error: 'El nombre de usuario ya está en uso' },
        { status: 400 }
      )
    }

    // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await hash(password, 10) // 10 es el número de rondas de hashing

    // Insertar el nuevo usuario en la base de datos con la contraseña encriptada
    await connection.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    )

    // Cerrar la conexión a la base de datos
    await connection.end()

    // Devolver una respuesta exitosa
    return NextResponse.json(
      { message: 'Usuario registrado exitosamente' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al registrar usuario:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
