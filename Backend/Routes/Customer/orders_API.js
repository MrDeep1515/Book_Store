const express = require("express")
const app = express.Router()
const { Orders,createOrder } = require("../../Controller/Customer/index")
const {Check_Customer} = require("../../Middleware/Customer/customer_middle")
app.get('/orders',Check_Customer, Orders)
app.post('/createOrder',Check_Customer,createOrder)

module.exports = app