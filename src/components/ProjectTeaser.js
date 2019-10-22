import React from 'react';
import Div100vh from 'react-div-100vh'
import ProjectTeaserStyles from './ProjectTeaser.module.css'


const ProjectTeaser = () => (
  <div className={ProjectTeaserStyles.container}>
    <div className={ProjectTeaserStyles.image}>
      <h5 className={ProjectTeaserStyles.title}>Customer</h5>
      <h6 className={ProjectTeaserStyles.subTitle}>Catchy catchphrase</h6>
    </div>
  </div>
)

export default ProjectTeaser;
