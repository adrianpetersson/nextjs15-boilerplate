import LogoIcon from "@/public/svg/logo.svg";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col gap-8 sm:items-start">
        <div className="flex items-center gap-4 p-4">
          <LogoIcon className="h-72" alt="Logo" />
          <h2 className="text-center text-4xl font-bold">
            The Addinator<sup>™</sup>{" "}
            <span className="relative inline-block before:absolute before:-inset-2 before:block before:-skew-x-15 before:bg-orange-500">
              <span className="relative text-white dark:text-gray-950">
                Next.js 15
              </span>
            </span>
            <span className="ml-2"> boilerplate</span>
          </h2>
        </div>
      </main>
    </div>
  );
}
