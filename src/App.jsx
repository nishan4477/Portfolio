
import React from 'react'
import Header from  './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'


const App = () => {
  return (
<>
<Header/>
<Navbar/>
<About/>
<Experience/>
<Services/>

<Contact/>



</>
  )
}

export default App