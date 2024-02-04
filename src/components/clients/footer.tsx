import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterClient () {
  const socialMedia = [
    {
      name: 'facebook',
      icon: <FontAwesomeIcon icon={faSquareFacebook} />,
      link: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      icon: <FontAwesomeIcon icon={faSquareXTwitter} />,
      link: 'https://twitter.com'
    },
    {
      name: 'Instagram',
      icon: <FontAwesomeIcon icon={faSquareInstagram} />,
      link: 'https://instagram.com'
    },
    {
      name: 'LinkedIn',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: 'https://linkedin.com'
    },
    {
      name: 'Youtube',
      icon: <FontAwesomeIcon icon={faYoutube} />,
      link: 'https://youtube.com'
    }
  ]
  const logo = '/Statick/image/logo_tiket_papa.png'
  return (
      <>
          <div className='mt-10 mb-5  border-t-2'></div>
          <footer className="footer container mx-auto px-2">
              <div className="logo grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="image h-10 md:h-16 relative">
                      <Image
                          src={logo}
                          alt='logo tiket papa'
                          className='object-contain object-left'
                          fill={true}
                          sizes='500px'
                          priority
                />
                  </div>
                  <div className="caption">
                      <p>Tiket Papa</p>
                  </div>
              </div>
              <div className="information grid grid-cols-2 md:grid-cols-5 gap-10 my-10">
                  <div className='information'>
                      <h1 className='font-bold'>Navigation</h1>

                      <div className="link-component text-gray-400 pt-5">
                          <Link className='py-1 block' href={'/'}>Beranda</Link>
                          <Link className='py-1 block' href={'/'}>Wisata</Link>
                          <Link className='py-1 block' href={'/'}>Pariwisata</Link>
                      </div>
                  </div>
                  {/* <div className="support">
                      <h1 className='font-bold'>Support</h1>

                      <div className="link-component text-gray-400 pt-5">
                          <Link className='py-1 block' href={'/'}>Help Center</Link>
                          <Link className='py-1 block' href={'/'}>Report a Bug</Link>
                          <Link className='py-1 block' href={'/'}>Chat Support</Link>
                      </div>
                  </div>
                  <div className="contact">
                      <h1 className='font-bold'>Contact</h1>

                      <div className="link-component text-gray-400 pt-5">
                          <a className='py-1 block' href={'/'}>About Us</a>
                          <a className='py-1 block' href={'/'}>Privacy Police</a>
                      </div>
                  </div> */}
                  {/* <div className="office md:col-span-2">
                      <div className="office">
                          <h1 className='font-bold'>Office</h1>

                          <div className="link-component text-gray-400 pt-5">
                              <a className='py-1 block' href={'/'}>PT. TiketPAPA Inc. No. 88
                                  Jl. Gatot Subroto Lt. 2, Kav. X, Lampung</a>
                          </div>
                      </div>
                      <div className="job-time mt-5">
                          <h1 className="font-bold">Jam Kerja</h1>
                          <div className="link-component text-gray-400 pt-5">
                              <span className='py-1 block' >09.00-16.00</span>
                          </div>
                      </div>

                  </div> */}
              </div>
              <div className="grid md:grid-cols-2 py-5 mt-6">
                  <div className="text-gray-500 text-center md:text-start">
                      <span>Copyright © 2024 TIKETPAPA | All Rights Reserved </span>
                  </div>
                  <div className="flex gap-10 justify-center md:justify-end text-main-color text-2xl">
                      {socialMedia.map((item, index) => {
                        return (
                            <a key={index} target='_blank' rel="noopener noreferrer" href={item.link}>
                                {item.icon}
                            </a>
                        )
                      })}
                      {/* <a target='_blank' rel="noopener noreferrer" href={socialMedia.facebook}>
                          <FontAwesomeIcon icon={faSquareFacebook}/>
                      </a>
                      <a target='_blank' rel="noopener noreferrer" href={socialMedia.Twitter}>
                          <FontAwesomeIcon icon={faSquareXTwitter}/>
                      </a>
                      <a target='_blank' rel="noopener noreferrer" href={socialMedia.Instagram}>
                          <FontAwesomeIcon icon={faSquareInstagram}/>
                      </a>
                      <a target='_blank' rel="noopener noreferrer" href={socialMedia.LinkedIn}>
                          <FontAwesomeIcon icon={faLinkedin}/>
                      </a>
                      <a target='_blank' rel="noopener noreferrer" href={socialMedia.Youtube}>
                          <FontAwesomeIcon icon={faYoutube}/>
                      </a> */}
                  </div>

              </div>
          </footer>
      </>
  )
}
