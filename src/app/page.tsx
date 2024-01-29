import HomeLanding from '@/components/clients/landing/homeLanding'
import Client from '@/layouts/Clients'

export default function Home () {
  return (
      <Client>
          <HomeLanding/>
          <main className="container mx-auto"></main>
      </Client>
  )
}
