import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
