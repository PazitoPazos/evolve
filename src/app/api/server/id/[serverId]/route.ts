import { getAllServersFromUser, getServerById } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { serverId: string } }
) {
  const { serverId } = params

  try {
    // Aquí realizas la lógica para hacer la consulta, por ejemplo, una consulta a una base de datos
    const data = await getServerById(serverId)

    // Devolver los datos en formato JSON
    return NextResponse.json(data)
  } catch (error) {
    // En caso de error, devolver un mensaje de error en formato JSON
    return NextResponse.json(
      { error: 'Hubo un problema al procesar la solicitud' },
      { status: 500 }
    )
  }
}
