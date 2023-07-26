const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebookBackend";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(() => console.log("Successfully Connected to db"))
}

module.exports = connectToMongo;

