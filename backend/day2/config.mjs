import dotenv from "dotenv"
dotenv.config()
const config = {
  uri: process.env.Uri,
  port: process.env.Port,
  secerttoken: process.env.secretToken,
};
export default config