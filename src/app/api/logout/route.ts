import { deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    deleteSession()
    
    return NextResponse.json({ error: 'Éxito' }, { status: 200 })
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 })
  }
}
