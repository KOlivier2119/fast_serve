if (!process.env.NEXTAUTH_URL) {
  const isProduction = process.env.VERCEL_ENV === "production";
  const host = isProduction
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
    : process.env.VERCEL_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

  process.env.NEXTAUTH_URL = host
    ? `https://${host}`
    : "http://localhost:3000";
}
