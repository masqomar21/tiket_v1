import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faGear, faRightFromBracket, faTicket } from '@fortawesome/free-solid-svg-icons'
import BtnLink from '@/components/btn'
import { usePathname } from 'next/navigation'

export default function AccountInfoComponent () {
  const [isActive, setIsActive] = useState(false)
  const path = usePathname()
  let account: {
    name: string
    email: string
    profile: string
  } | null = {
    name: 'John Doe',
    email: 'jI8u6@example.com',
    profile: '/Static/fake/user-fake.png'
  }
  let content = null

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  const handleLogout = () => {
    account = null
  }

  if (account !== null) {
    content = <>
        <li className=' relative  rounded-lg border border-gray-500'>
            <button onClick={() => { handleIsActive() }} className='px-2 py-1 flex justify-between gap-5 items-center w-full'>
                <span className='ps-2 whitespace-nowrap'>{account.name}</span>
                <div className="flex gap-5 items-center">
                    <div className="w-10 aspect-square relative">
                        <Image
                            src={account.profile}
                            alt={account.name}
                            fill
                            sizes='200px'
                />
                    </div>
                    <FontAwesomeIcon icon={isActive ? faAngleDown : faAngleUp} />
                </div>
            </button>

            <div className={`${isActive ? 'block' : 'hidden'} z-20 top-14 w-full md:absolute bg-white divide-y divide-gray-100 rounded-lg border border-gray-400 shadow `}>
                <ul className="p-2 text-smtext-gray-200" >
                    <li>
                        <Link href={'/'} className="flex items-center gap-2 px-4 mt-1 py-2 rounded-lg hover:bg-gray-100 border border-gray-300 ">
                            <FontAwesomeIcon icon={faTicket} className='text-lg' />
                            <span>Tiket Saya</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center gap-2 px-4 mt-1 py-2 rounded-lg hover:bg-gray-100 border border-gray-300 ">
                            <FontAwesomeIcon icon={faGear} className='text-lg' />
                            <span>Account</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => { handleLogout() }} className="flex w-full items-center gap-2 px-4 mt-1 py-2 rounded-lg hover:bg-gray-100 border border-gray-300 ">
                            <FontAwesomeIcon icon={faRightFromBracket} className='text-lg' />
                            <span>logOut</span>
                        </button>
                    </li>
                </ul>
            </div>
        </li>
    </>
  } else {
      <li className='flex gap-5 items-center'>
          <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/register'}>Daftar</Link>
          <BtnLink text='Masuk' target={`/login?target=${path}`}/>
      </li>
  }

  return content
}
