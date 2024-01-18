import React, { useEffect } from "react";
import "./App.css";
import Search from "./search.svg";

//  apikey=b3bc7c75
const API_KEY = "https://www.omdbapi.com/?i=tt3896198&apikey=b3bc7c75";

function App() {
  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_KEY}&s=${tittle}`);
    const data = response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>lollyMovieLand</h1>
      <div className="">
        <input placeholder="" value="Superman" onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
