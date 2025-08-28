import Menu from '@/components/custom/Menu/Menu'
import React from 'react'
import Banner from './components/Banner/Banner'
import SearchBooking from './components/SearchBooking/SearchBooking'
import Footer from '@/components/custom/Footer/Footer'
import Poplaur from '../filter/components/Poplaur/Poplaur'
import Category from '../filter/components/Category/Category'
import { Plan } from '../filter/components/Plan/Plan'
import LogoLoading from '@/components/custom/Loading/LogoLoading'

function HomePage() {
  return (
    <div className='relative'>
      <Menu/>
      <Banner/>
      <Poplaur/>
      <Category/>
      <Plan/>
      <Footer/>
      {/* <LogoLoading/> */}
    </div>
  )
}

export default HomePage