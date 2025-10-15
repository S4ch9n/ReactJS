import React, { useState } from 'react';

const MovieInfo = () => {
  const [movies, setMovies] = useState({
    title: "Godzilla",
    ratings: 9.5,
  });

  const hadleClick = () => {
    // const copyMovie = {
    //   ...movies,
    //   ratings : 10,
    // };
    // setMovies(copyMovie)

    //short hand
    setMovies({...movies , ratings : 10})
  }
  return (
    <section>
      <h1>Movie: {movies.title}</h1>
      <p>Ratings: {movies.ratings}</p>

      <button onClick={hadleClick}> Change rating</button>
    </section>
  );
};

export default MovieInfo;
