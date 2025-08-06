import React, { useState } from 'react'
import { Data } from '../Images'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate()
    const [Hover,setHover] = useState('Print ("Click Me !")');


    return (
        <div className=' flex justify-between z-50 items-center px-6 fixed w-full'>
            <div className={'text-[3em] font-extrabold Font-Goldman'}>
                <h1>Rahul</h1>
            </div>

            <div onClick={()=>navigate('/')} className='bg-white cursor-pointer p-2 border border-amber-400 rounded-full hover:scale-85 duration-300'>
                <img className='h-7 w-7 ' src={Data.Power} alt="Something Error" />
            </div>

            <motion.div 
            animate={{
                scale:[1,1.1,1]
            }}
            transition={{
                duration:1.5,
                repeat:Infinity,
                ease:"easeInOut"
            }}
            onClick={()=>setHover("Welcome Guys ! ....")} className='cursor-pointer text-xl font-bold'>
                {Hover}
            </motion.div>

        </div>
    )
}

export default Navbar
