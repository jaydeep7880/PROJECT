import { retry } from '@reduxjs/toolkit/query'
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Canva({ number }) {
    var { id } = useParams()
    var [t, sett] = useState("")
    var [d, setd] = useState("")

    var t = { id: t.id, name: t.name, url: t.url, price: t.price * number }

    useEffect(() => {
        fetch("http://localhost:1001/shop")
            .then((res) => { return res.json() })
            .then((data) => {
                var r = data.filter((s) => {
                    return s.id == id
                })

                sett(r[0])
                // console.log(r)
            })
    }, [])

    var click2 = (e) => {

        fetch("http://localhost:1001/canvas")
            .then((res) => { return res.json() })
            .then((data) => {
                var ravi = data.find((s) => {
                    return s.id == t.id
                })
                if (ravi) {
                    return alert("This item is alredy exix")
                }
                else {
                    fetch("http://localhost:1001/canvas", {
                        method: "post",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(t)
                    })
                    e.preventDefault()
                }
            })

    }

    useEffect(() => {
        fetch("http://localhost:1001/canvas")
            .then((res) => { return res.json() })
            .then((data) => {
                setd(data)
            })
    }, [])

    var remove = (g) => {
        fetch("http://localhost:1001/canvas/" + g, {
            method: "delete",
            headers: { "content-type": "application/josn" },
        })
            .then((res) => {
                if (res) {
                    alert("Deleted...")
                    window.location.reload()
                    // window.scrollTo(0,0)
                }
            })
    }

    var alert0 = () => {
        alert("working in progress...")
    }

    return (
        <div>
            <button id='bn' style={{ marginTop: "11px", marginLeft: "20px", borderRadius: "6px" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={click2}>
                ADD TO CART
            </button>

            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your Order</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>

                        {
                            d &&
                            d.map((p) => (
                                <div key={p.id}>
                                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                                        <div>
                                            <img src={p.url} alt="" height={100} width={100} />
                                        </div>
                                        <div style={{ paddingTop: "2px", paddingLeft: "40px" }}>
                                            <p>{p.name}</p>
                                            <p>{p.price}</p>
                                            <button className='btn btn-danger' onClick={() => { remove(p.id) }}>Remove1010</button>
                                            <button className='btn btn-primary ms-5' onClick={alert0}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Canva


