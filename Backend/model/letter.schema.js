const { default: mongoose } = require("mongoose");

const letterSchema = new mongoose.Schema({
    letterName : {
        type : String,
    },
    firstName : {
        type : String,
    },
    middelName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    profession : {
        type : String,
    },
    address : {
        type : String,
    },
    phoneNum : {
        type : Number
    },
    email : {
        type : String,
    },
    recipient : {
        type : String,
    },
    companyName : {
        type : String,
    },
    streetAddress : {
        type : String,
    },
    city : {
        type : String,
    },
    state : {
        type : String,
    },
    letterText : {
        type : String,
    },
    userId : {
        type : String
    }
})

const letterData = mongoose.model('Letters' , letterSchema)

module.exports = letterData