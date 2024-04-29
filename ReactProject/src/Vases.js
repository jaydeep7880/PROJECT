import React, { useEffect, useState } from 'react'
import Navbar, { Futer } from './Navbar'
import { useNavigate } from 'react-router-dom'
import { data } from './data'


function Vases() {

  var navpage = useNavigate()

  var hendelpage = (k) => {
    navpage('/vases/' + k)
    window.scrollTo(0,0)
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className='vs'>
          <div className='container'>
            <h1>Vases</h1>
            <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable.</p>
          </div>
        </div>

        <div className='container'>

          <div className='details pb-5'>

            <h5 style={{ color: "red" }}>OUR ONLINE STORE</h5>
            <h1>Product Collection</h1>
          </div>

          <div className='product'>

            {data[0].product &&
              data[0].product.map((s,b) => (
                <div className='mn' key={b}>
                  <div style={{ overflow: "hidden" }}>
                    <div className='imgproduct'>
                      <img src={s.url} alt="" width={340} onClick={() => { hendelpage(s.id) }} />
                    </div>
                  </div>
                  <div style={{ paddingLeft: "6px" }}>
                    <br />
                    <p>{s.name}</p>
                    <p>{s.price}</p>
                  </div>
                  <br />
                  <div className='ho'></div>
                </div>
              ))
            }


          </div>

        </div>

        <br />

                <Futer></Futer>

                <center>
                    <div style={{ padding: "30px", backgroundColor: "#ebebeb" }}>
                        Template design by Dorian Hoxha - View all templatesPowered by Webflow
                    </div>
                </center>

      </div>
      
    </div>
  )
}

export default Vases
