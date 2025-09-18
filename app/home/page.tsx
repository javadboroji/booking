import Menu from '@/components/custom/Menu/Menu'
import React from 'react'
import Banner from './components/Banner/Banner'
import Footer from '@/components/custom/Footer/Footer'
import Poplaur from '../filter/components/Poplaur/Poplaur'
import Category from '../filter/components/Category/Category'
import { Plan } from '../filter/components/Plan/Plan'
import Ghallery from '../filter/components/Ghallery/Ghallery'
import TourGuide from '../filter/components/TourGuide/TourGuide'

function HomePage() {
  return (
    <div className='relative'>
      <Menu />
      <Banner />
      <Poplaur />
      <Category />
      <Plan />
      <Ghallery />
      <TourGuide />
      <Footer />
      {/* <LogoLoading/> */}
    </div>
  )
}

export default HomePage