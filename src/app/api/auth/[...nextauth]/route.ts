import prisma from '@/lib/db'
import { comparePassword } from '@/lib/untilities'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const option: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        },
        deviceInfo: {
          label: 'deviceInfo',
          type: 'text'
        }
      },
      async authorize (credentials) {
        const { email, password, deviceInfo } = credentials as {
          email: string
          password: string
          deviceInfo: string
        }

        const user = await prisma.usersAccount.findUnique({
          where: { email },
          include: {
            userData: true
          }
        })
        console.log(deviceInfo)

        if (user === null) {
          return null
        } else {
          const passwordConfrim = await comparePassword(password, user.password)

          if (!passwordConfrim) {
            return null
          }
          const loginDevice = await prisma.loginDevice.findFirst({
            where: {
              deviceName: deviceInfo,
              userAccountId: user.id
            }
          })

          if (loginDevice === null) {
            await prisma.loginDevice.create({
              data: {
                deviceName: deviceInfo,
                userAccountId: user.id
              }
            })
          }
          return user
        }
      }
    })
  ],
  callbacks: {
    async jwt ({ token, account, profile, user }: any) {
      if (account?.provider === 'credentials') {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.image = user.image
        token.role = user.role
      }
      return token
    },

    async session ({ session, token }: any) {
      if ('email' in token) session.user.email = token.email
      if ('id' in token) session.user.id = token.id
      if ('name' in token) session.user.name = token.name
      if ('role' in token) session.user.role = token.role
      if ('image' in token) session.user.image = token.image

      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(option)

export { handler as GET, handler as POST }
