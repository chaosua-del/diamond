import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import FilmList from "../components/FilmList";
import fetchFilms from "../utils/fetchFilms";
import routes from "../routes";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchFilms()
      .then((response) => {
        this.setState({ films: response.data.results });
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Container>
        <div className="d-flex align-items-center">
          <h4 className="mr-3">Топ 20 найпопулярніших фільмів</h4>
          <Link to={routes.search}>
            <Button>Пошук фільмів за назвою</Button>
          </Link>
        </div>
        <FilmList films={this.state.films} />
      </Container>
    );
  }
}
