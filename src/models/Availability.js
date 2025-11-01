import mongoose from "mongoose";

const UnavailabilitySchema = new mongoose.Schema({
  date: { type: String, required: true }, 
  startTime: { type: String, required: true }, 
  endTime: { type: String, required: true }, 
});

const AvailabilitySchema = new mongoose.Schema(
  {
    unavailableSlots: [UnavailabilitySchema], 
  },
  { timestamps: true }
);

export default mongoose.model("Availability", AvailabilitySchema);
