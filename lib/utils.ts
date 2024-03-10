import mongoose from "mongoose";
const connection = {
  isConnected: false,
};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("have connected");
      return;
    }
    const db = await mongoose.connect(
      process.env.MONGO as string,
    );
  } catch (e) {
    console.log(e);
    throw new Error(e as any);
  }
};
