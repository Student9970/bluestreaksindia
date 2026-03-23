import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

const f = createUploadthing();

export const ourFileRouter = {
  productImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const session = await getSession();
      if (!session || !getPersonaAccess(session.persona).includes("products")) {
        throw new UploadThingError("Unauthorized");
      }
      return { userId: session.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId, url: file.ufsUrl };
    }),
};
