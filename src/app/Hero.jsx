'use client'
import { Button, Typography, Card } from '@material-tailwind/react'

function Hero () {
  return (
    <div className='!flex h-[55vh] w-full items-center justify-between px-10'>
      <img
        width={1200}
        height={1200}
        src='/src/assets/image/image8.svg'
        alt='bg-img'
        className='absolute -z-50  inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center'
      />
      <div className='container mx-auto mt-28'>
        <div className='grid grid-cols-12 text-center lg:text-left'>
          <Card className='col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7'>
            <Typography
              variant='h1'
              color='blue-gray'
              className='lg:text-5xl !leading-snug text-3xl lg:max-w-3xl'
            >
              Unlock the Power of the Web with Our Expert Courses
            </Typography>
            <Typography variant='lead' className='mb-10 mt-6 !text-gray-900'>
              Are you ready to embark on an exciting journey into the world of
              web development? Look no further! We are your trusted partner for
              mastering the art of web development.
            </Typography>
            <div className='mb-8 flex justify-center gap-4 lg:justify-start'>
              <Button color='gray'>view all courses</Button>
              <Button color='gray' variant='outlined'>
                see pricing
              </Button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start'>
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src='/src/assets/logos/logo-pinterest.svg'
                alt='pinterest'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src='/src/assets/logos/logo-netflix.svg'
                alt='netflix'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src='/src/assets/logos/logo-coinbase.svg'
                alt='coinbase'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src='/src/assets/logos/logo-google.svg'
                alt='google'
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Hero
