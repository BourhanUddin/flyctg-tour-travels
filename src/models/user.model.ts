import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "please tell us your name "],
  },
  age: {
    type: Number,
    required: [true, "please tell us your age "],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please tell us your email"],
    lowercase: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ["user ", "admin"],
    default: "user",
  },
  userStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const User = model<IUser>("User", userSchema);
export default User;
