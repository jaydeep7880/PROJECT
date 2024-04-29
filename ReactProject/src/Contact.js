import React from 'react'
import Navbar, { Futer } from './Navbar'
import { useState } from 'react'
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  var [f, setf] = useState("")
  var [s, sets] = useState("")

  var sent = (a) => {
    var fo = document.getElementById("format")

    a.preventDefault()
    var teid = document.getElementById("te")
    if (f == "" || f.length <= 1) {
      toast.error('Enter a valid name..!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
    }

    else if (s == "" || s.length <= 9) {
      toast.error('Enter a valid email-address..!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
    }

    else if (teid.value == "" || teid.length <= 50) {
      toast.error('Enter any 50 letter..!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
    }
    else 
    {
        toast.success('Thank you..', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
        fo.reset()
        document.getElementById("e").value = ""
        document.getElementById("n").value = ""
    }

  }

  return (
    <div style={{ marginTop: "80px" }}>
      <Navbar></Navbar>
      <div className='vs sv sh'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable.</p>
        </div>
      </div>

      <div className='back' style={{ marginTop: "50px" }}>
        <div className='container futer'>

          <h5 style={{ color: "red", letterSpacing: "5px", paddingTop: "50px" }}>CONTACT US</h5>
          <h1>Lets get in touch</h1>

          <div className='F1'>
            <div>
              <p>Email</p>
              <br />
              <p>pompeopotery@gmail.com</p>
            </div>

            <div>
              <p>FIND</p>
              <br />
              <p>Central Park, Manhattan</p>
              <p>New York, 1101</p>
            </div>

            <div>
              <p>CALL</p>
              <br />
              <p>+1 292 345 678</p>
            </div>
          </div>
        </div>
      </div>
      <div className='background'>
        <div className='container'>
          <div className='imager'>
            <img src="contacttea.jpg" alt="" height={240} width={"100%"} />
          </div>
          <div className='laster container' >
            <div className='l1'>
              <div style={{ height: "400px", width: "260px", backgroundColor: "lightgray" }}></div>
            </div>

            <div className='l2'>
              <h3>Drop Us a Line</h3>

              <form id='format' onSubmit={sent}>
              <br/>
                <h5>Name : </h5>
                <input type="text" name="" id='n' value={f} onChange={(f) => { setf(f.target.value) }} placeholder='Enter a name : ' />

                  <br/>

                <h5>Email : </h5>
                <input type="text" name="" id='e' value={s} onChange={(s) => { sets(s.target.value) }} placeholder='Enter a email : ' />

                <br/>

                <h5>Message : </h5>
                <textarea id='te' style={{ width: "100%", paddingBottom: "80px", paddingLeft: "10px" }} placeholder='How can we help ? '></textarea>

                <br/><br/><br/>
                
                <input type="submit" id='btn' name="" value="SENT MESSEAGE" />
              </form>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Futer></Futer>
    </div>
  )
}

export default Contact
