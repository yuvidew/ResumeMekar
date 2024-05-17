const { default: mongoose } = require("mongoose");

const resumeSchema = new mongoose.Schema({
    resumeName : {
        type : String
    },
    name : {
        type : String
    },
    email : {
        type : String
    },
    number : {
        type : Number
    },
    dob : {
        type : String
    },
    gender : {
        type : String
    },
    maritalStatus : {
        type : String
    },
    address : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    pincode : {
        type : Number
    },
    imageUrl : {
        type : String,
    },
    summary : {
        type : String,
    },
    objective : {
        type : String
    },
    workingExpre : [
        {
            organization : String,
            designation : String,
            jobDurationForm : String,
            jobDurationTo : String,
            responsibility : String,
        }
    ],
    education : [
        {
            degreeCourse : String,
            instituteCollage : String,
            percentageCgpa : String,
            year : String,
            universityBoard : String,
        }
    ],
    projects : [
        {
            projectName : String,
            projectDetails : String,
            role : String,
            projectDuration : String,
            teamSize : String,
        }
    ],
    skills : [String],
    userId : {
        type : String
    }
})

const resumeList = mongoose.model('Resumes' , resumeSchema)

module.exports = resumeList