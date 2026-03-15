import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Finance from "@/models/Finance";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();
    await Finance.create(data);
    return NextResponse.json({
      success: true,
      message: "Loan application submitted successfully",
    });
  } catch (error) {
    console.error("Finance submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
