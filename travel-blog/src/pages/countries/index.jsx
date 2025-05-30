import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Countries = () => {
  return (
    <div>
      <Navbar />
      <h3>These are the places to visit in the World</h3>

      {[
        {
          id: "Thimphu",
          name: "Bhutan",
          description:
            "the capital of Bhutan is Thimphu and its the most popular for culture exchange and job market",
        },
        {
          id: "Bangkok",
          name: "Thailand",
          description:
            "Bangkok is well visited place in Thailand for its diverse culture and beautiful tradition",
        },
        {
          id: "Pokra",
          name: "Napel",
          description: "Its the place where dharma flurished",
        },
      ].map((place) => (
        <div key={place.id}>
          <Link to={`/countries/${place.id}`}>{place.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;
