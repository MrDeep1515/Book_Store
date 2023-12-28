 const connection = require("../../db")
 function Products(req,res) {
    // console.log(req.user_inf.name);
    connection.query("select * from products",(error,results)=>{

        if (results) {
            res.json(results)
        } else {
            res.json(error)
        }
    })
    
}

function GetProduct(req,res) {
    const {Id} = req.body;
    connection.query("select * from products where Id=? and stock >0 ",[Id],(error,results)=>{
        if (results) {
            if (results.length>0) {
                res.json(results)
            } else {
                res.json(false)
            }
           
        } else {
            res.json(error)
        }
    })
}

module.exports={Products,GetProduct}