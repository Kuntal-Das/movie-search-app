import React from "react";
import "../styles/movieCard.css";

const MovieCard = (props) => {
  return(
    <div className="card">
      <img 
        className="card-img" 
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`}
        alt={`${props.title}_poster`}
      />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p><small>Release Date : {props.release_date}</small></p>
        <p><small>Rating : {props.vote_average}</small></p>
        <p className="card-desc">{props.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard;