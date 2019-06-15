import mongoose, { mongo } from "mongoose";

async function connect() {
   try {
    await mongoose.connect('mongodb://localhost/mongodbGragphQL', {
        useNewUrlParser : true
    });
    
    console.log('>>> DB is connected');
   } catch (error) {
       console.log(">>> Fallo la conexion");
       console.log(error);
   }
}

module.exports = {
    connect
}