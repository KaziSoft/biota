// models/JobApplication.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IJobApplication extends Document {
  name: string;
  email: string;
  jobId: mongoose.Types.ObjectId;
  cvUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'JobPosition', // ✅ Must match model name exactly
      required: true,
    },
    cvUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const JobApplication =
  models.JobApplication ||
  model<IJobApplication>('JobApplication', JobApplicationSchema);

export default JobApplication;
