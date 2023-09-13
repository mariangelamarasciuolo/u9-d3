import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FilmList extends Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    this.getMovies();
  };

  getMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2e445e77&s=" + this.props.movieTitle);
      const data = await response.json();
      const moviesArray = data.Search;
      console.log(data.Search);
      this.setState({ films: moviesArray });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this);
    return (
      <div className="container-fluid px-4 mx-3">
        <h4 className="d-flex justify-content-start">Trending Now</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters"
          style={{ overflow: "hidden" }}
        >
          {this.state.films.map((film) => {
            return (
              <div className="col mb-2 px-1" key={film.imdbID}>
                <img
                  className="img-fluid d-flex "
                  style={{ height: "20em", width: "18em" }}
                  src={film.Poster}
                  alt="filmImg"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FilmList;
