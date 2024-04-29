import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { data } from './data'

function Plates() {


    var navpage = useNavigate()

    var hendelplates = (k) => {
        navpage('/plate/' + k)
        window.scrollTo(0,0)
    }

    function Futer() {
        return (
            <div className='back'>
                <div className='container futer'>

                    <h3>Pompio</h3>
                    <p>I have always striven to fix beauty in wood, stone,</p>
                    <p>glass or pottery, that has been my creed.</p>

                    <div className='F1'>
                        <div>
                        <i className="fa-regular fa-envelope"></i>
                            <p>Email</p>
                            <br />
                            <p>pompeopotery@gmail.com</p>
                        </div>

                        <div>
                        <i className="fa-regular fa-compass"></i>
                            <p>FIND</p>
                            <br />
                            <p>Central Park, Manhattan</p>
                            <p>New York, 1101</p>
                        </div>

                        <div>
                        <i className="fa-solid fa-phone"></i>
                            <p>CALL</p>
                            <br />
                            <p>+1 292 345 678</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className='vs'>
                    <div className='container'>
                        <h1>Plates</h1>
                        <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable.</p>
                    </div>
                </div>

                <div className='container'>

                    <div className='details pb-5'>

                        <h5 style={{ color: "red" }}>OUR ONLINE STORE</h5>
                        <h1>Product Collection</h1>
                    </div>

                    <div className='product'>

                        {data[3].plates &&
                            data[3].plates.map((s) => (
                                <div className='mn' key={s.name}>
                                    <div style={{ overflow: "hidden" }}>
                                        <div className='imgproduct'>
                                            <img src={s.url} alt="" width={340} onClick={() => { hendelplates(s.id) }} />
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

                <br /><br /><br />
                <center>
                    <Link to={'/shop'}><button id='btn'>BACK TO SHOP</button></Link>
                </center>
                <br /><br /><br /><br /><br />

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

export default Plates
