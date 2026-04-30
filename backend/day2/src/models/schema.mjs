import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
    },
    dob: {
      type: String,
      required: [true, "dob is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
  },
  { timestamps: true },
);
const userModel = mongoose.model("student", studentSchema);
export default userModel;
