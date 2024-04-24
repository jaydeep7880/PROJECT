import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import Canva from './Canva';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import Login from './Login';
import { contect } from './App';
import Bhuro from './Bhuro';


function Navbar() {

    var {log,setlog,out,setout} = useContext(contect)

    var loginpage = ()=>{  
        setlog("")
        alert("are you sure...!")
        setout(false)
     }

    return (
        <div className='main'>
            
            <div className='container'>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Pompio</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/about'} className="nav-link">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/shop'} className="nav-link">SHOP</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/contact'} className="nav-link">CONTACT</Link>
                                    </li>
                                    <li className="nav-item">
                                        {
                                           out ?
                                           (
                                            <Link className="nav-link" onClick={loginpage}>LOG out</Link>
                                           ) : (
                                            <div className='lilinks'>
                                            <Link to={'/Registration'} className="nav-link">REGISTRATION</Link>
                                            <Link to={'/Login'} className="nav-link">LOG IN</Link>
                                            </div>
                                           )
                                        }
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link">{log}</Link>
                                    </li>

                                    <Bhuro/>
                                </ul>

                            
                            </div>

                        </div>
                    </nav>
                </div>

            </div>

        </div>
    )
}


export function Moredata() {
    return (
        <div>

            <div className='img container-fluid'>

                <div style={{ width: 450 }}>
                    <h5 style={{ color: "red", marginTop:"30px",}}>POMPEO POTTERY</h5>

                    <h1 id='fon'>Unique Porcelain <span style={{ color: "red" }}>&</span> Stone Collection</h1>

                    <p>Unique & modern pottery made by our master in porcelain & stones</p>

                    <br />

                    <Link to={'/shop'}><button id='btn'>SHOP COLLECTION</button></Link>
                    <br /><br /><br />
                </div>

                <div>
                    <img src="background1.jpg" alt="" height={400} />
                </div>

            </div>

        </div>
    )
}

export function Fielddata() {

    var vasespage = useNavigate()

    var vases = () => {
        vasespage("/vases")
        // console.log("jadav")
    }

    var mugpage = useNavigate()

    var mug = () => {
        mugpage("/mugs")
    }

    var platepage = useNavigate()

    var plates = () => {
        platepage("/plates")
    }
    return (
        <div>

            <div className='id1'>

                <div className='id2'>

                    <div className='in1'>
                        <p>PRODUCT CATEGORIES</p>
                        <h1>Porcelain <span style={{ color: "red" }}>&</span> Pottery</h1>
                    </div>

                    <div className='in2'>

                        <div className='gl1'>

                            <div className='gol' onClick={vases} style={{ cursor: "pointer" }}>
                                <div className='glin1'>
                                    <img src="glin1.jpg" alt="" />
                                    <br />
                                    <p>VASES</p>
                                </div>
                            </div>

                        </div>

                        <div className='gl1'>

                            <div className='gol gol1' onClick={mug} style={{ cursor: "pointer" }}>
                                <div className='glin1 gol12'>
                                    <img src="glin2.jpg" alt="" />
                                    <br />
                                    <p>MUGS</p>
                                </div>
                            </div>

                        </div>

                        <div className='gl1'>

                            <div className='gol gol2' onClick={plates} style={{ cursor: "pointer" }}>
                                <div className='glin1 gol3'>
                                    <img src="glin3.jpg" alt="" />
                                    <br />
                                    <p>PLATES</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <br /><br /><br /><br />

                    <div className='in3 container'>

                        <div className='left'>
                            <h1>Hand Grafted <br /> Pottery since 1990</h1>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                        </div>

                        <div className='left'>
                            <h1>We Provide Premium <br /> Pottery Produts</h1>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div style={{ height: "2px", width: "100%", background: "gray" }}></div>

        </div>
    )
}

export function Gold() {
    return (
        <div className='golder0012'>

            <div className='container'>

                <div style={{ paddingTop: "150px" }}>

                    <div className='cunj' style={{ paddingBottom: "180px" }}>

                        <div className='cunjimg'>
                            <img src="background1.jpg" alt="" height={400} />
                        </div>

                        <div className='cunjdetail'>
                            <h3>Gold & Black Pottery</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>

                            <br />
                            <a href="#">View Details</a>
                        </div>


                    </div>

                    <div className='cunj' style={{ paddingBottom: "180px" }}>

                        <div className='cunjdetail'>
                            <h3>Orange Ceramic</h3>
                            <br />
                            <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>

                            <br />
                            <a href="#">View Details</a>
                        </div>

                        <div className='cunjimg'>
                            <img src="cunjimg2.jpg" alt="" height={400} />
                        </div>

                    </div>

                </div>

            </div>
            <div style={{ height: "2px", width: "100%", background: "gray" }}></div>

        </div>
    )
}

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
//     <img src="Mint Bowl.jpg" alt="" height={200} width={200}/>,
// ];

// export const Carousel = () => (
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         responsive={responsive}
//         controlsStrategy="alternate"
//     />
// );

export function Collection1() {

    var [d, setd] = useState()

    var navpage = useNavigate()

    useEffect(() => {
        fetch("http://localhost:1001/collection")
            .then((res) => { return res.json() })
            .then((data) => {
                setd(data)
            })
    }, [])

    var hendelcolle = (k) => {
        navpage('/product/' + k)
    }

    return (
        <div>
            <div className='collection1'>

                <div className='container'>

                    <div className='details pb-5'>

                        <h5 style={{ color: "red" }}>OUR ONLINE STORE</h5>
                        <h1>Product Collection</h1>
                        <br/><br/>
                    </div>

                    <div className='product'>

                        {d &&
                            d.map((s) => (
                                <div className='mn' key={s.name}>
                                    <div style={{ overflow: "hidden" }}>
                                        <div className='imgproduct'>
                                            <img src={s.url} alt="" width={340} onClick={() => { hendelcolle(s.id) }} />
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
                    <Link to={'/shop'}><button id='btn'>VIEW ALL PRODUCTS</button></Link>
                </center>
                <br /><br /><br /><br /><br />

            </div>

        </div>
    )
}

export function Shopping0() {
    return (
        <div>
            <div className='vs sv backimg'>
                <div className='container'>
                    <h1>Product Page</h1>
                    <p className='w-75'>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                    <br />
                    <button id='btn'>NEW COLLECTION</button>
                </div>
            </div>
        </div>
    )
}

export function Letest() {
    var [i, seti] = useState("")

    var added = ()=>{

        var inp = document.getElementById("inpdata")

        if(inp.value == "" || inp.value.length <= 1)
        {
            alert("pleas enter a value and mini-mum 2 letter's")
        }

        else 
        {
            alert("thank you for subscribe...!")
            inp.value = ""
        }

    }

    return (
        <>
            <center>
                <i className="fa-brands fa-telegram v" style={{ fontSize: "60px", padding: "10px", borderRadius: "50px" }}></i>
                <br /><br />
                <h5 style={{ color: "red", letterSpacing: "4px" }}>LETTEST NEWS</h5>
                <h1 style={{ fontSize: "50px" }}>Latest news & New updates</h1><br /><br />

                <div className='inp'>
                    <input type="text" name="" id='inpdata' value={i} onChange={(s) => { seti(s.target.value) }} />
                    <input className='btn0' type="button" name="" value="SUBSCRIBE" onClick={added}/>
                    <br /><br />
                    <input type="checkbox" name="" value="" />
                    <span style={{ marginLeft: "10px" }}>Sign up for our newsletter</span>
                </div>

            </center>
        </>
    )
}

export function Futer() {
    return (
        <div className='back' style={{ marginTop: "50px" }}>
            <div className='container futer py-5'>

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
            <center>
                <div style={{ padding: "30px", backgroundColor: "#ebebeb" }}>
                    Template design by Dorian Hoxha - View all templatesPowered by Webflow
                </div>
            </center>
        </div>
    )
}

export function Add(){
    var ravi = ()=>{
        alert("you can buy this item only for shop menu..")
    }
    return(
        <>
        <button className='btn btn-primary' onClick={ravi}>Add To Cart</button>
        </>
    )
}

export default Navbar
