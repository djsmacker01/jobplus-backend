const db = require('../config/database');

//create a user account
const createUser = async (body) =>{
  const {first_name,last_name, email, password,confirm_password} = body;

  // check if the user is already Exist
  const checkUser = await db.query('SELECT * FROM users WHERE email = $1', [email,] );

  if(checkUser.rows.length > 0) {
    throw new Error('User already exists');
  }

  const { rows } = await db.query(
    "INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [first_name, last_name, email, password]
  );
  return rows[0];
 
}

//export all the functions
module.exports ={
    createUser,

}