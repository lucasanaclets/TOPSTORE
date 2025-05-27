import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthGuardProps {
  isPrivate: boolean;
  role?: "user" | "admin";
}

export function AuthGuard({ isPrivate, role }: AuthGuardProps) {
  const { signedIn, userRole } = useAuth();

  if (isPrivate && !signedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!isPrivate && signedIn) {
    return role === "admin" ? (
      <Navigate to={"/admin/dashboard"} />
    ) : (
      <Navigate to={"/"} />
    );
  }

  if (signedIn) {
    if (role === "admin" && userRole !== "admin") {
      return <Navigate to="/" replace />;
    }

    if (role === "user" && userRole !== "user") {
      return <Navigate to="/admin/dashboard" />;
    }

    if (!isPrivate && userRole === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }

    if (!isPrivate && userRole === "user") {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
}
