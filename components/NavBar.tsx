import LogoIcon from "@/public/svg/logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-999 flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <LogoIcon className="h-8" alt="Logo" />
        <h1 className="text-lg font-semibold">Addinator Boilerplate</h1>
      </div>
      <div className="flex items-center space-x-4">
        <header className="flex h-16 items-center justify-end gap-4 p-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};
