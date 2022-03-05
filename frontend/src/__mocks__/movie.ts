/* eslint-disable max-len */
import { Movie } from '../models';

const movieMock: Movie = {
  _id: '622394cd0f98b40063050c9d',
  name: "Harry Potter and the Philosopher's Stone",
  rating: 5,
  imageUrl:
      'https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg',
  description:
      'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
  genre: 'Science Fiction',
  releaseDate: new Date('2021-01-01T00:00:00.000Z'),
  cast: [
    {
      _id: '622394cd0f98b40063050c9e',
      name: 'Dan',
      lastName: 'Radcliffe',
    },
    {
      _id: '622394cd0f98b40063050c9f',
      name: 'Rupert',
      lastName: 'Grint',
    },
    {
      _id: '622394cd0f98b40063050ca0',
      name: 'Emma',
      lastName: 'Watson',
    },
  ],
};

export default movieMock;
