const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// login a user

const login = async (body) => {
    const {email, password} = body;

    //get user from database
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    if(user.length === 0) {
        throw new Error('email or password incorrect');
    }

    // compare password
    const passMarch = await bcrypt.compare(password,user[0].password);
    if(!passMarch){
      throw new Error('password incorrect');
    }

    //Create token 
    const token = jwt.sign({id:user[0].id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE_IN,
    }
  );
  return token;
};

module.exports = {
  login,
}