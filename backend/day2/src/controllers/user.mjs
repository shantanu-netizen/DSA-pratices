import Jwt from "jsonwebtoken";
import userModel from "../models/schema.mjs";
import config from "../../config.mjs";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  try {
    const { name, email, password, username, dob, gender, phone, address } =
      req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      password: hashed,
      username,
      dob,
      gender,
      phone,
      address,
    });
    await user.save();
    return res.status(200).send({ message: "user register" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "invalid cerdential" });
    }
    if (!user.password) {
      return res
        .status(401)
        .send({ message: "Password not set, please re-register" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "invalid cerdential" });
    }
    const token = Jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      config.secerttoken,
    );
    return res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ message: "Error login", error: error.message });
  }
};
export { register, login };
