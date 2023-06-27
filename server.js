const express=require("express");

//express server setup
const app=express();

const PORT=process.env.PORT||3001;

app.use(express.static("public"));

//include middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());