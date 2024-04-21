const mongoose = require("mongoose")
const express = require("express")

const app  = express()

const DATABASE = "mongodb://mymongo:27017/testup"; 
mongoose.connect(DATABASE)
 .then( () => {
    console.log("DB Connected!!!");
 } )
 .catch( () => {
    console.log("ERROR in DB Connection!!!");
 } );

 app.get( "/", (req, res) =>{
   res.json({
      message: "You are visiting Root Route..."
   })
 })
 app.listen(8000, () => {
   console.log("Server started on port 8000");
 })
