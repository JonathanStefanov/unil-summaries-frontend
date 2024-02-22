import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  isLoggedIn: boolean;
  refreshAuthStatus: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = useCallback(() => {
    // Assuming you store tokens in cookies, adjust according to your auth mechanism
    const refreshToken = Cookies.get("refreshToken");
    const accessToken = Cookies.get("accessToken");
    setIsLoggedIn(!!(refreshToken && accessToken));
  }, []);

  // Refresh the auth status. This can be called to force-check the auth status,
  // useful after login or logout actions.
  const refreshAuthStatus = useCallback(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  useEffect(() => {
    checkLoginStatus();
    // Optional: Listen to an event for login status changes if your auth system supports it
    // This can help in making the login state update in real time across tabs/windows
  }, [checkLoginStatus]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, refreshAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
