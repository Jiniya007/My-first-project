import React from 'react'
import Header from './Header'
import Howitworks from './Howitworks'
import Navbar from './Navbar'
import Aboutus from './Aboutus'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <>
     <Navbar/>
     <Header/>
     <Howitworks/>
     <Aboutus/>
     <Service/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home;