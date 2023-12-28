const connection = require("../../db")
const {GenerateToken, DecodeToken} = require("../../Jwt/Customer/customer_middle")


function Login(req,res) {
    const {email,password} = req.body;
    connection.query("select * from customers where email=? and password=?",[email,password],(error,results)=>{
        console.log(results)
        if (results.length>0) {
            let obj = JSON.stringify(results[0])
            let token = GenerateToken(obj)
            res.json(token.length>0?token:false)
        } else {
            res.json(error===null?false:"server issue")
        }
       
    })
    
}

function createCustomer(req,res) {
    const {name,email,password,contact} = req.body;
    connection.query("insert into customers (name,email,password,contact) values (?,?,?,?)",[name,email,password,contact],(error,results)=>{
        if (results) {
            res.json(results)
        } else {
            res.json(error)
        }
    })
    
}

function GetCustomer(req,res) {
    let customer = req.getcustomer
    if (customer) {
        res.json(customer)
    } else {
        res.json(false)
    }
   
}

module.exports={createCustomer,Login,GetCustomer}