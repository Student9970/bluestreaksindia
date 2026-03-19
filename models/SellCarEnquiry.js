import mongoose from "mongoose";

const SellCarEnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    year: { type: String, default: "" },
    variant: { type: String, default: "" },
    kmDriven: { type: String, default: "" },
    expectedPrice: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

const SellCarEnquiry =
  mongoose.models.SellCarEnquiry ||
  mongoose.model("SellCarEnquiry", SellCarEnquirySchema);
export default SellCarEnquiry;
