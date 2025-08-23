// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const roles = [
  'Frontend Developer',
  'React Developer',
  'UI/UX Developer'
]

const Lightcomponent = ({ click, Data }) => {

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
          transition={{ duration: 0.5, ease: 'easeInOut' }} className='bg-white absolute w-[50%] max-sm:h-[50%] max-sm:w-[100%] h-full overflow-y-auto top-0 left-0 z-10'>


          <div className='h-fit justify-start w-fit flex-wrap top-1/2 -translate-y-1/2 left-50 max-sm:left-0 max-sm:justify-center border-2  border-l-black border-transparent text-black flex flex-col max-sm:border-transparent max-sm:gap-4 max-sm:mt-4 gap-4 z-50 absolute max-sm:mx-10 sm:px-10'>

            <motion.div initial={{ x: '-50%', opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                delay: 0.6,
                duration: 0.5
              }}
              className='flex flex-col gap-4 max-sm:gap-0'>
              <h1 className='text-[4em] max-sm:text-[2em] font-extrabold'>Hi,</h1>

              <div className='flex gap-4 max-sm:gap-2 items-center'>
                <span className='text-3xl protest-revolution-regular max-sm:text-lg text-orange-600'>I'm</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y:0 }}
                  animate={{ opacity: 1, y: [0, 5, 0] }}
                  exit={{ opacity: 0, y:10 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='text-3xl protest-revolution-regular max-sm:text-lg text-orange-600'>{roles[index]}</h3>

                </motion.span>
              </AnimatePresence>
              </div>
              
              <p className='text-xl max-sm:text-sm text-gray-700'>Passionate React frontend developer focused on clean, responsive mobile UI/UX design with a love for user-centric experiences.
              </p>
            </motion.div>

            <div className='h-fit w-full grid grid-cols-3  justify-evenly gap-8 '>
              <motion.img animate={{
                y: [-5, 5,-5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-15 w-15 max-sm:h-10 max-sm:w-10 m-auto' src={Data.javascript} alt="JavaScript" />

                <motion.img animate={{
                y: [5, -5, 5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-15 w-15 max-sm:h-10 max-sm:w-10 m-auto' src={Data.githubpic} alt="JavaScript" />

                <motion.img animate={{
                y: [-5, 5, -5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-15 w-15 max-sm:h-10 max-sm:w-10 m-auto' src={Data.redux} alt="JavaScript" />

                <motion.img animate={{
                y: [5, -5, 5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-15 w-15 max-sm:h-10 max-sm:w-10 m-auto' src={Data.React} alt="JavaScript" />

                <motion.img animate={{
                y: [-5, 5, -5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-17 w-17 max-sm:h-10 max-sm:w-10 m-auto' src={Data.Tailwind} alt="JavaScript" />

                <motion.img animate={{
                y: [5, -5, 5]
              }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}

                className='h-20 w-20 max-sm:h-10 max-sm:w-10 m-auto' src={Data.Nodejs} alt="JavaScript" />

            </div>

          </div>




        </motion.div>
      )}
    </AnimatePresence>
  )

}

export default Lightcomponent
