const express=require("express");
const html=require("./routes/html")
const api=require("./routes/api")

//express server setup
const app=express();

const PORT=process.env.PORT||3001;

app.use(express.static("public"));

//include middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//configure routes
app.use("/",html);
app.use("/api",api)