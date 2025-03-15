export const Hero = () => {
  return (
    <div className="mx-auto mb-30 flex max-w-4xl flex-col items-center gap-6 px-6 pt-30 text-center">
      <div className="flex items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          The Addinator<sup>™</sup>{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-orange-500 to-red-500"></span>
            <span className="relative px-2 text-white">Next.js 15</span>
          </span>
          <span className="ml-2">Boilerplate</span>
        </h1>
      </div>
      <p className="max-w-2xl text-lg text-gray-600 md:text-2xl">
        A lightweight & <span className="underline">junk-free</span> Next.js
        starter for rapid development 🚀
      </p>
    </div>
  );
};
