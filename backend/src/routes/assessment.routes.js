const express=require('express')
const {handleGetAllQuestions, handleGetAllCategories,handleSubmitTest}=require("../controllers/assessment.controller")




const router=express.Router()

router.get("/all-questions",handleGetAllQuestions)
router.get("/all-categories",handleGetAllCategories)
router.post("/submit-test",handleSubmitTest)




module.exports=router