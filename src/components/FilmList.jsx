import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../routes";
import cutText from "../utils/cutText";

const styles = {
  card: {
    width: "300px",
    marginBottom: "35px",
    paddingBottom: "40px",
    marginRight: "40px",
  },
  button: {
    position: "absolute",
    bottom: "15px",
  },
};

export default function FilmList({ films }) {
  return (
    <div className="d-flex flex-wrap pt-4">
      {films.map((film) => {
        return (
          <Card style={styles.card} key={film.id}>
            <Card.Img
              variant="top"
              src={"https://image.tmdb.org/t/p/w500/" + film.poster_path}
            />
            <Card.Body>
              <Card.Title>{film.original_title}</Card.Title>
              <Card.Text>{cutText(film.overview, 200)}</Card.Text>
              <Link style={styles.button} to={routes.film + "/" + film.id}>
                <Button variant="primary">Детальніше</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
