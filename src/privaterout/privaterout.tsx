import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCartContext } from "../context/shopcontext";

export function PrivateRoute() {
  const { login } = useShoppingCartContext();

  return login ? <Outlet /> : <Navigate to="/login" replace />;
}
