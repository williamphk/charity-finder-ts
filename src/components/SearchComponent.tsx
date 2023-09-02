import { useState } from "react";

interface SearchComponentProps {}

const SearchComponent: React.FC<SearchComponentProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    searchCharities(searchTerm);
    console.log(import.meta.env.VITE_API_KEY);
  };

  const searchCharities = (searchTerm: string) => {
    // fetch(
    //   `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.KEY}&app_key=${process.env.REACT_APP_CHARITY_NAVIGATOR_APP_KEY}&search=${searchTerm}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
