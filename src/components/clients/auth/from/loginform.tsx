'use client'

import { faEye, faEyeSlash, faKey, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LoginForm () {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState({ email: '', password: '' })
  const [devieInfo, setDeviceInfo] = useState<{ userAgent: string, platform: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const [error, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Check if navigator exists (to avoid potential server-side rendering issues)
    if (typeof window !== 'undefined') {
      // Access device information from the navigator object
      const { userAgent, platform } = window.navigator
      setDeviceInfo({ userAgent, platform })
    }
  }, [])

  const handleChangeData = (e: { target: { name: any, value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    console.log(data)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (data.email === '') {
      newErrors.email = 'Email is required'
    }

    if (data.password === '') {
      newErrors.password = 'Password is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    if (validateForm()) {
      const loginData = {
        email: data.email,
        password: data.password,
        devieInfo
      }
      console.log('Form submitted', loginData)
      setData({
        ...data,
        password: ''
      })
    } else {
      console.log('Form validation failed', error.email, data)
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    // setLoading(false)
  }

  const handleShowPassword = () => {
    isShow ? setIsShow(false) : setIsShow(true)
  }
  const handleForgetpass = () => {
    alert('forget password')
  }

  return (
      <section className="min-w-[40%] text-gray-500">
          <div className="title font-bold  text-main-color">
              <span className='block text-xl md:text-3xl '>Welcome to TiketPapa</span>
              <span className='block text-xs md:text-lg'>Login to continue</span>
          </div>

          <form onSubmit={handleSubmit} className="block pt-7">

              {error.email !== undefined && <p className=' p-3 border-red-600 border rounded-lg bg-red-100 text-red-700'>{error.email} {error.password}</p>}
              <div className="py-3">
                  <label htmlFor="email" className="font-bold text-sm md:text-base">Email address</label>
                  <div className="flex gap-4 items-center pt-2">
                      <FontAwesomeIcon icon={faUser} />
                      <input type="text" id="email" name='email' className={` ${(error.email !== undefined) ? 'border-red-500' : 'border-gray-200'} block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color `} placeholder="Your email address" value={data.email} onChange={handleChangeData}/>
                  </div>
                  {(error.email !== '') && <p className='text-red-500 ps-10'>{error.email}</p>}
              </div>
              <div className="py-3">
                  <label htmlFor="password" className="font-bold text-sm md:text-base">Password</label>
                  <div className="flex gap-4 items-center pt-2">
                      <FontAwesomeIcon icon={faKey} />
                      <input type={isShow ? 'text' : 'password'} id="password" name='password' className={`${(error.password !== undefined) ? 'border-red-500' : 'border-gray-200'} block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color` } placeholder="Your Password" value={data.password} onChange={handleChangeData} />
                  </div>
                  {(error.password !== '') && <p className='text-red-500 ps-10'>{error.password}</p>}
              </div>

              <div className="flex justify-center">
                  <button type='button' onClick={() => { handleShowPassword() }} className='flex gap-1 items-center hover:underline hover:text-main-color'>
                      <FontAwesomeIcon icon={isShow ? faEye : faEyeSlash} />
                      <span>Tampilkan password</span>
                  </button>
              </div>
              <div className="flex justify-center pt-5">
                  <button type='button' onClick={() => { handleForgetpass() }} className=' hover:underline hover:text-main-color'>
                      <span>Lupa Password ?</span>
                  </button>
              </div>

              <div className="w-fit mx-auto pt-6">
                  <button type='submit' className='bg-main-color hover:bg-cyan-700 py-btn-padding px-5 rounded-xl text-white hover:text-gray-400 shadow-md'>
                      {loading ? <><FontAwesomeIcon icon={faSpinner} className='animate-spin' /> loading...</> : 'Login'}
                  </button>
              </div>
          </form>

          <p className='text-center pt-5'>belum punya akun ?,
              <Link href={'/register'} className='text-main-color font-bold'> dafata sekarang !!</Link>
          </p>
      </section>
  )
}
