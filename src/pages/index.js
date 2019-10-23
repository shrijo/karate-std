import React from "react"
import Div100vh from 'react-div-100vh'
import HorizontalSlider from "../components/HorizontalSlider"
import Hero from '../components/Hero'

import IndexStyles from './Index.module.css'

export default () =>

<div className={IndexStyles.container}>

    <Div100vh className={IndexStyles.wrapper}>
      <Hero />
    </Div100vh>

    <Div100vh className={IndexStyles.wrapper}>
      <HorizontalSlider />
    </Div100vh>
    
</div>
