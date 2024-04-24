import React from 'react'
import Navbar, { Fielddata, Futer } from './Navbar'

function About() {
  return (
    <div style={{marginTop:"80px"}}>
      <Navbar></Navbar>
      <div className='vs'>
        <div className='container'>
          <h1>About Us</h1>
          <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
        </div>
      </div>
      <Fielddata></Fielddata>

      <div className='artiest'>

        <div className='container details pb-5'>
          <h5 style={{ color: "red" }}>OUR ONLINE STORE</h5>
          <h1>Product Collection</h1>
        </div>

        <div className='cord01 container'>
          <div className='cord'>
            <center>
              <img src="card1.jpg" alt="" height={80} width={80} style={{ borderRadius: "50%" }} />
              <div class="card-body">
                <h5 class="card-title">Maria Monroy</h5>
                <p class="card-text">SENIOR DESIGNER</p><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
              </div>
              <br />
              <h4 className='fs'>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-google-plus"></i>
              </h4>
            </center>
          </div>

          <div className='cord'>
            <center>
              <img src="card2.jpg" alt="" height={80} width={80} style={{ borderRadius: "50%" }} />
              <div class="card-body">
                <h5 class="card-title">Dominic Basket</h5>
                <p class="card-text">SENIOR DESIGNER</p><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
              </div>
              <br />
              <h4 className='fs'>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-google-plus"></i>
              </h4>
            </center>
          </div>

          <div className='cord'>
            <center>
              <img src="card3.jpg" alt="" height={80} width={80} style={{ borderRadius: "50%" }} />
              <div class="card-body">
                <h5 class="card-title">Eduard Fisher</h5>
                <p class="card-text">SENIOR DESIGNER</p><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
                <br />
                <h4 className='fs'>
                  <i className="fa-brands fa-square-facebook"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-square-google-plus"></i>
                </h4>
              </div>

            </center>
          </div>
        </div>

      </div>

      <div className='container'>

        <div style={{ paddingTop: "150px" }}>

          <div className='cunj' style={{ paddingBottom: "180px" }}>

            <div className='cunjimg'>
              <img src="background1.jpg" alt="" height={400} />
            </div>

            <div className='cunjdetail'>
              <h3>Created With Love &  Passion</h3>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>

              <br />
              <a href="#">View More Pieces</a>
            </div>


          </div>


        </div>

      </div>
      <Futer></Futer>


    </div>
  )
}

export default About
