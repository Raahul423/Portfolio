import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Basic = ({ click , Data }) => {

    return click ? (
        <div className='absolute h-[27em] max-sm:w-[70%]  max-sm:h-[12em] justify-center items-center max-sm:right-1/2 right-65 max-sm:top-3/4 top-1/2  max-sm:translate-x-1/2 flex -translate-y-1/2 border-transparent border-2 sm:border-r-white sm:px-12 max-sm:border-b-white '>
            <motion.div
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                type: 'tween',
                delay: 0.6,
                duration:0.5
            }}
            className=' z-50 max-sm:h-[17em] max-w-full w-fit  border-transparent  '>
                <motion.img
                animate={{
                    scale:[1,1.1,1]
                }}
                transition={{
                    duration:5,
                    repeat:Infinity,
                    ease:'linear'
                    
                }}
                className='h-80 w-80 max-sm:h-50 max-sm:w-50 rounded-full ' src={Data.Rahul} alt="Error" />
        </motion.div>
        </div>
        
    ) : ''
}

export default Basic
