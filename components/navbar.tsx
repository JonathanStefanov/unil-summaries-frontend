"use client";

import Link from "next/link";
import { useIsLoggedIn } from "@/hooks/auth";

export function Navbar() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <div className="flex items-center space-x-2">
        <Link className="flex items-center space-x-2" href="/">
          <BookOpenIcon className="h-6 w-6" />
          <span className="font-semibold">Unil Summaries</span>
        </Link>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/summaries"
        >
          Summaries
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/sign-out"
            >
              Sign out
            </Link>
          </>
        ) : (
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/sign-in"
          >
            Sign in
          </Link>
        )}
      </nav>
    </header>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
