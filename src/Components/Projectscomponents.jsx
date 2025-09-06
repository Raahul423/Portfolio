import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projectscomponents = ({ Data }) => {

  const [isclick, setIsclick] = useState(null)

  let Boxes = Data.map((item) => {
    return (
      <div className='h-80 max-sm:h-60 md:w-140 max-sm:w-80 flex items-center'>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0, }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className={`basis-70 max-sm:basis-40 p-4 h-full justify-around  flex flex-col ${isclick === item.Id ? 'hidden' : ''}`}>

          <h1 className='md:text-2xl text-orange-500 drop-shadow-[2px_4px_2px_rgba(200,200,200,0.5)] protest-revolution-regular'>{item.Name}</h1>

          <motion.p initial={{ opacity: 0 }}
            animate={{ opacity: 1, scaleX: [0, 1] }}
            transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
            className='md:text-xl max-sm:text-sm'>{item.Desc}</motion.p>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scaleX: [0, 1] }}
            transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
            className='flex gap-2 '>
            <FontAwesomeIcon icon={faHtml5} className='md:text-3xl max-sm:text-xl hover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faCss3} className='md:text-3xl max-sm:text-xl hover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faReact} className='md:text-3xl max-sm:text-xlhover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faJs} className='md:text-3xl max-sm:text-xl hover:scale-110 duration-150 cursor-pointer' />
          </motion.div>


        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={isclick === item.Id ? {opacity:1 , scale:[0,1]}:{ opacity: 1,scaleX:[0,1.3,1] }}
          transition={isclick === item.Id ?{duration:1,ease:'easeInOut',type:'spring'}:{duration: 1, ease: 'easeInOut' }}
          className={`relative h-fit ${isclick === item.Id ? 'p-0':'py-4'}`}
          onClick={() => setIsclick(item.Id)}>

          <div className='flex justify-around'>
            <img className={`cursor-pointer ${isclick === item.Id ? 'blur-none w-[85%] ' : 'blur object-cover h-[18em] max-sm:h-[13em]'}`} src={item.Projectimage} alt="Something Error" />

            <div className={`${isclick === item.Id ? ' flex flex-col justify-around items-center ' : 'hidden'}`}>
              <Link to={item.Live}><FontAwesomeIcon className='md:text-4xl max-sm:text-2xl' icon={faLink}></FontAwesomeIcon></Link>
              <Link to={item.github_repo}><FontAwesomeIcon className='md:text-4xl max-sm:text-2xl' icon={faGithub}></FontAwesomeIcon></Link>
            </div>
          </div>

          <motion.p
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'

            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 md:-traslate-y-1/2 max-sm:text-xl text-2xl text-orange-500 cursor-pointer protest-revolution-regular ${isclick === item.Id ? 'hidden' : ''}`}>Tap to Reveal</motion.p>
        </motion.div>
      </div>
    )
  })



  return (
    <div
      className='flex w-full justify-around gap-8  flex-wrap'>
      {Boxes}
    </div >
  )
}

export default Projectscomponents
