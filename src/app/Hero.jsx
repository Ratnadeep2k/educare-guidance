'use client'
import { Button, Typography, Card } from '@material-tailwind/react'

import image8Svg from '/src/assets/image/image8.svg'
function Hero () {
  return (
    <div className='!flex h-[55vh] w-full items-center justify-between px-10'>
      <img
        width={1200}
        height={1200}
        src={image8Svg}
        alt='bg-img'
        className='absolute -z-50  inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center'
      />
      <div className='container mx-auto mt-28'>
        <div className='grid grid-cols-12 text-center lg:text-left'>
          <Card className='mt-10 mr-10 col-span-full rounded-xl border bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7'>
            <Typography
              variant='h1'
              color='blue-gray'
              className='lg:text-5xl !leading-snug text-3xl lg:max-w-3xl'
            >
              Unlock the Power of the Coaching with Our Expert Courses
            </Typography>
            <Typography variant='lead' className='mb-10 mt-6 !text-gray-900'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English
            </Typography>
            <div className='mb-8 flex justify-center gap-4 lg:justify-start'></div>
            {/* <div className='grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start'>
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src={pinterestLogo} // Use imported SVG logo
                alt='pinterest'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src={netflixLogo} // Use imported SVG logo
                alt='netflix'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src={coinbaseLogo} // Use imported SVG logo
                alt='coinbase'
              />
              <img
                width={144}
                height={144}
                className='w-36 grayscale opacity-60'
                src={googleLogo} // Use imported SVG logo
                alt='google'
              />
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Hero
