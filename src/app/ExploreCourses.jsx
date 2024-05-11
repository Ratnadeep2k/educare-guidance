'use client'

import { Typography } from '@material-tailwind/react'
import CourseCard from '../components/CourseCard'

// Import SVG images
import blog4 from '/src/assets/image/blogs/blog4.svg'
import blog3 from '/src/assets/image/blogs/blog3.svg'
import blog2 from '/src/assets/image/blogs/blog2.svg'
import blog5 from '/src/assets/image/blogs/blog5.svg'
import blog6 from '/src/assets/image/blogs/blog6.svg'

const COURSES = [
  {
    img: blog4, // Replace image path with imported SVG
    tag: 'Beginner • 25 Classes • 200 Students',
    title: 'Mathematics',
    label: 'from $99',
    desc: 'Our Mathematics course is designed to help you master the fundamentals of algebra, geometry, and calculus. Perfect for students and professionals alike.'
  },
  {
    img: blog3, // Replace image path with imported SVG
    tag: 'Medium • 10 Classes • 150 Students',
    title: 'English',
    label: 'from $199',
    desc: 'Our English course is perfect for non-native speakers looking to improve their language skills. Learn grammar, vocabulary, and pronunciation.'
  },
  {
    img: blog2, // Replace image path with imported SVG
    tag: 'Medium • 23 Classes • 590 Students',
    title: 'Science',
    label: 'from $499',
    desc: 'Our Science course covers a wide range of topics, including biology, chemistry, and physics. Perfect for students and professionals alike.'
  },
  {
    img: blog5, // Replace image path with imported SVG
    tag: 'Beginner • 35 Classes • 400 Students',
    title: 'Frontend Essentials Course',
    label: 'from $49',
    desc: 'For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.'
  },
  {
    img: blog6, // Replace image path with imported SVG
    tag: 'Medium • 10 Classes • 150 Students',
    title: 'Streamline Your CSS Workflow',
    label: 'from $99',
    desc: 'Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.'
  }
  // {
  //   img: blog4, // Replace image path with imported SVG
  //   tag: 'Medium • 33 Classes • 690 Students',
  //   title: 'Master Backend Development',
  //   label: 'from $299',
  //   desc: 'Dream of becoming a backend developer? Our intensive one-month Node.js course is your fast track to achieving that goal.'
  // }
]

export function ExploreCourses () {
  return (
    <section className='px-8'>
      <div className='container mx-auto mb-24 text-center'>
        <Typography variant='h2' color='blue-gray'>
          Explore Courses
        </Typography>
        <Typography
          variant='lead'
          className='mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8'
        >
          Browse through 1,000+ web development courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14'>
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}

export default ExploreCourses
