import dotenv from "dotenv";
dotenv.config()
const config = {
  uri: process.env.MongooseUri,
  port: process.env.Port || 2000,
}; 
export default config