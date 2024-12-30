const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://mohdsuhail2762:<WBBRl6oxhwnVnNwF>@ims.90lap.mongodb.net/?retryWrites=true&w=majority&appName=IMS";

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
