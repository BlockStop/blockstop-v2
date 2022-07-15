import React from 'react'
import HomePage from './Home/HomePage';
import About from './About/About';
import Brands from './Brands/Brands';
import Mission from './Mission/Mission';
import Services from './Services/Services';
import Partners from './Partners/Partners';
import Team from './Team/Team';
import Footer from './Footer/Footer';
import Loader from 'react-loaders'


function Main() {
  return (
    <React.Fragment>
      <HomePage />
      <About />
      <Brands />
      <Mission />
      <Services />
      <Partners />
      <Team />
      <Footer />
    </React.Fragment>
  )
}

export default Main
