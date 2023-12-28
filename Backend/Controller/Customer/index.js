const {Products,GetProduct} = require("./product_function")
const {Orders,createOrder} = require("./orders")
const {Login,createCustomer,GetCustomer} = require("./users")

module.exports={Products,GetProduct,Orders,createOrder,Login,createCustomer,GetCustomer}