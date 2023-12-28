const express = require("express")
const app = express.Router()
const {Products,GetProduct} = require("../../Controller/Customer/index")
 const {Check_Customer} = require("../../Middleware/Customer/customer_middle")

app.get('/products',Products)
app.post('/getProduct',GetProduct)

module.exports=app
