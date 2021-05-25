import React, { useState } from "react";
import MovieCard from "./components/MovieCard";

import "./styles/App.css";

import SearchMovies from "./components/SearchMovies";


export default function App() {
  const [searchedMovieName, setSearchedMovieName] = useState("");
  const [movies, setMovies] = useState([])

  const handelChange = (e) => setSearchedMovieName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = searchedMovieName
      .toLowerCase()
      .split(" ")
      .filter((word) => word !== "")
      .join(" ");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=75fe8eeb5b2089ad4312d102b55d720f&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results)
    } catch (err) {
      console.error(err);
      alert("query must be provided");
      setMovies([]);
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
      <div className="card-list">
        {movies.map( movie => (<MovieCard key={movie.id} {...movie} />) )}
      </div>
    </div>
  );
}
