import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Dealership from "@/models/Dealership";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();
    await Dealership.create(data);
    return NextResponse.json({
      success: true,
      message: "Dealership enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Dealership submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
