import React from 'react';
import Swiper from 'react-id-swiper';
import HorizontalSlider from './HorizontalSlider'
import VerticalSliderStyles from './VerticalSlider.module.css'


const VerticalSlider = () => {

  const verticalParams = {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination.swiper-pagination-v',
        clickable: true
    }
  }

  return (
    <Swiper className={VerticalSlider.wrapper} {...verticalParams}>
      <div className={VerticalSliderStyles.projects}>
        <HorizontalSlider />
      </div>
      <div className={VerticalSliderStyles.studio}>Slide 2</div>
    </Swiper>
    )
};

export default VerticalSlider;
