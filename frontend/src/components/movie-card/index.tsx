import React from 'react';
import cx from 'classnames';
import { Movie } from '../../models';

interface MovieCardProps {
    movie: Movie,
    className?: string
}

const MovieCard = function ({ className = '', movie }: MovieCardProps) {
  return (
    <div className={cx(className, 'movie-card')}>
      <img
        className="movie-card__img"
        src={movie.imageUrl}
        alt={movie.name}
      />
      <div className="movie-card__genre">
        {movie.genre}
      </div>
      <div className="movie-card__name">
        {movie.name}
      </div>
      <div className="movie-card__description">
        {movie.description}
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
