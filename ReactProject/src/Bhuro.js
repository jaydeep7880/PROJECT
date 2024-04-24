import React, { useEffect, useState } from 'react'

function Bhuro() {

    var [d, setd] = useState("")

    useEffect(()=>{
        fetch("http://localhost:1001/canvas")
        .then((res)=>{return res.json()})
        .then((data)=>{
            setd(data)
        })
    },[])

    var remove = (g)=>{
        fetch("http://localhost:1001/canvas/" + g,{
            method:"delete",
            headers:{"content-type" : "application/josn"},
        })
        .then((res)=>{
            if(res)
            {
                alert("Deleted...")
                window.location.reload()
            }
        })
    }

    
    var alert0 = ()=>{
        alert("working in progress...")
    }

    return (
        <div>
        <button id='bn' style={{marginTop:"11px",marginLeft:"20px",borderRadius:"6px"}} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
                        d.map((p)=>(
                            <div key={p.id}>
                            <div style={{display:"flex",paddingBottom:"10px"}}>
                                <div>
                                <img src={p.url} alt=""  height={100} width={100}/>
                                </div>
                                <div style={{paddingTop:"2px",paddingLeft:"40px"}}>
                                    <p>{p.name}</p>
                                    <p>$ {p.price} USD</p>
                                    <button className='btn btn-danger' onClick={()=>{remove(p.id)}}>Remove</button>
                                    <button className='btn btn-primary ms-5'  onClick={alert0}>Buy Now</button>
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

export default Bhuro
