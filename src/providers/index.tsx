import React from "react";
import AuthProvider from "./AuthProvider";
import InfoProvider from "./InfoProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <InfoProvider>{children}</InfoProvider>
    </AuthProvider>
  );
};

export default Providers;
