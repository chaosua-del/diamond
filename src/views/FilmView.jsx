import React, { Component } from "react";
import fetchFilmById from "../utils/fetchFilmById";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

export default class FilmView extends Component {
  state = {
    film: null,
  };

  componentDidMount() {
    fetchFilmById(this.props.match.params.id)
      .then((response) => {
        this.setState({
          film: response.data,
        });
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  handleBackButton = () => {
    this.props.history.goBack();
  };

  render() {
    const { film } = this.state;
    console.log(film);
    return (
      <Container className="py-5">
        <Button className="mb-3" variant="dark" onClick={this.handleBackButton}>
          ← Назад
        </Button>
        {film ? (
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500/" + film.poster_path}
                />
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <h5>{film.original_title}</h5>
              <hr />
              <p>Касові збори: {film.budget}$</p>
              <p>Мова оригіналу: {film.original_language}</p>
              <p>Дата виходу: {film.release_date}</p>
              <hr />
              <b>Опис:</b>
              <p>{film.overview}</p>
            </Col>
          </Row>
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
    );
  }
}
