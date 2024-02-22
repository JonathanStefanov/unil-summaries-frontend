"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignInComponent() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [serverMessage, setServerMessage] = useState("");

  const handleSignIn = async (data) => {
    const { username, password } = data;

    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setServerMessage("Invalid username or password");
        throw new Error("Network response was not ok");
      }

      const tokenData = await response.json();
      console.log("SignIn successful:", tokenData);

      // Setting up the cookies
      Cookies.set("refreshToken", tokenData.refresh, { expires: 7 });
      Cookies.set("accessToken", tokenData.access, { expires: 7 });
      router.push("/dashboard");
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  return (
    <form
      className="mx-auto w-[400px] space-y-4"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-500">Username is required.</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-red-500">Password is required.</p>
        )}
      </div>
      <center>
        <Button
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
        >
          Sign in
        </Button>
      </center>
      <div className="text-center text-red-500">{serverMessage}</div>
      <div className="space-x-1 text-center text-sm">
        <div>Don&apos;t have an account?</div>
        <Link className="text-blue-600 underline" href="#">
          Register
        </Link>
      </div>
    </form>
  );
}
