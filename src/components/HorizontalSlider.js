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

        <div className={HorizontalSliderStyles.slide}>
          <ProjectTeaser
          teaserTitle="Danielsan"
          teaserSubTitle="Um Honig zu machen junge Bienen brauchen junge Blumen, nicht alte Pflaume."
          teaserImage="'url(../images/crane-kick.gif)'"
          />
        </div>
        
        <div className={HorizontalSliderStyles.slide}>
          <ProjectTeaser
          teaserTitle="Mr. Miyagi"
          teaserSubTitle="Verlieren gegen Feind okay, aber niemals verlieren gegen Angst."
          teaserImage="'url(../images/crane-kick.gif)'"
          />
        </div>

        <div className={HorizontalSliderStyles.slide}>
          <ProjectTeaser
          teaserTitle="Cobra Kai"
          teaserSubTitle="Auftragen, polieren, auftragen, pollieren"
          teaserImage="'url(../images/crane-kick.gif)'"
          />
        </div>

        <div className={HorizontalSliderStyles.slide}>
          <ProjectTeaser
          teaserTitle="LaRusso"
          teaserSubTitle="Lernen zu stehen, dann lernen zu fliegen."
          teaserImage="'url(../images/crane-kick.gif)'"
          />
        </div>

      </Swiper>
  )
};

export default HorizontalSlider;
