import React from 'react'
import Projectscomponents from '../Components/Projectscomponents'
import { Project } from '../Components/Datafiles/Project'






const Projects = () => {
  return (
    <div className=' min-h-dvh md:px-16 pt-35 max-sm:pt-20'>
      <Projectscomponents Data={Project}/>
    </div>
  )
}

export default Projects
