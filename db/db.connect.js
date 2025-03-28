const mongoose = require("mongoose");

require("dotenv").config();

const MONGOURI = process.env.MONGODB;

async function connectToDB() {
    try {
      await mongoose.connect(MONGOURI);
      console.log("Connected to DB");
    } catch (e) {
      console.log("Error occurred while connecting to DB", e);
      throw e; // Re-throw to allow calling code to handle the error
    }
  }

module.exports = { connectToDB };
