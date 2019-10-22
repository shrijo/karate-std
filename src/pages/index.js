import React from "react"
import VerticalSlider from "../components/VerticalSlider"
import Div100vh from 'react-div-100vh'
import IndexStyles from './Index.module.css'

export default () =>

<Div100vh className={IndexStyles.container}>
  <VerticalSlider />
</Div100vh>
