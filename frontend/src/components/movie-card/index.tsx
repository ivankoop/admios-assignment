/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import cx from 'classnames';
import { Movie } from '../../models';
import { MovieModal } from '../index';

interface MovieCardProps {
    movie: Movie,
    className?: string
}

const MovieCard = function ({ className = '', movie }: MovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={cx(className, 'movie-card')}
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
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
      {/* Ideally modals should be defined once on the project scope and triggered with an event manager,
      passing children with the layout as prop */}
      <MovieModal
        movie={movie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default React.memo(MovieCard);
