import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      // loading: true,
    };
  }

  componentDidMount() {
    const { match:{ params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({ movie });
    });
  }

  render() {
  // Change the condition to check the state
  // if (true) return <Loading />;
    const { match:{ params: { id } } } = this.props;
    const { movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { movie } = this.state;
    return (
      <div data-testid="movie-details">
        {movie === '' ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/">VOLTAR</Link>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            </div>
          )}
      </div>
    );
  }
}

export default MovieDetails;
