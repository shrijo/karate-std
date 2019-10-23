import React from "react"
import Div100vh from 'react-div-100vh'
import HorizontalSlider from "../components/HorizontalSlider"
import Hero from '../components/Hero'

import IndexStyles from './Index.module.css'

export default () =>

<div className={IndexStyles.container}>
  <div className={IndexStyles.outerWrapper}>
    <Div100vh className={IndexStyles.wrapper}>
      <Hero />
    </Div100vh>
  </div>
    <div className={IndexStyles.sliderWrapper}>
      <HorizontalSlider />
    </div>
</div>
