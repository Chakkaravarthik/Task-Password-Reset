import express from 'express';
import homeRouter from './Routes/home.js';
import mongooseconnect from './Db_utils/mongooseDB.js';
import cors from 'cors'
import registerRouter from './Routes/register.js';
import loginRouter from './Routes/login.js';
import forgetpasswordRouter from './Routes/forgetpassword.js';
import verifypassword from './Routes/verifypassword.js';
import resetpasswordrouter from './Routes/resetpassword.js';









//express server creation
const server = express();

//middelware
server.use(express.json());
//cors middleware
server.use(cors());

// db connection 
mongooseconnect();

//rourte for this project
server.use('/', homeRouter)
server.use('/register', registerRouter)
server.use('/login', loginRouter)
server.use('/forget-password', forgetpasswordRouter);
server.use('/verify-password', verifypassword);
server.use('/reset-password', resetpasswordrouter);


//server port 
server.listen(7500,()=>{
    console.log('server listening on port 7500')
})