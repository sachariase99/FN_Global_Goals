import React from 'react'
import Logo from '../images/ColorWheel.png'

const header = () => {
  return (
    <div>
      <header className='flex justify-center items-center bg-background'>
        <img className='w-[15%] mr-5' src={Logo} alt="Logo" />
        <div className='leading-none'>
            <h1 className='text-white text-[5vw] uppercase'>The Global Goals</h1>
            <h3 className='text-header text-[3.7vw] font-light'>For sustainable Developement</h3>
        </div>
      </header>
    </div>
  )
}

export default header
