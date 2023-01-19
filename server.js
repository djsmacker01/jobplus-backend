require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 4000;

// app.get('/', (req, res) =>{
//     res.send('Hello World!');
// })

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
