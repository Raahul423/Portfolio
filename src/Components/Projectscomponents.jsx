import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

const Projectscomponents = ({ Data }) => {

  let Boxes = Data.map((item) => {
    return (
      <div className=' h-80  w-140  flex'>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0, }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='basis-70 p-4  justify-around  flex flex-col'>

          <h1 className='text-2xl text-orange-500 drop-shadow-[2px_4px_2px_rgba(200,200,200,0.5)] protest-revolution-regular'>{item.Name}</h1>

          <motion.p initial={{ opacity: 0 }}
            animate={{ opacity: 1, scaleX: [0, 1] }}
            transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
            className='text-xl'>{item.Desc}</motion.p>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scaleX: [0, 1] }}
            transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
            className='flex gap-2 '>
            <FontAwesomeIcon icon={faHtml5} className='text-3xl hover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faCss3} className='text-3xl hover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faReact} className='text-3xl hover:scale-110 duration-150 cursor-pointer' />
            <FontAwesomeIcon icon={faJs} className='text-3xl hover:scale-110 duration-150 cursor-pointer' />
          </motion.div>


        </motion.div>



        <div className='relative'>
          <img className='h-full w-full object-cover blur cursor-pointer ' src={item.Projectimage} alt="Something Error" />
          <motion.p
          animate={{
            scale:[1,1.1,1]
          }}
          transition={{
            duration:2,
            repeat:Infinity,
            ease:'easeInOut'

          }}
           className='absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 text-2xl text-orange-500 cursor-pointer protest-revolution-regular '>Tap to Reveal</motion.p>
        </div>
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
