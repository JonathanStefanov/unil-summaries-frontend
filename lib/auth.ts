import Cookies from "js-cookie";

export function signOut() {
  // Clear cookies
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  // Redirect to the login page
  window.location.href = "/login";
}
