import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
   <div className="cta">
    <a className='btn btn-outline-primary btn-lg mx-2 px-5 py-3' href={CV} download> Download CV</a>
    <a className='btn btn-light btn-lg mx-2 px-4 py-3' href='#contact'>Lets connect </a> 
   </div>
  )
}

export default CTA