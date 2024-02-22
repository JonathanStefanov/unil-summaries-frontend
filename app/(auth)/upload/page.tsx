"use client";

import { useIsLoggedIn } from "@/hooks/auth";

export default function Upload() {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    return <p className="font-bold">Please sign in to upload your summary</p>;
  }

  return <p>Upload</p>;
}
