import config from "../config";
import axios from "axios";

export default function fetchFilms() {
  return axios.get(
    `${config.API_URL}3/discover/movie?sort_by=popularity.desc&api_key=${config.API_KEY}`
  );
}
