import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Ragistration() {
  var [name, setname] = useState("")
  var [pass, setpass] = useState("")
  var [email, setemail] = useState("")
  var homer = useNavigate("")

  var ragister = JSON.parse(localStorage.getItem("dataragistration")) ?? []

  var hendelregistration = () => {
    var arr = { name: name, pass: pass, email: email }

    var p1 = document.getElementById("form3Example4c")
    var p2 = document.getElementById("form3Example4cd")

    if (name.length <= 1) {
      toast.error('Pleas enter a valid name...!', {
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

    else if (pass.length <= 1) {
      toast.error('Enter a password and mini-mum 5 number...!', {
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

    else if (p1.value !== p2.value) {
      toast.error('password are doesnt match...!', {
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

    else {

      var emailmatch = ragister.find((a) => {
        return a.email == email
      })
      if (emailmatch) {
        toast.error('This data is alredy exis...!', {
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
      else {
        ragister.push(arr)
        alert("Ragistration is Complete")
        homer('/')
        localStorage.setItem("dataragistration", JSON.stringify(ragister))
      }
      console.log(ragister)  

      // this code is new to localStorage registration 

    }
  }

  return (

    <div>
      <section className="vh-100" style={{ background: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" value={name} id='form3Example1c' className="form-control" onChange={(e) => { setname(e.target.value) }}
                              placeholder='enter a name...'
                            />
                            <label className="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" value={email} id='form3Example1c' className="form-control" onChange={(e) => { setemail(e.target.value) }}
                              placeholder='enter a email...'
                            />
                            <label className="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="" value={pass} id='form3Example4c' className="form-control" onChange={(e) => { setpass(e.target.value) }}
                              placeholder='enter a password...'
                            />
                            <label className="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control"
                              placeholder='repeat your password...' />
                            <label className="form-label" for="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={hendelregistration}>Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Ragistration
