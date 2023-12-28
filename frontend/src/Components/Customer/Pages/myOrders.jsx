import React, { useEffect, useState } from 'react'

const MyOrders = () => {
    let userToken = localStorage.getItem("token")
    const [products,setProducts] = useState([])

    useEffect(()=>{
        if (userToken==null) {
            window.location.href="/login/orders"
        } else {
            MyOrders();
        }
        
    },[userToken])

    async function MyOrders() {
        let data = await fetch('http://localhost:2025/user/orders',
        {method:"GET",
        headers:({"Content-Type":"application/json","Auth":userToken}),
       })
        data = await data.json()
        console.log(data);
    setProducts(data)
    }
    

    return (
        <>
        {
            products.map((e)=>{
                return(
                    <div class="card" style={{ width: "100%" }}>

                    <img style={{ height: "10rem" }} src={`https://picsum.photos/id/${e.Id + 500}/100/100`} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{e.product_name}</h5>
                        <p class="card-text">{e.description}</p>
                        <h5>Delivery Status: {e.DeliveryStatus}</h5>
                        
                    </div>
                </div>
                )
            })
        }
        
        </>
    )
}

export default MyOrders;