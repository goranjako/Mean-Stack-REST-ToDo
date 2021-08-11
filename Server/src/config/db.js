import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database connection successfull");
  } catch (error) {
    console.error("Database Connection fail", error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    console.log("Database connection close");
    return mongoose.disconnect();
  } catch (error) {
    console.log("Database disconnection error", error);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };