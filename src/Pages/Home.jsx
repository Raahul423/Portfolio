
import Frontpage from '../Components/Frontpage'
import { useNavigate } from 'react-router-dom'
import FrontComponent from '../Components/FrontComponent'
import { Data } from '../Images'
import Lightcomponent from '../Components/Lightcomponent'
import { useState } from 'react'
import Basic from '../Components/Basic'
import Partical from '../Components/Partical'

const Home = () => {
  const navigate = useNavigate()
  const [click,setClick]=useState(false)
  
      const handleclick =()=>{
          setClick(!click)
      }

  return (
    <div className=' relative overflow-hidden w-full min-h-dvh z-0'>
      <Partical/>
      <Basic click={click} Data={Data}/>
      <Lightcomponent click={click}/>
      <Frontpage Data={Data} handleclick={handleclick} click={click}/>
      <FrontComponent navigate={navigate} Data={Data} click={click}/>
    </div>
  )
}

export default Home
