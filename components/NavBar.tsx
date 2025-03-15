import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import LogoIcon from "@/public/svg/logo.svg";

import { AuthButtons } from "./AuthButtons";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-lg items-center justify-between px-6">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <LogoIcon alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-gray-800">
            Addinator Boilerplate
          </h1>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center space-x-6 md:flex">
          <AuthButtons />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger className="rounded-md p-2 transition hover:bg-gray-100">
              <HamburgerMenuIcon className="h-6 w-6 text-gray-800" />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col items-center space-y-6 rounded-lg bg-white p-6 shadow-lg">
              <DrawerTitle>
                Get started with the Addinator Boilerplate
              </DrawerTitle>
              <AuthButtons />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
