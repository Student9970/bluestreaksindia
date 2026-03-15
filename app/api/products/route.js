import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Fetch products error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
