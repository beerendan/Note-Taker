//Require dependencies
const express=require("express");
const html=require("./routes/html");
const api=require("./routes/api");
const routes=require("./routes/index");

//express server setup
const app=express();

//Pick a port
const PORT=process.env.PORT||3001;

app.use(express.static("public"));

//include middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//call entire index file instead of each individually
app.use("/", routes);
//app.use("/api", api);

app.listen(PORT, ()=> {
    console.log(`Listening on PORT ${PORT}`)
});