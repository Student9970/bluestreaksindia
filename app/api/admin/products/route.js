import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Product from "@/models/Product";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

export async function GET() {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("products")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await connectToDB();
  const products = await Product.find({}).sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req) {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("products")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const data = await req.json();
    await connectToDB();
    const product = await Product.create(data);
    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
