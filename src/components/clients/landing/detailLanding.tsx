'use Clinet'
import Image from 'next/image'

export default function DetailLanding ({ images }: any) {
  return (
      <section className='landing mb-2'>

          <div className='grid grid-cols-5 grid-rows-2 gap-2 h-44 md:h-80'>
              <div className='col-span-2 row-span-1 relative'>

                  <Image
                      src={images[0]}
                      alt='logo tiket papa'
                      className='object-cover'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className='col-span-2 row-span-2 relative'>
                  <Image
                      src={images[1]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className="col-span-1 row-span-2 relative">
                  <Image
                      src={images[2]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className='col-span-2 relative'>

                  <Image
                      src={images[3]}
                      alt='logo tiket papa'
                      className='object-cover object-bottom'
                      fill={true}
                      sizes="500px"
                  />
              </div>
          </div>
      </section>
  )
}
