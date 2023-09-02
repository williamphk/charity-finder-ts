import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SearchComponent from "./components/SearchComponent";
import CharityList from "./components/CharityList";
import CharityDetail from "./components/CharityDetail";
import FavoriteCharities from "./components/FavoriteCharities";

import "./App.css";

function App() {
  return (
    <Router>
      <SearchComponent />
      <Routes>
        <Route path="/" element={<CharityList />} />
        <Route path="/charity/:id" element={<CharityDetail />} />
        <Route path="/favorites" element={<FavoriteCharities />} />
      </Routes>
    </Router>
  );
}

export default App;
