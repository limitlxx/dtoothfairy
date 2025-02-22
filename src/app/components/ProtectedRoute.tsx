"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  const checkAuth = useCallback(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setIsAuthenticated(false);
      router.replace("/landing");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]); // Dependency array includes router

  useEffect(() => {
    checkAuth();
  }, [checkAuth]); // Use checkAuth inside useEffect

  if (isAuthenticated === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Prevent rendering children while redirecting
  }

  return <>{children}</>;
}
