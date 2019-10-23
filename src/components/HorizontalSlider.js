import React from 'react';
import Swiper from 'react-id-swiper'
import Div100vh from 'react-div-100vh'

import ProjectTeaser from './ProjectTeaser'

import HorizontalSliderStyles from './HorizontalSlider.module.css'


const HorizontalSlider = () => {

  const horizontalParams = {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      speed: 220,
  }

  return (
    <Div100vh className={HorizontalSliderStyles.wrapper}>
      <Swiper {...horizontalParams}>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
      </Swiper>
    </Div100vh>
  )
};

export default HorizontalSlider;
