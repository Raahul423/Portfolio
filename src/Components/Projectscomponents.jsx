
import React from 'react'

const Projectscomponents = ({ Data }) => {

  let Boxes = Data.map((item)=>{
    return(
      <div className=' h-80 w-150 bg-amber-200 flex'>
        <div className='basis-1/2 p-4 bg-purple-600 '>
        <h1 className='text-2xl protest-revolution-regular'>{item.Name}</h1>
        <p className='text-sm'>{item.Desc[0]}</p>
        <p className='text-sm'>{item.Desc[1]}</p>
        <p className='text-sm'>{item.Desc[2]}</p>
        </div>


        
        <div>hii</div>
      </div>
    )
  })
 


  return (
    <div className='flex w-full justify-between gap-8 flex-wrap bg-green-600'>
      {Boxes}
    </div >
  )
}

export default Projectscomponents
