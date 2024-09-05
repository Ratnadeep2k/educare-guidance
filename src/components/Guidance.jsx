import react from 'react'
const Guidance = function () {
  return (
    <>
      <h1>Guidance integrated Coaching</h1>
      <Notification />
    </>
  )
}

const Notification = () => {
  return (
    <div>
      <h1 className='font-serif text-4xl border-l-8 text-blod '>
        Notification
      </h1>
      <p>
        Guidance Integrated Academy is a premier coaching institute in Delhi
        that provides coaching for JEE, NEET, and other competitive exams. It is
        known for its quality education and experienced faculty. The institute
        offers comprehensive study material, regular tests, doubt clearing
        sessions, and personalized attention to help students achieve their
        academic goals. With a track record of producing toppers in various
        competitive exams, Guidance Integrated Academy is a trusted name in the
        field of education.
      </p>
    </div>
  )
}

export default Guidance
