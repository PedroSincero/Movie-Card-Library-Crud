import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => {
      this.setState({ movies: movie });
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {!movies.length ? <Loading />
          : (movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />
          )))}
      </div>
    );
  }
}

export default MovieList;
