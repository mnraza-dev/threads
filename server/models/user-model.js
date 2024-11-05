import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, select: false },
    bio: { type: String, default: "Hey There, I am using Threads App" },
    profilePic: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
    },
    public_id: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
