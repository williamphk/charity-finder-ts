import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SearchComponent from "./components/SearchComponent";
import CharityList from "./components/CharityList";
import CharityDetail from "./components/CharityDetail";
import FavoriteCharities from "./components/FavoriteCharities";

import Charity from "./Charity";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Charity[]>([]);

  const handleLogoClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <Router>
      <header>
        <Link to="/" onClick={handleLogoClick}>
          <h1>Charity Finder</h1>
        </Link>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSearchResults={setSearchResults}
        />
        <div className="favorite">
          <a href="/favorites">Favorites</a>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <CharityList charities={searchResults} searchTerm={searchTerm} />
          }
        />
        <Route path="/charity/:id" element={<CharityDetail />} />
        <Route path="/favorites" element={<FavoriteCharities />} />
      </Routes>
    </Router>
  );
}

export default App;
