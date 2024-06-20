import mongoose from 'mongoose';
import dotenv from 'dotenv'
//config dot env file
dotenv.config();


//dot enve db cred
const dbuser = process.env.DB_USER;
const pass= encodeURIComponent(process.env.DB_PASS);
const DBname = process.env.DB_NAME;

// cloud db URI
const cloudURI = `mongodb+srv://${dbuser}:${pass}@cluster0.b1fwpte.mongodb.net/${DBname}?retryWrites=true&w=majority&appName=Cluster0`


// function to connect moongoose db
const mongooseconnect = async()=>{
    try{
        await mongoose.connect(cloudURI);
        console.log('mongoose connected')
    }catch(e){
        console.log(e.message);
    }
}

export default mongooseconnect;