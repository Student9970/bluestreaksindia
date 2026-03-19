import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";
import Product from "@/models/Product";
import Dealership from "@/models/Dealership";
import SellCarEnquiry from "@/models/SellCarEnquiry";
import Contact from "@/models/Contact";
import User from "@/models/User";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const access = getPersonaAccess(session.persona);
  await connectToDB();

  const stats = {};

  if (access.includes("products")) {
    stats.products = await Product.countDocuments();
  }
  if (access.includes("dealership")) {
    stats.dealerships = await Dealership.countDocuments();
  }
  if (access.includes("finance")) {
    stats.finances = await SellCarEnquiry.countDocuments();
  }
  if (access.includes("contact")) {
    stats.contacts = await Contact.countDocuments();
  }
  if (access.includes("users")) {
    stats.users = await User.countDocuments();
  }

  return NextResponse.json(stats);
}
