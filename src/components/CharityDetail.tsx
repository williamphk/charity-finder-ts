import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Charity from "../Charity";

import "./CharityDetail.css";

const CharityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [charity, setCharity] = useState<Charity | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://partners.every.org/v0.2/nonprofit/${id}?apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setCharity(response.data.data.nonprofit);
      })
      .catch((error) => {
        console.error("There was an error fetching the charity data!", error);
      });
  }, [id]);

  if (!charity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="charity-detail">
      <img
        src={
          charity.logoUrl ||
          "https://charity-finder.vitochan.com/assets/donateLogo-96b99806.svg"
        }
        alt={`${charity.name} logo`}
      />
      <h1>{charity.name}</h1>
      <p>{charity.description}</p>
      <p>{charity.location}</p>
    </div>
  );
};

export default CharityDetail;
