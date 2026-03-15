import mongoose from "mongoose";

const FinanceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    loanType: { type: String, required: true },
    assetType: { type: String, default: "" },
    loanAmount: { type: String, required: true },
    district: { type: String, default: "" },
    state: { type: String, default: "" },
  },
  { timestamps: true }
);

const Finance =
  mongoose.models.Finance || mongoose.model("Finance", FinanceSchema);
export default Finance;
