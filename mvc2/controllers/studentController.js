// const express = require("express");
// const app = express();

// const studentModel = require("../models/studentModels");
// app.set("view engine", "ejs");
// const studentSave = (req, res) => {
//     let studentData = new studentModel({
//         rollno: req.body.rno,
//         name: req.body.nm,
//         city: req.body.city,
//         fees: req.body.fees
//     });
//     studentData.save().then((data) => {
//         res.render("./insert")
//     });
// }

// const studentDisplay = (req, res) => {
//     studentModel.find().then((data) => {
//         let mydata = data;
//         res.render("display", { stuData: mydata });
//     });
// }

// const studentDelete = (req, res) => {
//     studentModel.findByIdAndRemove(req.params.id).then((data) => {
//         studentModel.find().then((data) => {
//             let mydata = data;
//             res.render("display", { stuData: mydata });
//         });
//     });
// }

// const studentEdit = (req, res) => {
//     let myid = req.params.id;
//     studentModel.find({ _id: myid }).then((data) => {
//         let myData = data;
//         res.render("edit", { stuData: myData });

//     });
// }

// const studentEditSave = (req, res) => {
//     let myid = req.body.user_id;
//     let myrollno = req.body.rno;
//     let myname = req.body.nm;
//     let mycity = req.body.city;
//     let fees = req.body.fees;

//     studentModel.findByIdAndUpdate({ _id: myid }, {
//         rollno: myrollno,
//         name: myname,
//         city: mycity,
//         fees: fees
//     }).then((data) => {
//         res.render("home");
//     });
// }


// module.exports = {
//     studentSave,
//     studentDisplay,
//     studentDelete,
//     studentEdit,
//     studentEditSave
// }
const studentModel = require("../models/studentModels");

const studentSave = (req, res) => {
    let studentData = new studentModel({
        rollno: req.body.rno,
        name: req.body.nm,
        city: req.body.city,
        fees: req.body.fees
    });

    studentData.save()
        .then((data) => {
            res.render("./insert");
        })
        .catch((err) => {
            // Handle error while saving data
        });
};

const studentDisplay = (req, res) => {
    studentModel.find()
        .then((data) => {
            res.render("display", { stuData: data });
        })
        .catch((err) => {
            // Handle error while fetching data
        });
};

const studentDelete = (req, res) => {
    studentModel.findByIdAndRemove(req.params.id)
        .then(() => {
            return studentModel.find();
        })
        .then((data) => {
            res.render("display", { stuData: data });
        })
        .catch((err) => {
            // Handle error while deleting data
        });
};

const studentEdit = (req, res) => {
    studentModel.findById(req.params.id)
        .then((data) => {
            res.render("edit", { stuData: data });
        })
        .catch((err) => {
            // Handle error while fetching data for edit
        });
};

const studentEditSave = (req, res) => {
    const { user_id, rno, nm, city, fees } = req.body;

    studentModel.findByIdAndUpdate(user_id, { rollno: rno, name: nm, city: city, fees: fees })
        .then(() => {
            res.render("home");
        })
        .catch((err) => {
            // Handle error while updating data
        });
};

module.exports = {
    studentSave,
    studentDisplay,
    studentDelete,
    studentEdit,
    studentEditSave
};
