require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  const URI = process.env.MONGODB_URI;
  mongoose
    .connect(URI, {dbName : "TodoTasks"})
    .then(() => {
      console.log("MongoDB server connected successfully..");
    })
    .catch((err) => {
      console.log(
        `Error occured while connecting to MongoDB server, due to : `,
        err
      );
    });
};

module.exports = connectToDB;
