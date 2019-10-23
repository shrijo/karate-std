import React from 'react';
import Div100vh from 'react-div-100vh'
import HeroStyles from './Hero.module.css'


const Hero = () => (
  <div className={HeroStyles.outerWrapper}>
    <Div100vh className={HeroStyles.container}>
      <h1 className={HeroStyles.logo}>KARATE STUDIO</h1>
    </Div100vh>
  </div>
)

export default Hero;
