import prisma from '@/lib/db'
import { hashPassword } from '@/lib/untilities'
import { type UsersAccount } from '@prisma/client'
import { type NextRequest } from 'next/server'

export async function POST (request: NextRequest) {
  try {
    const requestbody = await request.json() as UsersAccount

    const emailCheker = await prisma.usersAccount.findFirst({
      where: {
        email: requestbody.email
      },
      select: {
        email: true
      }
    })

    if (emailCheker !== null) {
      return new Response(JSON.stringify({ message: 'Email already in use' }), { status: 400 })
    }
    requestbody.password = await hashPassword(requestbody.password)
    await prisma.usersAccount.create({
      data: {
        email: requestbody.email,
        password: requestbody.password
      }
    })

    return new Response(JSON.stringify({ message: 'Register Success' }), { status: 200 })
  } catch (error: any) {
    console.error(error)
    return new Response(JSON.stringify(error.message), { status: 500 })
  }
}
