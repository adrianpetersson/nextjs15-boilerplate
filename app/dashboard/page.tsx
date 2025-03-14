import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();
  return (
    <div className="min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col gap-8 sm:items-start">
        <p>Protected route example {userId}</p>
      </main>
    </div>
  );
}
