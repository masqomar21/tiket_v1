import FooterClient from '@/components/clients/footer'
import NavClient from '@/components/clients/Nav/nav'

export default function Client ({ children }: { children: React.ReactNode }) {
  console.log('layout client')
  return (
      <>
          <NavClient/>
          {children}
          <FooterClient/>
      </>
  )
}
