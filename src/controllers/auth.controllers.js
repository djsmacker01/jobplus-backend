// login user

const login = async (req, res) => {
    return res
    .status(200)
    .json({message: 'Logged in successfully', token: 'token goes here'})
};

// export all the functions
module.exports ={
    login,
};