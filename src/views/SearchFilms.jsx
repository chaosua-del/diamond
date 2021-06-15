import React, { Component } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import FilmList from "../components/FilmList";
import PaginationComponent from "../components/PaginationComponent";
import routes from "../routes";
import fetchFilmsByQuery from "../utils/fetchFilmsByQuery";
import { Link } from "react-router-dom";

export default class SearchFilms extends Component {
  state = {
    films: null,
    page: 1,
    totalPages: null,
    query: "",
    loading: false,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      page: 1,
    });
    fetchFilmsByQuery(this.state.query, this.state.page)
      .then((response) => {
        this.setState({
          loading: false,
          films: response.data.results,
          totalPages: response.data.total_pages,
        });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handlePaginationChange = (e) => {
    if (e.target.tagName !== "SPAN") {
      this.setState({
        page: parseInt(e.target.text),
      });
    } else {
      return;
    }
  };

  handleLastPagination = () => {
    this.setState({
      page: this.state.totalPages,
    });
  };

  handleFirstPagination = () => {
    this.setState({
      page: 1,
    });
  };

  handleNextPagination = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handlePrevPagination = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page - 1,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      console.log("update", prevState);
      this.setState({
        loading: true,
      });
      fetchFilmsByQuery(this.state.query, this.state.page)
        .then((response) => {
          this.setState({
            loading: false,
            films: response.data.results,
            totalPages: response.data.total_pages,
          });
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { loading, films, query, totalPages, page } = this.state;
    return (
      <Container className="py-5">
        <Link to={routes.home}>Назад до топ-20 популярних</Link>
        <Form
          onSubmit={this.handleFormSubmit}
          className="d-flex align-items-center justify-content-center"
        >
          <Form.Group className="m-0">
            <Form.Control
              type="text"
              placeholder="Пошук..."
              onChange={this.handleInputChange}
              name="query"
              value={query}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Шукати
          </Button>
        </Form>
        <hr />
        {loading && <Spinner animation="border" />}
        {films && <FilmList films={films} />}
        <PaginationComponent
          totalPages={totalPages}
          active={page}
          handleInputChange={this.handleInputChange}
          handlePaginationChange={this.handlePaginationChange}
          handleLastPagination={this.handleLastPagination}
          handleFirstPagination={this.handleFirstPagination}
          handleNextPagination={this.handleNextPagination}
          handlePrevPagination={this.handlePrevPagination}
        />
      </Container>
    );
  }
}
