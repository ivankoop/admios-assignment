import axios from 'axios';

export type MockType = Record<string, unknown> | Array<Record<string, unknown>>;

export interface APIRequestArgs {
  url: string;
  payload?: unknown;
  params?: unknown;
  mock?: MockType;
}

// movies api calls
const getMovies = async ({ payload }: APIRequestArgs) => axios.get('url', { params: payload });

export const api = {
  getMovies,
};
