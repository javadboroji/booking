import Menu from '@/components/custom/Menu/Menu'
import React from 'react'
import Banner from './components/Banner/Banner'
import SearchBooking from './components/SearchBooking/SearchBooking'
import Footer from '@/components/custom/Footer/Footer'

function HomePage() {
  return (
    <div className='relative'>
      <Menu/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default HomePage