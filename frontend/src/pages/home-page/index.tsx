import React from 'react';
import { Movie } from '../../models';
import { useMovies, MoviesResponse } from '../../services';
import { MovieCard } from '../../components';

const HomePage = function () {
  const { movies, isLoading, isError }: MoviesResponse = useMovies();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong.</div>;

  return (
    <div className="home-page">
      <h1>Admios Assignment</h1>
      <div className="home-page__movies-container">
        {movies.results.map((movie: Movie) => (
          <MovieCard
            key={`movie-${movie._id}`}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
