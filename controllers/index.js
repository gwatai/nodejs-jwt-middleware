const home = (req,res) => {
    
    res.status(200).json({
        message: "Successful login"

    })
}

module.exports = {
    home
}