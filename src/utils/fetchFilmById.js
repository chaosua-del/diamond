import config from "../config";
import axios from "axios";

export default function fetchFilms(id) {
  return axios.get(
    `${config.API_URL}/3/movie/${id}?api_key=${config.API_KEY}&language=en-US`
  );
}
