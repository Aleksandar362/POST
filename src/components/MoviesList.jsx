import React from "react";

import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
