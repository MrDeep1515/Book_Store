import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductData();
    }, [])

    async function ProductData() {
        let data = await fetch('http://localhost:2025/user/products',)
        data = await data.json()

        setProducts(data)

    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {
                products.map((e) => {
                    return (
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={`https://picsum.photos/id/${e.Id + 500}/100/100`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{e.product_name}</h5>
                                <p class="card-text">{e.description}</p>
                                <Link to={`buyNow/${e.Id}`} class="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard;