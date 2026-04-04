import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

const MAX_BYTES = 4 * 1024 * 1024; // 4MB — match previous product image limit

function configureCloudinary() {
  if (process.env.CLOUDINARY_URL) {
    cloudinary.config(true);
    return true;
  }
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;
  if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
    return true;
  }
  return false;
}

export async function POST(req) {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("products")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  if (!configureCloudinary()) {
    console.error("Cloudinary is not configured (CLOUDINARY_URL or cloud/key/secret).");
    return NextResponse.json(
      { error: "Image upload is not configured on the server." },
      { status: 503 },
    );
  }

  let formData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || typeof file === "string" || !file.size) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Image must be 4MB or smaller." },
      { status: 400 },
    );
  }

  const mime = file.type || "";
  if (!mime.startsWith("image/")) {
    return NextResponse.json(
      { error: "Only image files are allowed." },
      { status: 400 },
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${mime};base64,${buffer.toString("base64")}`;

  try {
    const result = await cloudinary.uploader.upload(base64, {
      folder: "bluestreakindia/products",
      resource_type: "image",
      use_filename: true,
      unique_filename: true,
    });
    const url = result.secure_url || result.url;
    if (!url) {
      return NextResponse.json(
        { error: "Upload succeeded but no URL was returned." },
        { status: 500 },
      );
    }
    return NextResponse.json({ url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload image. Try again or paste an image URL." },
      { status: 500 },
    );
  }
}
