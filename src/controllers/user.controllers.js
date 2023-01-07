const userServices = require('../services/user.services');


//create a new user

const  createUser = async(req, res) => {
    const {first_name,last_name, email, password,confirm_password} = req.body;

    try{
        const user = await userServices.createUser(req.body);
        return res.status(201).send({message:'user created', user});
    }
    catch(error)
    {
        return res.status(400).send(error.message);
    }
}

//export all functions
module.exports = {
    createUser,
}