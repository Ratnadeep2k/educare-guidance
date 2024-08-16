import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LOGO_IMG } from '../../utils/constants'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import AuthContext from '../../components/context/authContext'
function LoginTemp () {
  const navigate = useNavigate()
  const { isAuthenticated, login } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    const success = await login(data)
    if (isAuthenticated) {
      navigate('/admin/dashboard')
    } else if (success) {
      toast.success('Logged in successfully')
      navigate('/admin/dashboard')
    } else {
      toast.error('Failed to login')
    }
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-300'>
      <ToastContainer />
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900'>
          <img className='w-14 h-14 mr-2' src={LOGO_IMG} alt='logo' />
          GUIDANCE EDUCARE
        </div>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign In
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Username
                </label>
                <input
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 characters'
                    },
                    maxLength: {
                      value: 20,
                      message: 'Username must not exceed 20 characters'
                    }
                  })}
                  type='text'
                  name='username'
                  id='username'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter username'
                />
                {errors.username && (
                  <p className='text-red-600 text-sm'>
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    },
                    maxLength: {
                      value: 20,
                      message: 'Password must not exceed 20 characters'
                    }
                  })}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.password && (
                  <p className='text-red-600 text-sm'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-600 border focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800'
              >
                Sign In{' '}
              </button>
              {errors && (
                <p className='text-red-600 text-sm text-center'>
                  Sign in is required
                </p>
              )}
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                New Here?{' '}
                <Link
                  to='/register'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginTemp
