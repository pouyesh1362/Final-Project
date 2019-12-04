const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.PORT;



//--------------------------------------MiddleWare---------------------------//


//--------------------------------------Body Parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//------------------------------ROUTES HERE------------------------------------//

app.get('/',(req,res) =>{
  res.send("<h1>Final project API</h1>")
})
app.use('/api/v1/auth', routes.auth);
// app.use('/api/v1/user', routes.user);
// app.use('/api/v1/house', routes.house);

app.listen(PORT, ()=>console.log(`Server connected at http://localhost:${PORT}`));
