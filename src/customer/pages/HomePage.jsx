import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from '../../Data/Men/men_kurta'
const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className=' space-y-10 py-20 px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Dress"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Gouns"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Pants"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Lengha"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage
