import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://ideopedia:ideopedia@ideopedia.bjjoici.mongodb.net/?retryWrites=true&w=majority"
  );

export default connectMongo;
