import mongoose from "mongoose";

await mongoose.connect(`mongodb://127.0.0.1:27017/ICS`, {});

const Student = mongoose.model(`studentData`,{
    stdnum : Number,
    fname: String,
    lname: String,
    age: Number
});

const user = (req,res) => {

}

const members = (req,res) => {

}

const saveStudent = (req,res) => {

}

const update = (req,res) => {

}

const removeUser = (req,res) => {

}

const removeAllUser = (req,res) => {

}