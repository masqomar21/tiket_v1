'use client'
import { faAngleDown, faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AccountInfoComponent from './acccountInfo'

export default function NavClient () {
  const [mobileActive, setMobileActive] = useState(false)
  const [isTypeActive, setIsTypeActive] = useState(false)

  const logo = '/Static/image/logo_tiket_papa.png'

  const handleNavigation = () => {
    mobileActive ? setMobileActive(false) : setMobileActive(true)
  }

  const handleTypeActive = () => {
    isTypeActive ? setIsTypeActive(false) : setIsTypeActive(true)
  }

  return (
      <nav className=" bg-white sticky md:relative top-0 z-20">
          <div className=" container mx-auto flex  justify-between items-center py-3 px-4">

              <Link href={'/'} className=' h-10 w-1/2 relative'>
                  <Image
                      src={logo}
                      alt='logo tiket papa'
                      className='drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] object-contain object-left'
                      sizes='500px'
                      fill

                  />
              </Link>
              <button className='md:hidden text-2xl text-gray-700' onClick={ () => { handleNavigation() }}>
                  <FontAwesomeIcon icon={faBars}/>
              </button>

              <ul className=' hidden md:flex gap-10 items-center text-text-color font-semibold'>
                  <li>
                      <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Beranda </Link>
                  </li>
                  <li>
                      <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/wisata'}>Pariwisata</Link>
                  </li>
                  <li className='relative'>
                      <button onClick={() => { handleTypeActive() }} className='flex items-center gap-4 drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>
                          <span className='whitespace-nowrap'>Type Wisata</span>
                          <FontAwesomeIcon icon={isTypeActive ? faAngleDown : faAngleUp} />
                      </button>

                      <div className={`${isTypeActive ? 'block' : 'hidden'} z-20 top-10 w-full md:absolute bg-white divide-y divide-gray-100 rounded-lg border border-gray-400 shadow `}>
                          <ul className="py-2 text-smtext-gray-200" >
                              <li>
                                  <Link href={'/wisata?type=pantai'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                      <span>Pantai</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href={'/wisata?type=hutan'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                      <span>hutan</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href={'/wisata?type=gunung'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                      <span>gunung</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href={'/wisata?type=taman'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                      <span>taman</span>
                                  </Link>
                              </li>

                          </ul>
                      </div>
                  </li>
                  <AccountInfoComponent />
              </ul>
          </div>
          <ul className= {`text-text-color font-semibold z-10 absolute md:hidden bg-white w-full px-4 ${mobileActive ? 'block' : 'hidden'}`}>
              <AccountInfoComponent />
              <li className=''>
                  <Link className='py-5 block drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)] hover:bg-main-color' href={'/'}>Beranda </Link>
              </li>
              <li className=''>
                  <Link className='py-5 block drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]  hover:bg-main-color'href={'/wisata'}>Pariwisata</Link>
              </li>
              <li className='py-5 relative'>
                  <button onClick={() => { handleTypeActive() }} className='flex items-center gap-4 drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>
                      <span className='whitespace-nowrap'>Type Wisata</span>
                      <FontAwesomeIcon icon={isTypeActive ? faAngleDown : faAngleUp} />
                  </button>
                  <div className={`${isTypeActive ? 'block' : 'hidden'} z-20 top-10 w-full mt-3 bg-white divide-y divide-gray-100 rounded-lg border border-gray-400 shadow `}>
                      <ul className="py-2 text-smtext-gray-200" >
                          <li>
                              <Link href={'/'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                  <span>Pantai</span>
                              </Link>
                          </li>
                          <li>
                              <Link href={'/'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                  <span>hutan</span>
                              </Link>
                          </li>
                          <li>
                              <Link href={'/'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                  <span>gunung</span>
                              </Link>
                          </li>
                          <li>
                              <Link href={'/'} className="block p-2 rounded-lg hover:bg-gray-100  ">
                                  <span>taman</span>
                              </Link>
                          </li>

                      </ul>
                  </div>
              </li>
          </ul>
          <div className={`md:hidden absolute z-0 bg-opacity-30 bg-black w-full min-h-screen ${mobileActive ? 'block' : 'hidden'}`} onClick={() => { handleNavigation() }}>

          </div>
      </nav>
  )
}
