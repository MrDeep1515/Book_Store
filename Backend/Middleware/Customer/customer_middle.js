const {VerifyToken} = require("../../Jwt/Customer/customer_middle")

function Check_Customer(req,res,next) {
    let header = req.header("Auth")
    if (header) {
        let data = VerifyToken(header)
       
        if (data) {
            req.getcustomer=data
            next()
        } else {
            res.status(404).json("you are not valid user")
        }
    } else {
        res.status(404).json("you are not valid user")
        
    }
}

module.exports = {Check_Customer}