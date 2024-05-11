import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button
} from '@material-tailwind/react'

function CourseCard ({ img, tag, title, desc, label }) {
  return (
    <Card className='border'>
      <CardHeader className='h-64'>
        <img
          width={768}
          height={768}
          src={img}
          alt={title}
          className='h-full w-full object-cover scale-[1.1]'
        />
      </CardHeader>
      <CardBody>
        <div className='flex items-center gap-2'>
          <Typography
            variant='small'
            color='blue'
            className='mb-2 font-normal text-gray-500'
          >
            {tag}
          </Typography>
        </div>
        <Typography
          variant='h5'
          className='mb-2 normal-case text-blue-gray-900'
        >
          {title}
        </Typography>
        <Typography className='mb-6 font-normal !text-gray-500'>
          {desc}
        </Typography>
        <Button variant='outlined'>{label}</Button>
      </CardBody>
    </Card>
  )
}

export default CourseCard
