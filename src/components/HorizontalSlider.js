import React from 'react';
import Swiper from 'react-id-swiper'

import ProjectTeaser from './ProjectTeaser'

import HorizontalSliderStyles from './HorizontalSlider.module.css'


const HorizontalSlider = () => {

  const horizontalParams = {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      speed: 200,
  }

  return (
      <Swiper {...horizontalParams}>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
        <div className={HorizontalSliderStyles.slide}><ProjectTeaser /></div>
      </Swiper>
  )
};

export default HorizontalSlider;
