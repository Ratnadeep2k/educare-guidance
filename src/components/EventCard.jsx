import React from 'react'

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button
} from '@material-tailwind/react'

function EventCard ({ img, title, desc, buttonLabel }) {
  return (
    <Card color='transparent' shadow={false}>
      <CardHeader floated={false} className='mx-0 mt-0 mb-6 h-48'>
        <img
          width={768}
          height={768}
          src={img}
          alt={title}
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody className='p-0'>
        <Typography variant='h5' className='mb-2'>
          {title}
        </Typography>

        <Typography className='mb-6 font-normal !text-gray-500'>
          {desc}
        </Typography>
        <Button color='gray' size='sm'>
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  )
}

export default EventCard
