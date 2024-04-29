import React, { useEffect, useState } from 'react'
import { Add } from './Navbar'
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var Addcart = JSON.parse(localStorage.getItem("jadav3")) ?? [] 


function Bhuro() {

    var alert0 = ()=>{
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

    function Deleted(a){
        var deletedid = Addcart.filter((b)=>{
            return b.id != a
        })

        localStorage.setItem("jadav3",JSON.stringify(deletedid))
        // console.log(deletedid)
        window.location.reload()
    }

    return (
        <div>
        <button id='bn' style={{marginTop:"11px",marginLeft:"20px",borderRadius:"6px"}} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            ADD TO CART 
        </button>

        <div className="offcanvas offcanvas-start" id="offcanvasExample" 
        aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your Order</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <div>
                        
                    {
                        Addcart && 
                        Addcart.map((p)=>(
                            <div key={p.id}>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap",paddingBottom:"10px"}}>
                                <div>
                                <img src={p.url} alt=""  height={100} width={100}/>
                                </div>
                                <div style={{paddingTop:"2px"}}>
                                    <p>{p.name}</p>
                                    <p>$ {p.price} USD</p>
                                    <div className='di'>
                                    <button className='btn btn-danger' onClick={()=>{Deleted(p.id)}}>Remove</button>
                                    <button className='btn btn-primary ms-5'  onClick={alert0}>Buy Now</button>
                                    </div>
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

export default Bhuro
