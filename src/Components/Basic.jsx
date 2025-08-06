import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Basic = ({ click , Data }) => {

    return click ? (
        <motion.div
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                type: 'tween',
                delay: 0.6,
                duration:0.5
            }}
            className='absolute h-[27em] w-fit flex justify-center items-center z-50 border-2 border-r-white border-transparent right-65 top-1/2 -translate-y-1/2 px-16'>
                <motion.img
                animate={{
                    scale:[1,1.1,1]
                }}
                transition={{
                    duration:5,
                    repeat:Infinity,
                    ease:'linear'
                    
                }}
                className='h-80 w-80 rounded-full ' src={Data.Rahul} alt="Error" />
        </motion.div>
    ) : ''
}

export default Basic
