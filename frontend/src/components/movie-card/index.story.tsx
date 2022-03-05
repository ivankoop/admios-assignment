import React from 'react';

import MovieCard from './index';
import { movieMock } from '../../__mocks__';

export default {
  title: 'Components/MovieCard',
};

export const moviecard = () => <MovieCard movie={movieMock} />;
