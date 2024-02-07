import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export interface userType {
  id: string
  username: string
  email: string
  password: string

}

interface CredentialInput { email: string, password: string }

export const option: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'insert your user name'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'insert your password'
        }
      },
      async authorize (credentials: CredentialInput | undefined, req: any): Promise<userType | null> {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', username: 'J Smith', email: 'jsmith@example.com', password: 'secret' }

        if (credentials?.email === user.email && credentials?.password === user.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        }
      }
    })
  ]

}
