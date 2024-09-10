import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useContext } from 'react'
import AuthContext from '../../components/context/authContext'
function SignUpTemp () {
  const { isAuthenticated } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        data
      )
      const token = response.data.token
      localStorage.setItem('token', token)
      if (response.status === 201) {
        isAuthenticated(true)
      } else {
        isAuthenticated(false)
      }
    } catch (error) {
      console.error('Error submitting form', error.message)
    }
  }

  const password = watch('password', '')

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage:
          'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)'
      }}
    >
      <div className='w-full max-w-2xl p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg mt-10'>
        <h2 className='text-3xl font-bold text-gray-600 text-center mb-8'>
          Create an account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='flex flex-col items-center'>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('name', {
                required: 'Name is required'
              })}
            />
            {errors.name && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <input
              type='email'
              placeholder='Email'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <input
              type='text'
              placeholder='Phone'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit phone number'
                }
              })}
            />
            {errors.phone && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <input
              type='password'
              placeholder='Password'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
            />
            {errors.password && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <select
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('stream', {
                required: 'Stream is required'
              })}
            >
              <option value='' disabled selected>
                Select Stream
              </option>
              <option value='Science'>Science</option>
              <option value='Commerce'>Commerce</option>
              <option value='Arts'>Arts</option>
            </select>
            {errors.stream && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.stream.message}
              </span>
            )}
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-1/2 py-3 mt-4 bg-blue-600 text-white rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className='text-center text-gray-700 mt-6'>
          Already have an account?{' '}
          <a
            href='/login'
            className='text-blue-500 hover:text-blue-600 underline'
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUpTemp
