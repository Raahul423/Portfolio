// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const roles = [
  'Frontend Developer',
  'React Developer',
  'UI/UX Developer'
]

const Lightcomponent = ({ click }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence>
      {click && (
        <motion.div initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }} className='bg-white absolute w-[50%] h-screen top-0 left-0 z-10'>
          <motion.div initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              delay: 0.6,
              duration: 0.5
            }}
            className='  h-[25em] w-fit flex-wrap top-1/2 -translate-y-1/2 left-50 border-2 border-l-black border-transparent text-black flex flex-col gap-4 justify-center  z-50 absolute px-8'>
            <h1 className='text-[4.5em] font-extrabold'>Hi,</h1>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: [0,5,0] }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className='text-[2.5em] text-orange-600'>I'm {roles[index]}</h3>
                
              </motion.span>
            </AnimatePresence>
            <p className='text-2xl text-gray-700'>I craft simple, beautiful web experiences that speak through clean design and purposeful code.</p>
          </motion.div>



        </motion.div>
      )}
    </AnimatePresence>
  )

}

export default Lightcomponent
