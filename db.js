const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://mychoice:mychoice@cluster0.5szyr.mongodb.net/rent-cars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose