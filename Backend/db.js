const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://Todo-App:sp9LB2AjGRXSH22k@ims.90lap.mongodb.net/";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
