import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "./ui/button";

interface AuthButtonProps {
  className?: string;
}

export const AuthButtons = ({ className }: AuthButtonProps) => {
  return (
    <div className={`flex w-full flex-col gap-4 md:flex-row ${className}`}>
      <SignedOut>
        <SignUpButton>
          <Button>Sign up</Button>
        </SignUpButton>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
