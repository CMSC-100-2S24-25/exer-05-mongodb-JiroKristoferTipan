import mongoose from "mongoose";

await mongoose.connect(`mongodb://127.0.0.1:27017/StudentDatabase`);

const Student = mongoose.model('studentData',{
    stdnum: String,
    fname: String,
    lname: String,
    age: String
}, 'studentData');

//get
const user = async (req,res) => {
    let output = await Student.find({stdnum:req.query.stdnum});
    res.send(output);
}

const members = async (req,res) => {
    let output = await Student.find();
    res.send(output);
}


//post
const saveStudent = (req,res) => {

}

const update = (req,res) => {

}

const removeUser = (req,res) => {

}

const removeAllUser = (req,res) => {

}

export{user, members, saveStudent, update, removeUser, removeAllUser}