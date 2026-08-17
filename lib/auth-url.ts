if (!process.env.NEXTAUTH_URL) {
  const host =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  process.env.NEXTAUTH_URL = host
    ? `https://${host}`
    : "http://localhost:3000";
}
