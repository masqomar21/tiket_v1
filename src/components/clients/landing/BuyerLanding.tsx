import Image from 'next/image'

export default function BuyerLandingComponent () {
  const images = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <section>
          <div className='grid grid-cols-5 gap-2 h-28 md:h-52'>
              <div className='col-span-2 relative'>
                  <Image
                      src={images[0]}
                      alt='logo tiket papa'
                      className='object-cover'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className='col-span-1 relative'>
                  <Image
                      src={images[1]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className="col-span-2  relative">
                  <Image
                      src={images[2]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
          </div>
      </section>
  )
}
