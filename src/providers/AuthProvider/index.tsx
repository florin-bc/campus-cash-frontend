import React, { useMemo, useState } from "react";
import { fetchLoginUser } from "../../api/auth";
import { AuthContext } from "./context";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>();

  const authenticateUser = async (value: any, type: "emailAndPass") => {
    switch (type) {
      case "emailAndPass":
        const user = await fetchLoginUser(value);
        if (user?.id) {
          setUser(user);
          return true;
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const value = useMemo(() => ({ user, setUser, authenticateUser }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
