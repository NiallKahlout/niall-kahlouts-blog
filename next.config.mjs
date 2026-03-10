import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use this directory as the workspace root (fixes multiple lockfile warning)
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
