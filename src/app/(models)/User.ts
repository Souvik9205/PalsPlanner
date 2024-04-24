import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    user: String,
    email: String,
    TotalTask: {
      type: Number,
      default: 0,
    },
    DoneTask: {
      type: Number,
      default: 0,
    },
    tasks: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
