import Link from "next/link";

import LogoIcon from "@/public/svg/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 text-gray-600">
      <div className="mx-auto max-w-screen-lg px-6">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
            <LogoIcon alt="Addinator Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold text-gray-800">
              Addinator<sup>™</sup>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden space-x-6 text-sm md:flex">
            <Link className="transition hover:text-gray-900" href="#">
              About
            </Link>
            <Link className="transition hover:text-gray-900" href="#">
              Pricing
            </Link>
            <Link className="transition hover:text-gray-900" href="#">
              Blog
            </Link>
            <Link className="transition hover:text-gray-900" href="#">
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
          &copy; 2025 Addinator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
