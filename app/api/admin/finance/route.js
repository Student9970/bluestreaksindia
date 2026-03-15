import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Finance from "@/models/Finance";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

export async function GET() {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("finance")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await connectToDB();
  const finances = await Finance.find({}).sort({ createdAt: -1 });
  return NextResponse.json(finances);
}
