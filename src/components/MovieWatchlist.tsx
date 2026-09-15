import { current } from "@reduxjs/toolkit";
import { title } from "process";
import React, { useState } from "react";

type Movie = {
  id: number;
  title: string;
  isWatched: boolean;
};

function MovieWatchlist() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: "Inception", isWatched: true },
    { id: 2, title: "Interstellar", isWatched: false },
  ]);

  const [titleInput, setTitleInput] = useState<string>("");

  const handleAddMovies = () => {
    if (titleInput.trim() === "") return;

    const newMovie: Movie = {
      id: Date.now(),
      title: titleInput,
      isWatched: false,
    };

    setMovies([...movies, newMovie]);
    setTitleInput("");
  };

  const handleDeleteMovie = (deleteId: number) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== deleteId),
    );
  };

  const handleToggleWatched = (toggleId: number) => {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === toggleId
          ? { ...movie, isWatched: !movie.isWatched }
          : movie,
      ),
    );
  };

  return (
    <div>
      <input
        type="text"
        name="titleInput"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        placeholder="Enter a name "
      />
      <button onClick={handleAddMovies}>ADD</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              {movie.id} - {movie.title}
            </p>
            <button onClick={() => handleDeleteMovie(movie.id)}>DELELTE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieWatchlist;
