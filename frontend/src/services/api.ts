import useSWR from 'swr';
import { Movie, Genre } from '../models';
// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const apiUrl = process.env.REACT_APP_API_URL;

// Ideally api services should have an adaptor to look for authentication and formatting purposes.
// I just don't have enough time to work on this assignment

export type MoviesResponse = {
    movies: {
      limit: number,
      page: number,
      results: Array<Movie>,
      totalPages: number,
      totalResults: number,
    },
    isLoading: boolean,
    isError: string
}

export function useMovies(genre: Genre): MoviesResponse {
  const { data, error } = useSWR(`${apiUrl}/movies?sortBy=name:desc&genre=${genre}`, fetcher);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}
