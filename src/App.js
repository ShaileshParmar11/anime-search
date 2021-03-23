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
  const [gotData, setgotData] = useState(true);
  const [dataLoading, setdataLoading] = useState(false);

  const handleSubmite = async (event) => {
    event.preventDefault();
    setgotData(false);
    setdataLoading(true);
    const data = await apiRequest(animeSearch).then((res) => res);
    setApiData(data);
    setdataLoading(false);
  };

  const displayResult = () => {
    if (apiData.status) {
      return <h2>{apiData.message}</h2>;
    } else {
      return <AnimeList results={apiData?.results} />;
    }
  };

  return (
    <div className="app">
      <h1>Anime Search</h1>
      <form onSubmit={handleSubmite} className="search">
        <input
          type="text"
          value={animeSearch}
          onChange={(e) => setanimeSearch(e.target.value)}
          placeholder="Search for anime, e.g Pokemon"
        />
        <button
          className="typeReset"
          type="reset"
          onClick={() => setanimeSearch("")}
        >
          X
        </button>
        <button type="submit">Go</button>
      </form>
      {gotData ? (
        <h2>Search for Anime to see results</h2>
      ) : dataLoading ? (
        <h2>Data is loading...!</h2>
      ) : (
        displayResult()
      )}
    </div>
  );
}

export default App;
