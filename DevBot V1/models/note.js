const mongoose = require("mongoose");

const notedbSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    modID: String, 
    note: String
    
});

module.exports = mongoose.model("notedb", notedbSchema)
