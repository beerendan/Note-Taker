//require dependencies
const router=require("express").Router();
const fs=require("fs");
const uuid=require("./../helpers/uuid")

//Route for pulling/viewing existing notes
router.get("/notes",(req,res)=>{
    let noted=JSON.parse(fs.readFileSync("./db/db.json","utf8"));
    return res.json(noted);
});

//Route for saving/posting new notes
router.post("/notes",(req,res)=>{

})



module.exports=router;