import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SearchComponent from "./components/SearchComponent";
import CharityList from "./components/CharityList";
import CharityDetail from "./components/CharityDetail";
import FavoriteCharities from "./components/FavoriteCharities";

import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <h1>Charity Finder</h1>
        <SearchComponent />
        <div className="favorite">
          <a href="/favorites">Favorites</a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<CharityList />} />
        <Route path="/charity/:id" element={<CharityDetail />} />
        <Route path="/favorites" element={<FavoriteCharities />} />
      </Routes>
    </Router>
  );
}

export default App;
