import React from 'react';
import Swiper from 'react-id-swiper'
import HorizontalSlider from './HorizontalSlider'


const VerticalSlider = () => {

  const verticalParams = {
      direction: 'vertical',
  }

  return (
    <Swiper {...verticalParams}>

      <div><h1>Hero</h1></div>

      <div><HorizontalSlider /></div>

      <div>Studio</div>

    </Swiper>
    )
};

export default VerticalSlider;
