import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";

export const getUser = async (id: number) => {
  const user = await db.select().from(users).where(eq(users.id, id));

  return user[0];
};
