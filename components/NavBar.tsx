import LogoIcon from "@/public/svg/logo.svg";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-999 flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <LogoIcon className="h-8" alt="Logo" />
        <h1 className="text-lg font-semibold">Addinator Boilerplate</h1>
      </div>
      <div className="flex items-center space-x-4">
        {/* Add navigation links here */}
      </div>
    </nav>
  );
};
