
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Frontpage = ({Data , handleclick , click}) => {
    
    return (
        <motion.div onClick={handleclick} layout transition={{stiffness: 500 , damping : 80}} className={`absolute z-50  ${click ? 'bottom-15 right-15 ': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} `}>
            <div className='text-center flex flex-col gap-4'>
                <motion.img animate={{
                    rotate: 360
                }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={` cursor-pointer  ${click ? 'h-30 w-30':'h-50 w-50'}`} style={{filter:'invert(1)'}} src={Data.YinYang} alt="Something went Wrong" />
                <p className={`${click ? 'hidden' : 'text-xl'}`}>Click Me</p>
            </div>


        </motion.div>
        
    )
}

export default Frontpage
