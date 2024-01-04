const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    rollno:
    {
        type:Number,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    fees:
    {
        type:Number,
        required:true
    }

});

module.exports = mongoose.model("student", studentSchema);


// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//     rollno: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     fees: {
//         type: Number,
//         required: true
//     }
// });

// module.exports = mongoose.model("student", studentSchema);
