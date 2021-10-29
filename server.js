const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require("method-override")
// const bodyParser = require('body-parser');
const serviceAccount = require('./react-crm-4633a-firebase-adminsdk-gqp6r-ee4c615249.json');
const admin = require('firebase-admin');

const app = express();
app.use(cors())
// app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"))
// configure server settings
require('dotenv').config();


const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

// connection instance shortcut variable
const db = mongoose.connection;

// connection message
db.on('connected', () => console.log(`Connected to the ${db.name} database on port:${db.port}`));
db.on('error', () => console.log(`Uh Oh! Mongodb had and error ${error.message}`));

// app.use(express.urlencoded());
// app.use(bodyParser.json());
app.use(express.json());

////
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
  app.use(async function(req, res, next) {
    //   console.log(req)
      const token = req.get('Authorization')
      console.log('this is token', token)
      const authUser = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
      req.user = authUser
      next();
  });
  
  // router auth middleware function
  function isAuthenticated(req, res, next) {
      if(req.user) return next();
      else res.status(401).json({message: 'unauthorized'});
  }
////


const cardController = require("./controllers/userCard")
app.use("/api/card", cardController);

const displayController = require("./controllers/displayCard")
app.use("/api/table", displayController);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`); 
});