import { Children } from "react";
import {
  Link,
  Routes,
  Route,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

const Nav = () => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const handelAuth = () => {
    if (loggedIn) {
      localStorage.setItem("isLoggedIn", "false");
    } else {
      localStorage.setItem("isLoggedIn", "true");
    }
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: "1rem 2rem",
        backgroundColor: "white",
      }}
    >
      <Link
        style={{
          frontWeight: "bold",
          frontSize: "1.2rem",
          textDecoration: "none",
          color: "purple",
        }}
        to={"/"}
      >
        Home
      </Link>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/content"}>Content</Link>
        <button onClick={handelAuth}>{loggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};
const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/" />;
};
const Home = () => {
  return (
    <div>
      <Nav />
      <div>Home Page</div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <Nav />
      <h3>Beautiful places to visit in DrukYul,Bhutan</h3>

      {[
        { name: "Punakha", path: "Punakha" },
        { name: "Thimphu", path: "Thimphu" },
        { name: "Bumthang", path: "Bumthang" },
        { name: "Haa", path: "Haa" },
      ].map((place) => (
        <div key={place.path}>
          <Link to={`/blog/${place.path}`}>{place.name}</Link>
        </div>
      ))}
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Nav />
      <div>BlogDetail Page{id}</div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Nav />
      <div>About Page</div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <Nav />
      <div>Profile Page</div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Nav />
      <div>Content Page</div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/content" Component={Content} />
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
      <Route path="*" element={() => <div>Not Found</div>} />

      <Route></Route>
    </Routes>
  );
};
export default App;
