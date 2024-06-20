import express from "express";


//home router
const homeRouter = express.Router();

homeRouter.get('/', (req,res)=>{
    res.send({msg:'this is home page'})
})

//export router
export default homeRouter;