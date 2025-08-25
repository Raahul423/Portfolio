import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link, Links } from 'react-router-dom'

const FrontComponent = ({ navigate, Data, click }) => {
    return (
        <div className='relative min-h-dvh  overflow-hidden px-8 max-sm:p-4'>
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.1, 0, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                onClick={() => (navigate('/Project'))} className={`absolute cursor-pointer tracking-wide rotate-[270deg] text-xl max-sm:text-lg top-1/2  -translate-y-1/2 left-0 max-sm:-left-3 hover:scale-115 duration-300  ${click ? 'text-black z-50 text-shadow-lg shadow-black' : ''}`}>Projects .</motion.button>

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.1, 0, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                onClick={() => window.location = 'mailto:rpal24480@gmail.com'} className='absolute cursor-pointer top-1/2 max-sm:text-lg max-sm:-right-5 -translate-y-1/2 right-0 hover:scale-115  duration-300 tracking-wide rotate-[90deg] text-xl '>Conatct Us .</motion.button>

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.1, 0, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                onClick={() => navigate('/About')} className={`absolute cursor-pointer tracking-wide bottom-8 max-sm:text-lg -translate-x-1/4 left-1/4 text-xl hover:scale-110  duration-300  ${click ? 'text-black z-50 text-shadow-lg shadow-black max-sm:text-white' : ''}`}>About .</motion.button>

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.1, 0, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                onClick={() => navigate('/Skills')} className='absolute bottom-8 cursor-pointer tracking-wide max-sm:text-lg -translate-x-3/4 left-3/4 text-xl hover:scale-110 duration-300 '>My Skills .</motion.button>

            <motion.div
                className='absolute z-50 flex flex-col gap-4 items-center bottom-0'>
                <Link to='https://github.com/Raahul423'>
                    <motion.img
                        animate={{ y: 0, scale: [0, 1.2, 1] }}
                        transition={{ delay: 0.3 }}
                        className='h-7 w-7  cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0) max-sm:invert(1)' : 'invert(1)' }} src={Data.Github} alt="Something Error" />
                </Link>

                <Link to='https://www.instagram.com/raahul_.423/'>
                    <motion.img
                        animate={{ y: 0, scale: [0, 1.2, 1] }}
                        transition={{ delay: 0.6 }}
                        className='h-7 w-7  cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0) max-sm:invert(1)' : 'invert(1)' }} src={Data.Instagram} alt="Something Error" />
                </Link>

                <Link to='https://www.linkedin.com/in/raahul423/'>
                    <motion.img
                        animate={{ y: 0, scale: [0, 1.2, 1] }}
                        transition={{ delay: 0.9 }}
                        className='h-7 w-7 cursor-pointer hover:scale-120 duration-200' style={{ filter: click ? 'invert(0) max-sm:invert(1)' : 'invert(1)' }} src={Data.Linkedin} alt="Something Error" />
                </Link>

                <Link>
                    <motion.img
                        animate={{ y: 0, scale: [0, 1.2, 1] }}
                        transition={{ delay: 1.2 }}
                        className='h-7 w-7 cursor-not-allowed ' style={{ filter: click ? 'invert(0) max-sm:invert(1)' : 'invert(1)' }} src={Data.Facebook} alt="Something Error" />
                </Link>


                <span
                    className={`h-30 w-0.5  ${click ? 'bg-black max-sm:bg-white' : 'bg-white'} `}></span>
            </motion.div>

        </div>
    )
}

export default FrontComponent
