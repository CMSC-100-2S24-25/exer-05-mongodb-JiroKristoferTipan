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
const saveStudent = async (req,res) => {
    if (req.query.stdnum && req.query.fname && req.query.lname && req.query.age){
        let newUser = {
            stdnum: req.query.stdnum,
            fname: req.query.fname,
            lname: req.query.lname,
            age: req.query.age
        };
        await newUser.save();
        res.send ({intserted: true});
    } else {
        res.send ({intserted: false});
    }
}

const update = async (req,res) => {
    let stud = await Student.findOne({ fname: "Tracy"});
    stud.fname = req.query.fname;
    stud.lname = "Parker";
    await stud.save();
}

const removeUser = async (req,res) => {
    try {
        await Student.deleteOne({stdnum: req.query.stdnum});
        console.log({deleted: true});
        res.send({deleted: true});
    } catch (err){
        console.log({deleted: false});
        res.send({deleted: false});
    }
}

const removeAllUser = async (req,res) => {
    try {
        await Student.deleteMany({});
        console.log({deleted: true});
        res.send({deleted: true});
    } catch (err){
        console.log({deleted: false});
        res.send({deleted: false});
    }
}

export{user, members, saveStudent, update, removeUser, removeAllUser}