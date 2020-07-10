import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db";
import { startApolloServer } from "./apollo-server";

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();
connectDb();
startApolloServer(app);

app.use(cors());
app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
