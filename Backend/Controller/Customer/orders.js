const connection = require("../../db")

function Orders(req, res) {
    let data = req.getcustomer
    connection.query("SELECT * FROM `customerorder` LEFT JOIN products ON customerorder.productId=products.Id where customerorder.customerId=?", [data?.Id], (error, results) => {
        if (results) {
            res.json(results)
        } else {
            res.json(error)
        }
    })

}


function createOrder(req, res) {
    let data = req.getcustomer
    const { Id,
        name,
        email,
        password,
        contact,
        product_name,
        category,
        description,
        stock,
        select,
        price,
        address } = req.body;

    let query2 = "UPDATE `products` SET `stock`=products.stock-1 WHERE `Id`=?"
    let query1 = "insert into customerorder (customerId,customerName,customerAddress,paymentMode,productId) values (?,?,?,?,?)"
    connection.query(query1, [data?.Id, name, address, select, Id], (error, results) => {
        if (results) {
            connection.query(query2, [Id], (error2, results2) => {
                if (results2) {
                    res.status(200).json(true)
                } else {
                    console.log(error2);
                    res.json(error)
                }
            })
        } else {
            console.log(error);
            res.json(error)
        }
    })
}
module.exports = { Orders, createOrder }