import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages";
import About from "../pages/about";
import Profile from "../pages/profile";
import Content from "../pages/content";
import Blog from "../pages/blog";
import BlogDetail from "../pages/blog/BlogDetail";
import NotFound from "../pages/NotFound";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/auth/Login";

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
      <Route path="/content" Component={Content} />
      <Route path="/login" Component={Login} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <PrivateRoute>
            <BlogDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
export default AppRoutes;
