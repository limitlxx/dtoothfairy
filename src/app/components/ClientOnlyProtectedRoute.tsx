"use client";

import { usePathname } from "next/navigation";
import ProtectedRoute from "./ProtectedRoute";

export default function ClientOnlyProtectedRoute({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Exclude landing page from authentication
  const isProtected = pathname !== "/landing";

  return isProtected ? <ProtectedRoute>{children}</ProtectedRoute> : <>{children}</>;
}
