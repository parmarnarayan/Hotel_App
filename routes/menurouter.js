import express, { Router } from "express";
const router =express.Router();
import MenuSchemaModal from "../modals/menuschema.js";

router.post("/",async(req,res)=>{
    try{
        const menudetails=req.body //aswing data
        const newmenu= new MenuSchemaModal(menudetails);
        const response=await newmenu.save();
        console.log("succfully menuItem items saved in the database...");
        res.status(200).json(response)
    }
      catch(err){
         console.log(err);
         res.status(500).json({err:"internal server error"})
      }
    })
export default router;