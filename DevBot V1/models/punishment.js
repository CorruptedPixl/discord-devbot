// This will be used by bans, mutes and kicks to make it easier. punishment type will be stated in "type"
const mongoose = require("mongoose");

const punishmentSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    userID: String,
    modID: String,
    reason: String
    
});

module.exports = mongoose.model("punishment", punishmentSchema)
