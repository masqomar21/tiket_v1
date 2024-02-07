'use client'
'use client'
import { faEye, faEyeSlash, faKey, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterForm () {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState({ email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [error, setErrors] = useState<Record<string, string>>({})

  const handleChangeData = (e: { target: { name: any, value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (data.email === '') {
      newErrors.email = 'Email is required'
    }

    if (data.password === '') {
      newErrors.password = 'Password is required'
    }
    if (data.confirmPassword === '') {
      newErrors.confirmPassword = 'Confirm Password is required'
      setData({
        ...data,
        password: '',
        confirmPassword: ''
      })
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
      setData({
        ...data,
        password: '',
        confirmPassword: ''
      })
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    setLoading(true)

    if (validateForm()) {
      // Perform login logic here, e.g., send a request to an authentication API
      const registerData = {
        email: data.email,
        password: data.password
      }
      console.log('Login submitted with:', registerData)
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
  return (
      <section className="min-w-[40%] text-gray-500">
          <div className="title font-bold  text-main-color">
              <span className='block text-xl md:text-3xl '>Welcome to TiketPapa</span>
              <span className='block text-xs md:text-lg'>Register to continue</span>
          </div>
          <form onSubmit={handleSubmit} className="block pt-7">
              <div className="py-2 md:py-3">
                  <label htmlFor="email" className="font-bold">Email</label>
                  <div className="flex gap-4 items-center pt-2">
                      <FontAwesomeIcon icon={faUser} />
                      <input type="text" id="email" className={` ${(error.email !== undefined) ? 'border-red-500' : 'border-gray-200'} block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color `} placeholder="Your email" name='email' value={data.email} onChange={handleChangeData} />
                  </div>
                  {(error.email !== '') && <p className='text-red-500 ps-10 text-xs md:text-base'>{error.email}</p>}
              </div>
              <div className="py-2 md:py-3">
                  <label htmlFor="password" className="font-bold">Password</label>
                  <div className="flex gap-4 items-center pt-2">
                      <FontAwesomeIcon icon={faKey} />
                      <input type={isShow ? 'text' : 'password'} id="password" className={`${(error.password !== undefined) ? 'border-red-500' : 'border-gray-200'} block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color`} placeholder="Your Password" name='password' value={data.password} onChange={handleChangeData} />
                  </div>
                  {(error.password !== '') && <p className='text-red-500 ps-10 text-xs md:text-base'>{error.password}</p>}
                  {(error.confirmPassword !== '') && <p className='text-red-500 ps-10 text-xs md:text-base'>{error.confirmPassword}</p>}
              </div>

              <div className="py-2 md:py-3">
                  <label htmlFor="password" className="font-bold">Confirm Password</label>
                  <div className="flex gap-4 items-center pt-2">
                      <FontAwesomeIcon icon={faKey} />
                      <input type={isShow ? 'text' : 'password'} id="confirmpassword" className={`${(error.confirmPassword !== undefined) ? 'border-red-500' : 'border-gray-200'} block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color`} placeholder="Your Password again" name='confirmPassword' value={data.confirmPassword} onChange={handleChangeData} />
                  </div>
                  {(error.confirmPassword !== '') && <p className='text-red-500 ps-10 text-xs md:text-base'>{error.confirmPassword}</p>}
              </div>

              <div className="flex justify-center">
                  <button type='button' onClick={() => { handleShowPassword() }} className='flex gap-1 items-center hover:underline hover:text-main-color'>
                      <FontAwesomeIcon icon={isShow ? faEye : faEyeSlash} />
                      <span>Tampilkan password</span>
                  </button>
              </div>

              <div className="w-fit mx-auto pt-6">
                  <button type='submit' className='bg-main-color hover:bg-cyan-700 py-btn-padding px-5 rounded-xl text-white hover:text-gray-400 shadow-md'>
                      <span>{loading ? <><FontAwesomeIcon icon={faSpinner} className='animate-spin' /> loading...</> : 'Register'}</span>
                  </button>
              </div>
          </form>

          <p className='text-center pt-5'>sudah punya akun ?,
              <Link href={'/login'} className='text-main-color font-bold'> Login Sekarang !!</Link>
          </p>
      </section>
  )
}