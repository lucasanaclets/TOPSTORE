import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import toast from "react-hot-toast";
import { LaunchScreen } from "../../view/components/LaunchScreen";

type UserRole = "admin" | "user" | null;

interface AuthContextValue {
  signedIn: boolean;
  userRole: UserRole;
  userId: string | null;
  userName: string | null;
  signin(accessToken: string, role: UserRole): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storedAccessToken;
  });

  const [userRole, setUserRole] = useState(() => {
    const storedUserRole = localStorage.getItem(localStorageKeys.USER_ROLE);

    return storedUserRole === "admin" || storedUserRole === "user"
      ? (storedUserRole as UserRole)
      : null;
  });

  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const {
    data: userData,
    isError,
    isSuccess,
    isFetching,
    remove,
  } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string, role: UserRole) => {
    if (!role) return;

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    localStorage.setItem(localStorageKeys.USER_ROLE, role);

    setSignedIn(true);
    setUserRole(role);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(localStorageKeys.USER_ROLE);

    remove();

    setSignedIn(false);
    setUserRole(null);
    setUserId(null);
    setUserName(null);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou");
      signout();
    }
  }, [isError, signout]);

  useEffect(() => {
    if (isSuccess && userData) {
      setUserId(userData.id);
      setUserName(userData.name);
    }
  }, [isSuccess, userData]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        userRole,
        userId,
        userName,
        signin,
        signout,
      }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
