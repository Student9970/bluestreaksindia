import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import SellCarEnquiry from "@/models/SellCarEnquiry";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();
    await SellCarEnquiry.create(data);
    return NextResponse.json({
      success: true,
      message: "Sell car enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Sell car submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
