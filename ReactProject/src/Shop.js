import React, { useEffect, useState } from 'react'
import Navbar, { Letest } from './Navbar'
import { useNavigate } from 'react-router-dom'

function Shop() {
  var [d, setd] = useState()
  var [i, seti] = useState("")

  var navpage = useNavigate()

  useEffect(() => {
    fetch("http://localhost:1001/shop")
      .then((res) => { return res.json() })
      .then((data) => {
        setd(data)
      })
  }, [])

  var hendelshop = (k) => {
    navpage('/shops/' + k)
  }
  return (
    <div style={{marginTop:"80px"}}>
      <Navbar></Navbar>
      <div className='vs sv'>
        <div className='container'>
          <h1>Shop</h1>
          <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
        </div>
      </div>

      <div className='container'>

        <div className='details pb-5'>

          <h5 style={{ color: "red" }}>OUR ONLINE STORE</h5>
          <h1>Product Collection</h1>
        </div>

        <div className='product'>

          {d &&
            d.map((s) => (
              <div className='mn' key={s.name}>
                <div style={{ overflow: "hidden" }}>
                  <div className='imgproduct'>
                    <img src={s.url} alt="" width={340} onClick={() => { hendelshop(s.id) }} />
                  </div>
                </div>
                <div style={{ paddingLeft: "6px" }}>
                  <br />
                  <p>{s.name}</p>
                  <p>$ {s.price} USD</p>
                </div>
                <br />
                <div className='ho'></div>
              </div>
            ))
          }


        </div>

      </div>

      <div className='minimg'>
        <center>
          <i className="fa-brands fa-telegram v" style={{ fontSize: "60px", padding: "10px", borderRadius: "50px" }}></i>
          <br /><br />
          <h5 style={{ color: "red", letterSpacing: "4px" }}>LETTEST NEWS</h5>
          <h1 style={{ fontSize: "50px" }}>Latest news & New updates</h1><br /><br />

          <div className='inp'>
            <input type="text" name="" value={i} onChange={(s) => { seti(s.target.value) }} />
            <input className='btn0' type="button" name="" value="SUBSCRIBE" />
            <br /><br />
            <input type="checkbox" name="" value="" />
            <span style={{ marginLeft: "10px" }}>Sign up for our newsletter</span>
          </div>

        </center>
      </div>

      <center>
        <div style={{ padding: "30px", backgroundColor: "#ebebeb" }}>
          Template design by Dorian Hoxha - View all templatesPowered by Webflow
        </div>
      </center>
    </div>
  )
}

export default Shop
