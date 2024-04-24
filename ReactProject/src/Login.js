import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar, { Revi } from './Navbar'
import { contect } from './App'


function Login() {
  var [email, setemail] = useState("")
  var [pass, setpass] = useState("")
  var homer = useNavigate("")
  // var [m, setm] = useState("")
  var {log,setlog,out,setout} = useContext(contect)

  var login = () => {

    fetch("http://localhost:400/arr")
      .then((res) => { return res.json() })
      .then((data) => {

        var s = data.find((s) => {
          return s.email == email && s.pass == pass
        })

        if (s) {
          // alert("Welcome..." + s.name)
          // setm(s.name)
          setlog(s.name)
          setout(true)
          homer('/')
        }

        else {
          alert("Envalid email OR Password..!")
        }

      })
  }

  return (

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "2.5rem" }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name="" value={email} id="typeEmailX" className="form-control form-control-lg" onChange={(e) => { setemail(e.target.value) }}
                      placeholder='enter a email...'

                    />
                    <label className="form-label" for="typeEmailX">Email</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name="" id="typePasswordX" className="form-control form-control-lg" value={pass} onChange={(e) => { setpass(e.target.value) }}
                      placeholder='enter a password...'
                    />
                    <label className="form-label" for="typePasswordX">Password</label>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={login} >Login</button>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>

                </div>

                <div>
                  <p className="mb-0">Don't have an account? <Link to={"/Registration"} className="text-white-50 fw-bold">Registration</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login
