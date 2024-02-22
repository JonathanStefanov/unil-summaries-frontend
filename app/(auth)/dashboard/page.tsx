"use client";
import { useIsLoggedIn } from "@/hooks/auth";
export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>
    </div>
  );
}
