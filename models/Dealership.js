import mongoose from "mongoose";

const DealershipSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    currentLocation: { type: String, required: true },
    investmentCapacity: { type: String, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

const Dealership =
  mongoose.models.Dealership || mongoose.model("Dealership", DealershipSchema);
export default Dealership;
