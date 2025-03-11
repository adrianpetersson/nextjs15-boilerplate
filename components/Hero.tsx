import LogoIcon from "@/public/svg/logo.svg";
import { Initializing } from "./Initializing";
export const Hero = () => {
  return (
    <div>
      <div className="gap mt-10 flex items-center p-4 md:gap-4">
        <LogoIcon className="hidden md:block" alt="Logo" />{" "}
        {/* Adjusted logo size */}
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          The Addinator<sup>™</sup>{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-x-15 before:bg-orange-500 mt-2 md:before:-inset-2">
            <span className="relative text-white dark:text-gray-950">
              Next.js 15
            </span>
          </span>
          <span className="ml-2"> boilerplate</span>
        </h2>
      </div>
      <Initializing />
    </div>
  );
};
