import config from "../config";
import axios from "axios";

export default function fetchFilms(query, page) {
  return axios.get(
    `${config.API_URL}3/search/movie?api_key=${config.API_KEY}&query=${query}&page=${page}`
  );
}
