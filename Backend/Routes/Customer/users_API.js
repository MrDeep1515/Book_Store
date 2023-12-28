const express = require("express")
const app = express.Router()
const { Login,createCustomer,GetCustomer } = require("../../Controller/Customer/users")
const {Check_Customer} = require("../../Middleware/Customer/customer_middle")
app.post('/login',Login)
app.post('/createCustomer',createCustomer)
app.post('/getCustomer',Check_Customer,GetCustomer)
module.exports = app
