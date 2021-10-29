// require mongoose first 
const mongoose = require('mongoose');
// set up shortcut variable 
const Schema = mongoose.Schema;
// define our schema
const cardSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    nickName: String,
    linkedIn: String,
    portfolio: String,
    // employed: { type: Boolean, required: true },
    companyName: String,
    jobTitle: String,
    hobbies: { type: String, required: true },
    managedBy: String 
    },
    {timestamps: true}
);
// export our schema after we compile it into a model


// A model allows us to create data using the schema for reference
// A model also includes all
const cardModel = mongoose.model('userCard', cardSchema);

// model.create
// model.findById()
// model.findByIdAndUpdate()
// model.findByIdAndDelete()
// model.findOne()
// model.find()
module.exports = cardModel;
