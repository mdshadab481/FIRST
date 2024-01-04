// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.set("view engine", "ejs");
// const mongoose = require("mongoose");
// const myStudent = require("./controllers/studentController");

// app.use(express.static('public'));


// mongoose.connect("mongodb://127.0.0.1:27017/cybrom");
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/" , function(req,res){
//     res.render("home");
// });
// app.get("/insert", function(req,res){
//     res.render("insert");
// });


// app.post("/studentinsert",myStudent.studentSave);
// app.post("/editUpdateSave",myStudent.studentEditSave);

// app.get("/display" ,myStudent.studentDisplay);

// app.get("/recdel/:id" , myStudent.studentDelete);
// app.get("/recedit/:id" , myStudent.studentEdit);

// app.listen(5054, function(){
//     console.log("server is running on port no : 5054");
// });const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const myStudent = require("./controllers/studentController");

app.use(express.static('public'));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/cybrom");
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/insert", function (req, res) {
    res.render("insert");
});

app.post("/studentinsert", myStudent.studentSave);
app.post("/editUpdateSave", myStudent.studentEditSave);

app.get("/display", myStudent.studentDisplay);

app.get("/recdel/:id", myStudent.studentDelete);
app.get("/recedit/:id", myStudent.studentEdit);

app.listen(5054, function () {
    console.log("Server is running on port no : 5054");
});
