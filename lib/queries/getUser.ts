import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";

export const getUser = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("User not found");

  const user = await db.select().from(users).where(eq(users.clerkId, userId));

  if (!user[0]) throw new Error("User not found");

  return user[0];
};
