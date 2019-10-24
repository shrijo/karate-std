import React from 'react';
//import Div100vh from 'react-div-100vh'
//import ProjectTeaserStyles from './ProjectTeaser.module.css'


const ProjectTeaser = (props) => (
  <div className="projectTeaserContainer">
    <div className="projectTeaserImage" style={{backgroundImage: props.teaserImage}}>
      <h5 className="projectTeaserTitle">{props.teaserTitle}</h5>
      <h6 className="projectTeaserSubTitle">{props.teaserSubTitle}</h6>
    </div>
  </div>
)

export default ProjectTeaser;
