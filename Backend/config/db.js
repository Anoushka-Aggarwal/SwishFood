import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB connection error:", err));
};
