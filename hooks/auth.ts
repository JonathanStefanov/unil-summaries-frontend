import { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/AuthContext";

export function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const refreshToken = Cookies.get("refreshToken");
      const accessToken = Cookies.get("accessToken");
      // User is considered logged in if both tokens are present
      setIsLoggedIn(!!(refreshToken && accessToken));
    };

    checkLoginStatus();
  }, []);

  return isLoggedIn;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
