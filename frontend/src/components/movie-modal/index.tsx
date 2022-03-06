/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import { Movie } from '../../models';
import { Images } from '../../constants';

interface MovieModalProps {
    movie: Movie
    className?: string
    isOpen: boolean
    onClose?: () => void
}

const MovieModal = function ({ className = '', movie, isOpen, onClose }: MovieModalProps) {
  return isOpen ? (
    <div className={cx(className, 'movie-modal')}>

      <div className="movie-modal__content">
        <div
          className="movie-modal__content__close-button"
          onClick={onClose}
          role="button"
        >
          <img
            src={Images.closeButton}
            alt="close button"
          />
        </div>

        <div className="movie-modal__content__top">
          <img src={movie.imageUrl}
            alt={movie.name}
          />
          <div className="movie-modal__content__top__right">
            <div className="movie-card__genre">
              {movie.genre}
            </div>
            <div className="movie-modal__content__top__right__rating">
              Rating
              {' '}
              {movie.rating}
            </div>
            <h2>{movie.name}</h2>
            <div className="movie-modal__content__top__right__cast">
              <h4>Cast</h4>
              {movie.cast.map((cast: Record<string, unknown>, index: number) => (
                <div className="movie-modal__content__top__right__cast__name"
                  key={`cast-${index}`}
                >
                  {cast.name}
                  {' '}
                  {cast.lastName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="movie-modal__content__bottom">
          <div className="movie-modal__content__bottom__release-date">
            Release Date:
            {' '}
            {moment(movie.releaseDate).format('YYYY-MM-DD')}
          </div>
          <div className="movie-modal__content__bottom__description">
            {movie.description}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default React.memo(MovieModal);
