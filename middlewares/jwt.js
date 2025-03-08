const jwt = require('jsonwebtoken')




const signJwt = () => {

    let token = jwt.sign({
        data: "foo"
    }, 
    'secret', {expiresIn: '1hr'}
)

console.log(token)


}

signJwt()


const verifyJwt = async (req, res, next) => {  
    //0723212842 muriithi sparrow

    bearerToken = req.headers.authorization.split('Bearer ');

    console.log("Bearer ", bearerToken[1])
    jwt.verify(bearerToken[1], 'secret', (err, decoded) => {
        if (err) console.log('Error occured', err)
        else {
            console.log("decoded", decoded)
            next()
        }
    })


}

module.exports = {
    verifyJwt
}