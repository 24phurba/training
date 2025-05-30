import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Nav />
      <div>BlogDetail Page {id} </div>
    </div>
  );
};

export default BlogDetail;
