import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const CountriesDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div>CountriesDetail Page {id} </div>
    </div>
  );
};

export default CountriesDetail;
