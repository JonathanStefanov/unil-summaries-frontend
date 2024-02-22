import { useState, useEffect } from "react";
import Cookies from "js-cookie";

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
