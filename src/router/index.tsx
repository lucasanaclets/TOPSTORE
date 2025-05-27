import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { UserLogin } from "../view/pages/Login/User";
import { UserRegister } from "../view/pages/Register/User";
import { AdminLogin } from "../view/pages/Login/Admin";
import { AdminDashboard } from "../view/pages/Dashboard/Admin";
import { UserDashboard } from "../view/pages/Dashboard/User";
import { AuthGuard } from "./AuthGuard";
import { Product } from "../view/pages/Product";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate role="user" />}>
          <Route path="/" element={<UserDashboard />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route element={<AuthGuard isPrivate role="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
