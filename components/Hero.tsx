import LogoIcon from "@/public/svg/logo.svg";

export const Hero = () => {
  return (
    <div className="gap mx-auto flex flex-col items-center gap-3 p-4 py-36">
      <div className="flex gap-4">
        <LogoIcon alt="Logo" className="hidden md:block" />{" "}
        {/* Adjusted logo size */}
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          The Addinator<sup>™</sup>{" "}
          <span className="relative mt-2 inline-block before:absolute before:-inset-1 before:block before:-skew-x-15 before:bg-orange-500 md:before:-inset-2">
            <span className="relative text-white dark:text-gray-950">
              Next.js 15
            </span>
          </span>
          <span className="ml-2"> boilerplate</span>
        </h2>
      </div>
      <p className="mt-4 text-center text-lg text-gray-700 md:text-xl">
        A lightweight & <span className="underline">junk-free</span> Next.js
        starter for rapid development 🚀
      </p>
    </div>
  );
};
