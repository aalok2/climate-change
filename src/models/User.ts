import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  impactSummary: {
    treesPlanted: number;
    co2Reduced: number;
    plasticRemoved: number;
  };
  goals: {
    treesGoal: number;
    co2Goal: number;
    plasticGoal: number;
  };
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  impactSummary: {
    treesPlanted: { type: Number, default: 0 },
    co2Reduced: { type: Number, default: 0 },
    plasticRemoved: { type: Number, default: 0 },
  },
  goals: {
    treesGoal: { type: Number, default: 0 },
    co2Goal: { type: Number, default: 0 },
    plasticGoal: { type: Number, default: 0 },
  },
});

export default mongoose.model<IUser>("User", UserSchema);
