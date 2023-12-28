const express=require('express')
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()
const {product_api,user_api, order_api} = require("./Routes/Customer/index")
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(bodyparser.json())
app.use('/user',product_api)
app.use('/customer',user_api)
app.use('/user',order_api)


app.listen(2025,()=>console.log('server started on port:2025'))