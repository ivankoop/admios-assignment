import React from 'react';
import { genres } from '../../constants';
import { Genre } from '../../models';

import { GenreSection } from '../../components';

const HomePage = function () {
  return (
    <div className="home-page">
      <h1>Admios Assignment</h1>
      <div className="home-page__movies-container">
        {genres.map((genre: string, index: number) => (
          <GenreSection
            key={`genre-${index}`}
            genre={genre as Genre}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
