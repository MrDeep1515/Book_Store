
const jwt=require('jsonwebtoken')


const GenerateToken=(data)=>{
    const obj = JSON.parse(data)
    let jtoken=jwt.sign(obj,'secretkey123')
    return jtoken
}

const DecodeToken=(data)=>{
    let jtoken=jwt.decode(data,'secretkey123')
    return jtoken
}

const VerifyToken=(data)=>{
    try {
        let jtoken=jwt.verify(data,'secretkey123')
        return jtoken
    } catch (error) {
        return(false)
    }

}

module.exports={GenerateToken,DecodeToken,VerifyToken}