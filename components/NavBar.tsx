import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import LogoIcon from "@/public/svg/logo.svg";

import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-999 mx-auto flex h-22 max-w-screen-lg items-center justify-between">
      <div className="flex items-center space-x-4">
        <LogoIcon alt="Logo" className="h-8" />
        <h1 className="text-lg font-semibold">Addinator Boilerplate</h1>
      </div>
      <div className="flex items-center space-x-4">
        <header className="flex h-16 items-center justify-end gap-4 p-4">
          <SignedOut>
            <SignUpButton>
              <Button>Sign up</Button>
            </SignUpButton>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};
