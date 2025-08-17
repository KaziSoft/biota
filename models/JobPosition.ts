// models/JobPosition.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IJobPosition extends Document {
  title: string;
  location: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobPositionSchema = new Schema<IJobPosition>(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// ✅ Model name must match ref: 'JobPosition'
const JobPosition =
  models.JobPosition || model<IJobPosition>('JobPosition', JobPositionSchema);

export default JobPosition;
