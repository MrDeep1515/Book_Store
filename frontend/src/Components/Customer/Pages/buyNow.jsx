import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BuyNow = () => {
    const [products, setProducts] = useState([])
    let userToken = localStorage.getItem("token")

    let Id = useParams()
    useEffect(() => {
        GetProductById();
    }, [])

    async function GetProductById() {
        let data = await fetch('http://localhost:2025/user/getProduct',
            {
                method: "POST",
                headers: ({ "Content-Type": "application/json" }),
                body: JSON.stringify({ Id: Id.id })
            })
        data = await data.json()
        if (data) {

            console.log("fetch data successfully");
        } else if (!data) {
            alert("out of stock")
        }
        else {
            console.log("data not fetch");
        }
        setProducts(data[0])

    }
    return (
        <>
            
            <div class="card" style={{ width: "100%" }}>

                <img style={{ height: "20rem" }} src={`https://picsum.photos/id/${products.Id + 500}/100/100`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{products.product_name}</h5>
                    <p class="card-text">{products.description}</p>
                    <h5>Stock: {products.stock}</h5>
                    <h5>Price: {products.price} Rs.</h5>
                    {
                        userToken == null ?
                            <button><Link to={"/login/" + Id.id}>Login</Link></button> :
                            <button><Link to={`/orderRegister/${products.Id}`}>Buy Now</Link></button>
                    }
                </div>
            </div>
        </>
    )
}

export default BuyNow;