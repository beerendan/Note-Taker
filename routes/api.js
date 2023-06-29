//require dependencies
const router=require("express").Router();
const fs=require("fs");
const uuid=require("./../helpers/uuid");

//Route for pulling/viewing existing notes
router.get("/notes", (req, res) => {
    let noted=JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    return res.json(noted);
});

//Route for saving/posting new notes
router.post("/notes",(req,res)=>{
let newt=req.body;
newt.id=uuid();

let noted=JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
noted.push(newt);

//write new notes to db
fs.writeFileSync("./db/db.json", JSON.stringify(noted));
return res.json(noted);
});

//router.delete("/notes:id",(req,res)=>{
//    let newt=req.params.id;
//    let noted=JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//    let target=noted.filter((file)=>file.id ===target);
//    fs.writeFileSync("./db/db.json", JSON.stringify(newt));
//});

module.exports=router;