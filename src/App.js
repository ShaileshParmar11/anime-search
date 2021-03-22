import { useState } from "react";
import "./App.css";
import AnimeList from "./component/AnimeList";

const apiRequest = async (search) => {
  const api = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  return await fetch(api).then((res) => res.json());
};

function App() {
  const [animeSearch, setanimeSearch] = useState("");
  const [apiData, setApiData] = useState({});
  const [gotData, setgotData] = useState(false);

  const handleSubmite = async (event) => {
    event.preventDefault();
    const data = await apiRequest(animeSearch).then((res) => res);
    setApiData(data);
    setgotData(true);
  };

  return (
    <div className="app">
      <h1>Anime Search</h1>
      <form onSubmit={handleSubmite} className="search">
        <input
          type="text"
          value={animeSearch}
          onChange={(e) => setanimeSearch(e.target.value)}
          placeholder="search for anime, e.g Pokemon"
          required
        />
        <button>Go</button>
      </form>
      {gotData ? (
        <AnimeList apiData={apiData} />
      ) : (
        <h2>Search for Anime to see results</h2>
      )}
    </div>
  );
}

export default App;
