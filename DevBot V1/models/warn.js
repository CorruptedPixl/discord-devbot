const mongoose = require("mongoose");

const warndbSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    modID: String, 
    reason: String
    
});

module.exports = mongoose.model("warndb", warndbSchema)
