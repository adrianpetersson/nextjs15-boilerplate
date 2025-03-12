import { migrate } from "drizzle-orm/neon-http/migrator";

import { db } from ".";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./db/migrations",
    });
    // eslint-disable-next-line no-console
    console.log("Migrations ran successfully");
  } catch (error) {
    console.error("Error running migrations", error);
    process.exit(1);
  }
};

main();
