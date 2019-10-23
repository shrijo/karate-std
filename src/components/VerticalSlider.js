import React from 'react';
import Swiper from 'react-id-swiper'
import HorizontalSlider from './HorizontalSlider'




const VerticalSlider = () => {

  const verticalParams = {
      direction: 'vertical',
  }

  return (
    <Swiper {...verticalParams}>

      <div><HorizontalSlider /></div>

      <div>Studio</div>

    </Swiper>
    )
};

export default VerticalSlider;
