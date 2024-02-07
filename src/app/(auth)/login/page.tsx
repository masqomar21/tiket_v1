'use client'

import LoginForm from '@/components/clients/auth/from/loginform'
// import LoginForm from '@/components/Clinet/Login/LoginForm'
import Image from 'next/image'

export default function Login () {
  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  const logo = '/Static/image/logo_tiket_papa.png'
  return (
      <main className="h-screen grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 bg-gray-100">
          <div className="relative">
              <div className="absolute w-full h-1/4 md:h-1/3 md:bottom-0 grid grid-cols-5 grid-rows-3 gap-2">
                  <div className="row-span-2 relative">
                      <Image
                          src={contentImage[1]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className="col-span-2  row-span-1 relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className=" row-span-3 relative">
                      <Image
                          src={contentImage[3]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className="row-span-2 relative">
                      <Image
                          src={contentImage[3]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className="col-span-2 relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                      />
                  </div>

              </div>
              <div className="absolute  w-full z-10 h-full backdrop-filter backdrop-blur-[2px]"></div>

              <div className="absolute z-20 w-full h-full pb-2 md:h-[70vh] flex md:px-10 gap-5 pt-20 md:pt-32 flex-col justify-center items-center">
                  <div className="md:h-20 h-10 w-full relative">
                      <Image
                          src={logo}
                          alt='logo tiket papa'
                          className='object-contain'
                          fill={true}
                          sizes='500px'
                      />

                  </div>
                  <p className="font-bold md:text-3xl text-xl text-main-color text-center">Pesan Tiket Wisatamu dan Mulai Petualangan !!</p>
                  <p className='font-semibold text-xs md:text-base text-gray-500'>Login Untuk melihat selengkapnya</p>
              </div>
          </div>
          <div className="relative row-span-2 p-0 m-0">
              <div className="absolute z-30 rounded-l-2xl shadow-2xl w-full h-full flex justify-center items-start pt-3 md:pt-0 md:items-center bg-white">
                  <LoginForm />
              </div>
          </div>
      </main>

  )
}
