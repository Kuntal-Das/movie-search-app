import React, { useState } from "react";
import "./styles/App.css";

import SearchMovies from "./components/SearchMovies";

const key = "75fe8eeb5b2089ad4312d102b55d720f";

export default function App() {
  const [searchedMovieName, setSearchedMovieName] = useState("Jurasic Park");
  const [movies, setMovies] = useState([])

  const handelChange = (e) => setSearchedMovieName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = searchedMovieName
      .toLowerCase()
      .split(" ")
      .filter((word) => word !== "")
      .join(" ");
    console.log(`value : ${query}`);

    const url = `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
      <h1 className="title">React Movie Search App</h1>
      <SearchMovies
        searchedMovieName={searchedMovieName}
        handelChange={handelChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
