import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from './data';
import { Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Canva({ number }) {

    // is number ke andar incriment wale input ki value aa rahi he 

    var { id } = useParams()

    var Addcart = JSON.parse(localStorage.getItem("jadav3")) ?? [] 

    var click2 = () => {

        var alldata = data[5].shop.find((s)=>{
                return s.id == id
        })

        alldata = {id:alldata.id,url:alldata.url,name:alldata.name,price: alldata.price * number}
        
        // console.log(alldata.price * number)

       let chkdata =  Addcart.find((v)=>{
            return v.id == id

        })

        if(chkdata)
        {
        return toast.info('This items is alrady exits....!', {
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
            Addcart.push(alldata)
            localStorage.setItem("jadav3",JSON.stringify(Addcart))
        }
    }

    var alert0 = () => {
        toast.info('Working In Progress...!', {
            position: "top-center",
            autoClose: 2497,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
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
                            Addcart &&
                            Addcart.map((p) => (
                                <div key={p.id}>

                                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                                        <div>
                                            <img src={p.url} alt="" height={100} width={100} />
                                        </div>
                                        <div style={{ paddingTop: "2px", paddingLeft: "40px" }}>
                                            <p>{p.name}</p>
                                            <p>{p.price}</p>
                                            <button className='btn btn-danger'>Remove</button>
                                            <button className='btn btn-primary ms-5' onClick={alert0}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Canva


