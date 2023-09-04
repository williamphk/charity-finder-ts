import { useState } from "react";

import "./SearchComponent.css";

const terms = [
  "aapi-led",
  "adoption",
  "afghanistan",
  "animals",
  "art",
  "athletics",
  "autism",
  "black-led",
  "buddhism",
  "cancer",
  "cats",
  "christianity",
  "climate",
  "conservation",
  "coronavirus",
  "culture",
  "dance",
  "disabilities",
  "disease",
  "dogs",
  "education",
  "environment",
  "filmandtv",
  "food-security",
  "freepress",
  "gender-equality",
  "health",
  "hinduism",
  "housing",
  "humans",
  "hurricane-ian",
  "immigrants",
  "indigenous-led",
  "indigenous-peoples",
  "islam",
  "judaism",
  "justice",
  "latine-led",
  "legal",
  "lgbt",
  "libraries",
  "mental-health",
  "museums",
  "music",
  "oceans",
  "parks",
  "poverty",
  "racial-justice",
  "radio",
  "refugees",
  "religion",
  "research",
  "science",
  "seniors",
  "space",
  "theater",
  "transgender",
  "ukraine",
  "veterans",
  "votingrights",
  "water",
  "wildfires",
  "wildlife",
  "women-led",
  "womens-health",
  "youth",
];

interface SearchComponentProps {}

const SearchComponent: React.FC<SearchComponentProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);
    if (searchQuery.length === 0) {
      setSearchResults([]);
      return;
    }
    const results = terms
      .filter((term) => term.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 10);
    setSearchResults(results);
  };

  const handleSearchResultClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLButtonElement;
    const result = target.value;
    setSearchTerm(result);
    setSearchResults([]);
  };

  return (
    <div className="search-component">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Find a charity..."
      ></input>
      <button>Search</button>
      {searchResults.length > 0 && (
        <div className="autocomplete-results">
          {searchResults.map((result, index) => (
            <button
              key={index}
              className="autocomplete-result"
              value={result}
              onClick={handleSearchResultClick}
            >
              {result}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;