import Image from 'next/image'

export default function HomeLanding () {
  const image = [
    '/Static/image/header-up.png',
    '/Static/image/header-down.png'
  ]

  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <section className='landing'>
          <Image
              src={image[0]}
              alt='logo tiket papa'
              className='mb-2'
              width={1920}
              height={0}
              priority
            />
          <div className='grid grid-cols-5 grid-rows-2 gap-2 h-52 md:h-96'>
              <div className='col-span-2 relative'>

                  <Image
                      src={contentImage[0]}
                      alt='logo tiket papa'
                      className='object-cover'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className='col-span-1 row-span-2 relative'>
                  <Image
                      src={contentImage[1]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className="col-span-2 row-span-2 relative">
                  <Image
                      src={contentImage[2]}
                      alt='logo tiket papa'
                      className='object-cover object-center'
                      fill={true}
                      sizes="500px"
                   />
              </div>
              <div className='col-span-2 relative'>

                  <Image
                      src={contentImage[3]}
                      alt='logo tiket papa'
                      className='object-cover object-bottom'
                      fill={true}
                      sizes="500px"
                      // width={0}
                      // height={0}
                  />
              </div>
          </div>
          <Image
              src={image[1]}
              alt='logo tiket papa'
              className=' mt-2'
              width={1920}
              height={0}
              priority
            />
      </section>
  )
}
