const mongoose = require("mongoose");
require("dotenv").config();

 const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("MONGODB CONNECTION ON SUCCESSFULLY")
  } catch (error) {
    console.log("MONGODB NOT CONNECT ", error.message)
  }
};


module.exports = dbConnect
