import React from "react";

export interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  authenticateUser: (value: any, type: "emailAndPass") => Promise<any>;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: undefined,
  setUser: () => undefined,
  authenticateUser: async () => {},
});
