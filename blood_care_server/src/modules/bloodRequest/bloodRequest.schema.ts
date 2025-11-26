import { BloodRequest } from './bloodRequest.type';
import mongoose, { Schema, model } from "mongoose";

const BloodRequestUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
  },
  { _id: false }
);

const BloodRequestSchema = new Schema(
  {
    patientName: { type: String, required: true },

    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },

    unitsNeeded: { type: Number, required: true },

    hospitalName: { type: String, required: true },

    location: { type: String, required: true },

    requiredDate: { type: Date, required: true },

    contactNumber: { type: String, required: true },

    additionalNotes: { type: String },

    createdBy: {
      type: BloodRequestUserSchema,
      required: true,
    },
  },
  { timestamps: true }
);

export const BloodRequestModel = mongoose.model<BloodRequest>('bloodRequest', BloodRequestSchema);
