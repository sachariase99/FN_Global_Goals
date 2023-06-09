import React from 'react'
import UNLogo from '../images/UN-Logo-Large.png'
import Form from './FirstForm'

const contact = () => {
  return (
    <div id='contact'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
        <img className='w-[100%]' src={UNLogo} alt="UN Logo" />
        <Form />
      </section>
    </div>
  )
}

export default contact