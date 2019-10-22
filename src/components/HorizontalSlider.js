import React from 'react';
import Swiper from 'react-id-swiper'


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
    <Swiper {...horizontalParams}>
      <div>Project 1</div>
      <div>Project 2</div>
    </Swiper>
    )
};

export default HorizontalSlider;
