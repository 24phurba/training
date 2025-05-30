import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, toogleTheme } = useTheme();
  const { loggedIn, toogleAuth } = useAuth();

  const handleAuth = () => {
    if (loggedIn) {
      toogleAuth();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: theme === "dark" ? "black" : "#f5f5f5",
      }}
    >
      <Link
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
        to={"/"}
      >
        Home
      </Link>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to={"/countries"}>Countries</Link>
        <Link to={"/about"}>About</Link>
        {loggedIn && <Link to={"/profile"}>Profile</Link>}
        <button onClick={handleAuth}>{loggedIn ? "Logout" : "Login"}</button>
        <button onClick={toogleTheme}>Toogle Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
