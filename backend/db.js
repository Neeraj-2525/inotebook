const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({ path: './backend/config.env' });

const mongoURI = "mongodb://localhost:27017/inotebookBackend";
// const atlasURI = process.env.DATABASE

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(() => console.log("Successfully Connected to db"))
    .catch((e) => console.log("Refused to connect \n" + e))
}

module.exports = connectToMongo;

