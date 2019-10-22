import React from 'react';
import Swiper from 'react-id-swiper'
import Div100vh from 'react-div-100vh'
import HorizontalSlider from './HorizontalSlider'
import VerticalSliderStyles from './VerticalSlider.module.css'


const VerticalSlider = () => {

  const verticalParams = {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination.swiper-pagination-v',
        clickable: true
    }
  }

  return (
    <Swiper className={VerticalSliderStyles.container} {...verticalParams}>

      <div className={VerticalSliderStyles.slide}>
        <Div100vh />
      </div>

      <div className={VerticalSliderStyles.slide}>
        <HorizontalSlider />
      </div>

      <div className={VerticalSliderStyles.slide}></div>

    </Swiper>
    )
};

export default VerticalSlider;
