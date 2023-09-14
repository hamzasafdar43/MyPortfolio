const userModel = require("../models/userSchema")

const sendEmailController= async(req,res)=>{
    try {
      const data =  await userModel.create({
            name:req.body.name,
            email:req.body.email,
            mesg:req.body.mesg
        })
        res.status(200).send({
            success:true,
            message:"SendEmail successfully",
            data:data
        })
    } catch (error) {
       console.log(error) 
       res.status(500).send({
        success:true,
        message:"something wrong to sendMessage",
        error
       })
    }
}

const getallMessage = async(req,res)=>{
    try {
       const message = await userModel.find({}) 
       res.status(200).json(message)
    } catch (error) {
        console.log(error) 
        res.status(500).send({
         success:true,
         message:"something wrong to getallMessage",
         error
        })
    }
}

module.exports ={sendEmailController , getallMessage}