import React from 'react';
import {Header} from '../header/header';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import {Cast} from '../cast/cast';
import './movie.css';
import Request from 'superagent'

export class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        genres: [],
        cast: [],
      }
    }
  }

componentDidMount() {
  let id = window.location.pathname.substring(7);
  
    let url = "http://localhost:3000/api/timers"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj[id]);
      this.setState ({
        movie: obj[id-1]
      })
    })

    // this.setState({
    //   movie: obj.map((movieItem) => {
    //     if (movieItem.id === id) {
    //       return obj[id]
    //       });
    //     }
    //   }),
    // });
  }

  render() {
    console.log(this.state.movie.genres);
    return(
      <div className="container">
        <Header />
        <Form id="form" type="movie"/>
        <div className="moviePage">

          <div className="poster">
            <img src={this.state.movie.poster_path} alt={`${this.state.movie.title} poster`} className="posterImg" />
          </div>

          <div className="movieDetails">
            <h2 className="sectionTitle">{this.state.movie.title}</h2>
            <ul className="detailsList">
              <li><span className="bold">Түпнұсқа атауы:</span> {this.state.movie.original_title}</li>
              <li><span className="bold">Шығу уақыты:</span> {this.state.movie.release_date}</li>
              <li><span className="bold">Рейтинг:</span> {this.state.movie.rating}</li>
              <li><span className="bold">Режиссер:</span> {this.state.movie.director}</li>
              <li><span className="bold">Ұзақтығы:</span> {this.state.movie.runtime} минут</li>

              <li><span className="bold">Жанр: </span> {this.state.movie.genres.map((element, index) => {
                    if (index < this.state.movie.genres.length - 1) {
                      return this.state.movie.genres[index] + ', '
                    }
                    else {
                      return this.state.movie.genres[index]
                    }
                })}
              </li>
            </ul>

            <p>{this.state.movie.overview}</p>
            

          </div>
        </div>

        <Cast cast={this.state.movie.cast} />
      </div>
    );
  }
}
