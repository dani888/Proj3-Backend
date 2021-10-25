const mongoose = require('mongoose');
// set up shortcut variable 
const Schema = mongoose.Schema;
// define our schema
const tableSchema = new Schema({
    cardId: { type: Schema.Types.ObjectId, ref: 'userCard' },
    },
    {timestamps: true}
);

// A model allows us to create data using the schema for reference
// A model also includes all
const tableModel = mongoose.model('table', tableSchema);

// model.create
// model.findById()
// model.findByIdAndUpdate()
// model.findByIdAndDelete()
// model.findOne()
// model.find()
module.exports = tableModel;