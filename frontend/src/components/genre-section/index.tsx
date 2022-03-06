import React from 'react';
import cx from 'classnames';
import { Genre, Movie } from '../../models';
import { MovieCard } from '../index';
import { useMovies, MoviesResponse } from '../../services';

interface GenreSectionProps {
    genre: Genre

    className?: string
}

const GenreSection = function ({ className = '', genre }: GenreSectionProps) {
  const { movies, isLoading, isError }: MoviesResponse = useMovies(genre);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong.</div>;

  return (
    <section className={cx(className, 'genre-section')}>
      <div className="genre-section__divider">
        <div className="genre-section__divider-line" />
        <h1>{genre}</h1>
        <div className="genre-section__divider-line" />
      </div>

      <div className="genre-section__movies-list">
        {movies.results.map((movie: Movie) => (
          <MovieCard
            key={`movie-${movie._id}`}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(GenreSection);
