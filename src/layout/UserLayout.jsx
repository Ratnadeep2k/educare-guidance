// components/RegularLayout.js
import React from 'react'
import NavbarTemp from '../components/NavbarTemp'
import Footer from '../components/Footer'

const RegularLayout = ({ children }) => {
  return (
    <>
      <NavbarTemp />
      {children}
      <Footer />
    </>
  )
}

export default RegularLayout
