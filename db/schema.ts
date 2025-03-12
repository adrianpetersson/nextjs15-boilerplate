import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  clerkId: text("clerk_id").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  id: serial("id").primaryKey(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
