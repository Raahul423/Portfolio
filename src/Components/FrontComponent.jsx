import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const FrontComponent = ({ navigate, Data, click }) => {
    return (
        <div className='relative h-screen p-8'>
            <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0,1.1,0,1], opacity: 1 }}
                transition={{ duration: 1, delay:0.8 , ease:'easeInOut'}}
                onClick={() => (navigate('/Project'))} className={`absolute cursor-pointer tracking-wide rotate-[270deg] text-xl top-1/2  -translate-y-1/2 left-0 hover:scale-115 duration-300  ${click ? 'text-black z-50 text-shadow-lg shadow-black' : ''}`}>Projects .</motion.p>

            <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0,1.1,0,1], opacity: 1 }}
                transition={{ duration: 1,delay:0.8,ease:'easeOut' }}
                onClick={() => window.location = 'mailto:rpal24480@gmail.com'} className='absolute cursor-pointer top-1/2  -translate-y-1/2 right-0 hover:scale-115  duration-300 tracking-wide rotate-[90deg] text-xl '>Conatct Us .</motion.p>

            <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0,1.1,0,1], opacity: 1 }}
                transition={{ duration: 1,delay:0.8,ease:'easeInOut' }}
                onClick={() => navigate('/About')} className={`absolute cursor-pointer tracking-wide bottom-8 -translate-x-1/4 left-1/4 text-xl hover:scale-110  duration-300  ${click ? 'text-black z-50 text-shadow-lg shadow-black' : ''}`}>About .</motion.p>

            <motion.p
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0,1.1,0,1], opacity: 1 }}
                transition={{ duration: 1,delay:0.8,ease:'easeInOut' }}
                onClick={() => navigate('/Skills')} className='absolute bottom-8 cursor-pointer tracking-wide -translate-x-3/4 left-3/4 text-xl hover:scale-110 duration-300 '>My Skills .</motion.p>

            <motion.div
                className='absolute z-50 flex flex-col gap-4 items-center bottom-0'>
                <motion.img
                    animate={{ y: 0, scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.3 }}
                    className='h-7 w-7 cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0)' : 'invert(1)' }} src={Data.Github} alt="Something Error" />

                <motion.img
                    animate={{ y: 0, scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.6 }}
                    className='h-7 w-7  cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0)' : 'invert(1)' }} src={Data.Twitter} alt="Something Error" />

                <motion.img
                    animate={{ y: 0, scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.9 }}
                    className='h-7 w-7 cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0)' : 'invert(1)' }} src={Data.Youtube} alt="Something Error" />

                <motion.img
                    animate={{ y: 0, scale: [0, 1.2, 1] }}
                    transition={{ delay: 1.2 }}
                    className='h-7 w-7 cursor-not-allowed ' style={{ filter: click ? 'invert(0)' : 'invert(1)' }} src={Data.Facebook} alt="Something Error" />

                <span
                    className={`h-30 w-0.5  ${click ? 'bg-black' : 'bg-white'} `}></span>
            </motion.div>

        </div>
    )
}

export default FrontComponent
