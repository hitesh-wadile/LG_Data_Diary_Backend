
exports.home = async(req, res) => {
    try {
        res.send('This is Home Route');
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });  
    }  
}


exports.login = async(req, res) => {
    try {
        res.send('This is Login Route');
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });  
    }
}

exports.register = async(req, res) => {
    try {
        res.send('This is Register Route');
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });  
    }
}