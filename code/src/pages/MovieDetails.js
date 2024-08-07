import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const { movieID } = useParams();

  const API_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=180969109de0f1c45ba2c80ba35bd8c7&language=en-US`;

  useEffect(() => {
    fetch(API_DETAILS_URL)
      .then((response) => response.json())
      .then((json) => setMovieDetails(json));
  }, [API_DETAILS_URL]);

  return (
    <div className="position-relative">
      <Link to="/">
        <div className="back-link">
          <i className="fas fa-chevron-circle-left"></i>&nbsp;
          <span className="back-link-margin">Movies</span>
        </div>
      </Link>
      <img
        className="movie-thumb-img"
        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <div className="movie-details-container">
        <img
          className="movie-details-img"
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="movie-details-text">
          <h1 className="movie-details-title">
            {movieDetails.title}
            <span className="rating">{movieDetails.vote_average}/10</span>
          </h1>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
