import axios from 'axios';

/** OMDB API configs */
// TODO: Regenerate a new API KEY
// const OMDB_API_KEY = '';
const movieApiBaseUrl = 'http://www.omdbapi.com';
export const movieApi = axios.create({
    baseURL: movieApiBaseUrl,
    params: {
        apikey: OMDB_API_KEY,
    },
});
