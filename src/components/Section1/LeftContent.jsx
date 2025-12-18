import React from 'react'
import MainText from './MainText'
import ArrowText from './ArrowText'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        
        <MainText/>
        <ArrowText/>
      
    </div>
  )
}

export default LeftContent
