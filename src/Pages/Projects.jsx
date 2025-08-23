import React from 'react'
import Projectscomponents from '../Components/Projectscomponents'
import { Project } from '../Components/Project'



const Projects = () => {
  return (
    <div className='bg-red-500 min-h-dvh px-16 pt-35 '>
      <Projectscomponents Data={Project}/>
    </div>
  )
}

export default Projects
