const mongoose = require("mongoose")
const connectdb = async () =>{
    try{
        await mongoose.connect('mongodb+srv://naziha1aloui:3CnpL6XWwj10Ajdn@cluster0.9w9ucif.mongodb.net/mongo')
        console.log('bd is conneccted')

    }
    catch(error){
        console.log('error db')
    }
}
module.exports = connectdb