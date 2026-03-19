import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    spec: { type: String, default: "" },
    category: { type: String, required: true },
    tags: [{ type: String }],
    desc: { type: String, default: "" },
    image: { type: String, default: "" },
    badge: { type: String, default: "" },
    price: { type: Number, default: null },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
