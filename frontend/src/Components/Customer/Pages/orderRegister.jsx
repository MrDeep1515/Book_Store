import { useState, useEffect } from 'react';
import { Form, Link, Navigate, useParams } from 'react-router-dom';

const OrderRegister = () => {

    let Id = useParams()
    const [user, setUser] = useState([])
    const [products, setProducts] = useState([])
    const [form, setform] = useState({ })
    let userToken = localStorage.getItem("token")

    useEffect(() => {
        if (userToken == null) {
            window.location.href = "/"
        } else {
            GetProductById();
            GetCustomerData();
        }

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
    async function GetCustomerData() {
        let data = await fetch('http://localhost:2025/customer/getCustomer',
            {
                method: "POST",
                headers: ({ "Content-Type": "application/json", "Auth": userToken })

            })

        data = await data.json()
        if (data) {
            console.log("customer found");
        } else {
            console.log("customer not found");
        }
        setUser(data)
    }
    async function OrderRegister() {
        let data = await fetch('http://localhost:2025/user/createOrder', {
            method: "POST",
            headers: ({ "Content-Type": "application/json","Auth": userToken }),
            body: JSON.stringify({...user,...products,...form})
        })
        data = await data.json()
        console.log(data)
        if (data) {
            alert("Your Order Placed Successfully")
            Navigate ("/myOrders")
        } else {
            alert("Your Order Failed")
        }
    }
    return (
        <>
            <div style={{ padding: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Order Register</h1>
                <div class="card" style={{ width: "100%" }}>
                    <img style={{ height: "20rem" }} src={`https://picsum.photos/id/${products.Id + 500}/100/100`} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{products.product_name}</h5>
                        <p class="card-text">{products.description}</p>
                        <h5>Stock: {products.stock}</h5>
                        <h5>Price: {products.price} Rs.</h5>

                    </div>
                </div>
                <Form style={{ width: "100%" }} onSubmit={()=>OrderRegister()}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" value={user.name} id="name" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" value={user.email} id="email" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Contact</label>
                        <input type="text" class="form-control" value={user.contact} id="contact" placeholder="Contact" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter Address" required onChange={(e) => setform({ ...form, [e.target.id]: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Payment Mode</label>
                        <select class="form-control" id='select' onChange={(e) => setform({ ...form, [e.target.id]: e.target.value })}>
                            <option value={null}>Select Payment Mode</option>
                            <option id='cash_on_delivery' value="Cash on Delivery">Cash on Delivery</option>
                            <option id='online' value="Online">Online</option>
                        </select>
                    </div>
                    <button type='submit' class="btn btn-success my-3 form-control">Submit Order</button>
                </Form>
            </div>
        </>
    )
}

export default OrderRegister;