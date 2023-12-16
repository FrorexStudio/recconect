import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    avatarUrl: {
      type: String,
      default: "http://localhost:3001/uploads/default-avatar.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);