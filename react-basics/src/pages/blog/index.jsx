import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const Blog = () => {
  return (
    <div>
      <Nav />
      <h3>These are the places to visit in Bumthang </h3>

      {[
        { name: "MebarTsho", path: "Tang" },
        { name: "Therpaling", path: "Chummy" },
        { name: "Shamzur", path: "Ura" },
        { name: "Padtsheling", path: "Chamkhar" },
      ].map((place) => (
        <div key={place.path}>
          <Link to={`/blog/${place.path}`}>{place.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
