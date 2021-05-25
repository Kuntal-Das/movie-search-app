import React from "react";
import "../styles/searchMovies.css";

const SearchMovies = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <label htmlFor="query" className="lable">
        Movie Name :
      </label>
      <input
        type="text"
        name="query"
        placeholder="i.e Jurasic park"
        value={props.searchedMovieName}
        onChange={props.handelChange}
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
