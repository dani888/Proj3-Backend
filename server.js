const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require("method-override")
const bodyParser = require('body-parser');


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


const cardController = require("./controllers/userCard")
app.use("/api/card", cardController);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`); 
});