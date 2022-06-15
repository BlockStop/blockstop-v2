import React from 'react'
import HomePage from './Home/HomePage';
import About from './About/About';
import Brands from './Brands/Brands';
import Mission from './Mission/Mission';

function Main() {
  return (
    <React.Fragment>
      <HomePage />
      <About />
      <Brands />
      <Mission />
    </React.Fragment>
  )
}

export default Main
