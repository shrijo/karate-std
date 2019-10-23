import React from "react"
import Div100vh from 'react-div-100vh'
import HorizontalSlider from "../components/VerticalSlider"
import Hero from '../components/Hero'

import IndexStyles from './Index.module.css'

export default () =>

<div className={IndexStyles.container}>

  <Div100vh>
    <div><Hero /></div>
  </Div100vh>

  <HorizontalSlider />

</div>
