const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const connectToDb = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URL)
    .then((connection) => {
      console.log(`Connected to DB: ${connection.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectToDb;
