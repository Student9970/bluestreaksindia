import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

const tokenRaw = process.env.UPLOADTHING_TOKEN;
const token = typeof tokenRaw === "string" ? tokenRaw.trim() : tokenRaw;

// Optional: only set if your DNS resolves this host (e.g. public DNS 8.8.8.8 / 1.1.1.1).
// If you see ENOTFOUND for ingest.* or auto.ingest.*, fix network DNS or use VPN/hotspot — not fixable in code.
const ingestEnv = process.env.UPLOADTHING_INGEST_URL?.trim().replace(/\/$/, "");

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    ...(token ? { token } : {}),
    ...(ingestEnv ? { ingestUrl: ingestEnv } : {}),
  },
});
