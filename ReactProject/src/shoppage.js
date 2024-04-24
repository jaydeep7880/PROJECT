import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom'
import Canva from './Canva'

function Shoppage() {
    var { id } = useParams()
    var [url1, seturl1] = useState("")
    var [t, sett] = useState("")
    var [num, setnum] = useState("1")

    useEffect(() => {
        fetch("http://localhost:1001/shop/" + id)
            .then((res) => { return res.json() })
            .then((data) => {
                seturl1(data)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:1001/related/")
            .then((res) => { return res.json() })
            .then((data) => {
                sett(data)
            })
    }, [])

    return (
        <div>

            <div>
                <Navbar></Navbar>
                <div className='vs sv'>
                    <div className='container'>
                        <h1>Shop</h1>
                        <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                    </div>
                </div>

                <div className='container imgdetailer'>

                    <div className='firstimgdiv'>
                        <img src={url1.url} alt="" height={550} width={450} />
                    </div>

                    <div className='imgdetailsdiv'>
                        <p style={{ color: "red" }}>PRODUCT DETAIL</p>
                        <h3>{url1.name}</h3>
                        <p>$ {url1.price} USD</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>

                        <br></br>
                        <ul>
                            <li><a href="https://webflow.com/templates/html/hopeharbor-charity-website-template">HopeHarbor - Charity Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/flowhub-agency-website-template">FlowHub - Agency Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/quantum-saas-website-template">Quantum - SaaS Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/postflex-magazine-website-template">PostFlex - Magazine Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/brandwave-business-website-template">BrandWave - Business Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">MasterEdge - Agency Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">TradeFlow - Business Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Ava Swift - Portfolio Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Conceptualize - Portfolio Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Planner - Portfolio Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Evōlver - Portfolio Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Servante - Agency Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Simplex - Agency Website Template</a></li>
                            <li><a href="https://webflow.com/templates/html/masteredge-agency-website-template">Flexi - SaaS Website Template</a></li>
                        </ul>
                        <br></br>
                        <h4>Category : Vases</h4>
                        <h4>Track Number : 242526</h4>
                        <h4 className='fs'>Shere on : <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-square-google-plus"></i>
                        </h4>
                        <br></br>

                        <h4>Quantity : </h4>
                        <input type="number" name="" value={num} onChange={(e) => { setnum(e.target.value) }} style={{ width: "10%" }} />
                        <br /><br />
                        <Canva number={num}></Canva>
                    </div>

                </div>

                <div className='container' style={{marginTop:"20px"}}>

                    <h3 style={{padding:"20px 10px"}}>Related Items</h3>

                    <div className='product'>

                        {t &&
                            t.map((s) => (
                                <div className='mn' key={s.name}>
                                    <div style={{ overflow: "hidden" }}>
                                        <div className='imgproduct'>
                                            <img src={s.url} alt="" width={340}/>
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

                <center>
                <div style={{ padding: "30px" ,backgroundColor:"#ebebeb"}}>
                Template design by Dorian Hoxha - View all templatesPowered by Webflow
                </div>
                </center>
            </div>

        </div>
    )
}

export default Shoppage
