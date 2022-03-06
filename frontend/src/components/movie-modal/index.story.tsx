import React from 'react';

import MovieModal from './index';
import { movieMock } from '../../__mocks__';

export default {
  title: 'Components/MovieModal',
};

export const moviecard = () => (
  <MovieModal
    movie={movieMock}
    isOpen
  />
);
