import { type NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  console.log('req', req.method)
  return NextResponse.json({ name: 'John Doe' })
}

export async function POST (req: NextRequest) {
  console.log('req', req.method)
  const body = await req.json()
  console.log('body', body)
  return NextResponse.json({ name: 'John Doe' })
}
