import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  dialect: "postgresql",
  out: "./db/migrations",
  schema: "./db/schema.ts",
});
