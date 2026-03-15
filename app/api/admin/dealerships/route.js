import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Dealership from "@/models/Dealership";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

export async function GET() {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("dealership")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await connectToDB();
  const dealerships = await Dealership.find({}).sort({ createdAt: -1 });
  return NextResponse.json(dealerships);
}
