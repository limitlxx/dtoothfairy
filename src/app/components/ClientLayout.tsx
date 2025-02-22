"use client";

import { useEffect, useState } from "react";
import Layout from "./layout";
import PlainLayout from "./prelayout";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const SelectedLayout = isAuthenticated ? Layout : PlainLayout;

  return <SelectedLayout>{children}</SelectedLayout>;
}
