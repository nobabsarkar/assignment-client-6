import { jwtDecode } from "jwt-decode"; // npm i jwt-decode install

export const verifyToken = (token: string) => {
  return jwtDecode(token);
};
