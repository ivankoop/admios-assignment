// Ideally a model should be a class. but I don't have enough time to work on this assignemnt
// Also models could be generated with the open api schema,
// I just need some time to research on it using node express backend
import Genre from './genre';

interface Movie {
    _id: string
    name: string
    rating: number
    description: string
    imageUrl: string
    genre: Genre
    releaseDate: Date
    cast: Array<{
        _id: string
        name: string
        lastName: string
    }>
}

export default Movie;
