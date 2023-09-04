import { Link } from "react-router-dom";

import "./CharityList.css";

import Charity from "../Charity";

interface CharityListProps {
  charities: Charity[];
  searchTerm: string;
}

const CharityList: React.FC<CharityListProps> = ({ charities, searchTerm }) => {
  return (
    <div className="charity-list">
      <div>Search results for:{searchTerm}</div>
      {charities.map((charity) => (
        <div key={charity.ein} className="charity-item">
          <Link to={`/charity/${charity.ein}`}>
            <img
              src={
                charity.logoUrl ||
                "https://charity-finder.vitochan.com/assets/donateLogo-96b99806.svg"
              }
              alt={`${charity.name} logo`}
              className="logo"
            />
            <div className="details">
              <div className="name">{charity.name}</div>
              <div className="location">{charity.location}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharityList;
