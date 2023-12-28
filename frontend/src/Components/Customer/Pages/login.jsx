import React, { useState } from 'react'
import { useParams, Form } from 'react-router-dom'

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const [name,setName] = useState("")
    const [contact,setContact] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { id } = useParams()

    async function LoginData() {
        let data = await fetch('http://localhost:2025/customer/login',
            {
                method: "POST",
                headers: ({ "Content-Type": "application/json" }),
                body: JSON.stringify({ ...loginForm })
            })
        data = await data.json()
        if (!data) {
            alert("Incorrect Login")
        } else {
            localStorage.setItem("token", data)
            Number(id) > 0 ? window.location.href = "/buyNow/" + id : window.location.href = "/"
        }
    }

    async function SignupData() {
        let data = await fetch('http://localhost:2025/customer/createCustomer',
        {
            method:"POST",
            headers:({"Content-Type":"application/json"}),
            body: JSON.stringify( {name,contact,email,password})
        })
        data = await data.json()
        if (data) {
            console.log("customer created");
        } else {
            console.log("not created");
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", height: "90vh", alignItems: "center", backgroundImage: "url(https://www.shutterstock.com/image-vector/open-book-over-blue-background-260nw-2071858676.jpg)", backgroundSize: "cover" }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", }}>
                <Form style={{ width: "80%" }} onSubmit={LoginData}>
                    <h1>Login</h1>
                    <div>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" onChange={(e) => setLoginForm({ ...loginForm, [e.currentTarget.id]: e.target.value })} aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" onChange={(e) => setLoginForm({ ...loginForm, [e.currentTarget.id]: e.target.value })} placeholder="Password" required />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </div>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", }}>
                <Form style={{ width: "80%" }} onSubmit={SignupData}>
                    <h1>Sign Up</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contact</label>
                        <input type="number" class="form-control" id="contact" placeholder="Contact" required onChange={(e)=>setContact(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default Login