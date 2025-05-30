import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Home from "../pages";
import About from "../pages/about";
import Countries from "../pages/countries";
import CountriesDetail from "../pages/countries/[id]";
import Login from "../pages/auth/Login";
import Profile from "../pages/profile";
import NotFound from "../pages/NotFound";

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ afterLoginGoTo: location }} replace />
  );
};
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/countries" Component={Countries} />
      <Route path="/countries/:id" Component={CountriesDetail} />
      <Route path="/login" Component={Login} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export default AppRoutes;
