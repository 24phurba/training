import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

const Login = () => {
  const { loggedIn, toogleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    toogleAuth();
    navigate(afterLoginGoTo, { replace: true });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Login Page</h2>
        {loggedIn ? (
          <p>You are alrady logged in</p>
        ) : (
          <button onClick={handleLogin}>Click to Login</button>
        )}
      </div>
    </>
  );
};

export default Login;
