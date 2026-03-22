import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Override with MONGODB_DB_NAME if your Atlas database name differs from the default.
            dbName: process.env.MONGODB_DB_NAME || "bluestreakindia",
        });
        isConnected = true;
    } catch (error) {
        console.log("Error connecting to Database: ", error);
    }
};
