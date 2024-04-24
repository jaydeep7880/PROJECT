import React from 'react'
import Navbar, { Carousel, Collection1, Fielddata, Futer, Gold, Letest, Moredata, Shopping0 } from './Navbar'
import Navbar01 from './Navbar'

function Home() {
  return (
    <div>

        <Navbar></Navbar>
        <Moredata></Moredata> 
        <Fielddata></Fielddata>  
        <Gold></Gold>
        {/* <Carousel></Carousel> */}
        <Collection1></Collection1>
        <Shopping0></Shopping0>
        <Letest></Letest>
        <Futer></Futer>
    </div>
  )
}

export default Home
