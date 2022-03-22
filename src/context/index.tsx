import React, { ReactNode } from "react";
import { AuthProvider } from "./auth_context";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
