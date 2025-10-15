import React, { useState } from 'react';

const MovieInfo2 = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Dark Knight", rating: 9.0 },
    { id: 3, title: "Interstellar", rating: 8.6 },
    { id: 4, title: "Parasite", rating: 8.5 },
    { id: 5, title: "The Shawshank Redemption", rating: 9.3 },
  ]);

  const changeName = () => {
    setMovies(
      movies.map((movie) => (movie.id === 1 ? {...movie , title : "Spider Man 3"} : movie))
    )
  }

  return (
    <section>
      {movies.map((movie) => (
        <ul key={movie.id}>
          <li>ID: {movie.id}</li>
          <li>Title: {movie.title}</li>
          <li>Rating: {movie.rating}</li>
        </ul>
      ))}
      <button onClick={changeName}>Change name</button>

    </section>
  );
};

export default MovieInfo2;
