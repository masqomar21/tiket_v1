import type { Metadata } from 'next'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import { Poppins } from 'next/font/google'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Providers from '@/store/provider'

const poppins = Poppins({
  subsets: ['latin'], weight: ['400', '500', '600', '700', '800']
})

library.add(fas)

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
          <Providers>
              <body className={poppins.className}>{children}</body>
          </Providers>
      </html>
  )
}
