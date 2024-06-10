import axios from "axios";

// https://api.themoviedb.org/3/movie/now_playing?api_key=e8a413dffea0a3f636fee44439c41934
// https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;