import React from 'react';
import Div100vh from 'react-div-100vh'
import Swiper from 'react-id-swiper'
import HorizontalSliderStyles from './HorizontalSlider.module.css'


const HorizontalSlider = () => {

  const horizontalParams = {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination.swiper-pagination-h',
        clickable: true
    }
  }

  return (
    <Swiper  {...horizontalParams}>
      <div className={HorizontalSliderStyles.slide}>
        <Div100vh />
      </div>
      <div className={HorizontalSliderStyles.slide}>
        <Div100vh />
      </div>
    </Swiper>
    )
};

export default HorizontalSlider;
