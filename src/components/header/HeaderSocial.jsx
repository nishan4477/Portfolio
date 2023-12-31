import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/nishan-sakha-3888b1183/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nishan4477" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial