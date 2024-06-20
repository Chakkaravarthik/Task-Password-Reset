import mongoose from "mongoose";

//schema creation 

const userSchema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
    },
    password:{
        type:"String",
        required:true,
    },
})

const userModel = new mongoose.model('user', userSchema, 'users');

export default userModel;