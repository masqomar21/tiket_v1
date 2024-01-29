import Link from 'next/link'

interface props {
  text: string
  target: any
}
export default function BtnLink ({ text, target }: props) {
  return (
      <Link className='bg-main-color hover:bg-cyan-700 py-btn-padding px-5 rounded-xl text-white hover:text-gray-400 shadow-md' href={target}>
          <span className='drop-shadow-[0_5px_20px_rgba(0,0,0,1)]'>{text}</span>
      </Link>
  )
}
