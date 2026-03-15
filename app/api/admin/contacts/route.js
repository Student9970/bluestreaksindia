import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Contact from "@/models/Contact";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

export async function GET() {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("contact")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await connectToDB();
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  return NextResponse.json(contacts);
}
