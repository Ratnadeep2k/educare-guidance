import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import app from '../../firebase/firebase'
import { getDatabase, ref, set, child } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { LOGO_IMG } from '../../utils/constants'

function SignUp () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()
  const [submitError, setSubmitError] = useState(null)

  const onSubmit = async data => {
    const { email, password } = data
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredentials.user
      writeUserData(user.uid, email, password)
      console.log('User signed up:', user)
    } catch (error) {
      console.error('Error submitting form', error.message)
      setSubmitError('Error submitting form, Please try again later')
    }
  }

  function writeUserData (userId, email, password) {
    const db = getDatabase(app)
    const usersRef = ref(db, 'users')
    set(child(usersRef, userId), {
      email: email,
      password: password
    })
      .then(() => {
        console.log('Data saved successfully')
      })
      .catch(error => {
        console.error('Error saving data: ', error)
      })
  }
  return (
    <div className='xl:flex xl:justify-center'>
      <div className='xl:w-1/2 mx-4 my-2 px-4 py-2'>
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
          <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
            <h1 className='text-center font-bold text-2xl'>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Full name
                </label>
                <div className='relative'>
                  <input
                    {...register('name', {
                      required: true,
                      message: 'Name is required',
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: 'Name can only contain letters'
                      }
                    })}
                    type='text'
                    placeholder='Full name'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-4'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Email
                </label>
                <div className='relative'>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address'
                      }
                    })}
                    type='email'
                    placeholder='Email address'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none '
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>
                      Email is required
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-4'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Phone Number
                </label>
                <div className='relative'>
                  <input
                    {...register('phoneNumber', {
                      required: true,
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Phone number must be 10 digits'
                      }
                    })}
                    type='tel'
                    placeholder='Phone number'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none'
                  />
                  {errors.phoneNumber && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-4'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    {...register('password', {
                      required: true,
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
                    placeholder='Password'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none '
                  />
                  {errors.password && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-6'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Re-type Password
                </label>
                <div className='relative'>
                  <input
                    {...register('retypePassword', {
                      required: true,
                      validate: {
                        matchesPassword: value => {
                          const { password } = getValues()
                          return (
                            password === value || 'Passwords does not match'
                          )
                        }
                      },
                      message: 'Password does not match'
                    })}
                    type='password'
                    placeholder='Re-enter password'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none '
                  />
                  {errors.retypePassword && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.retypePassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-5'>
                <input
                  type='submit'
                  value='Create account'
                  className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 transition hover:bg-opacity-90'
                />

                {submitError && <p className='text-red-500'>{submitError}</p>}
              </div>

              <button className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'>
                Sign up with Google
              </button>

              <div className='mt-6 text-center'>
                <p>
                  Already have an account?{' '}
                  <Link to='/login' className='text-primary'>
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
