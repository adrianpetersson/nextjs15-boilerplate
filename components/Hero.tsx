import LogoIcon from "@/public/svg/logo.svg";
import { Initializing } from "./Initializing";
export const Hero = () => {
  return (
    <div>
      <div className="mt-10 flex items-center gap-4 p-4">
        <LogoIcon alt="Logo" className="h-36" /> {/* Adjusted logo size */}
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
      <Initializing />
    </div>
  );
};
