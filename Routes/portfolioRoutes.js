const express = require("express")
const { sendEmailController , getallMessage} = require("../portfolioCTrl/sendEmailCtrl")
const router = express.Router()

router.post("/sendMessage" , sendEmailController )
router.get("/getallMessage" , getallMessage )


module.exports = router