import React from 'react';
import {Header} from '../header/header';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import {Cast} from '../cast/cast';
import './tv.css';
import Request from 'superagent'

export class Tv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tv: {
        genres: [],
        cast: [],
      }
    }
  }

componentDidMount() {
  let id = window.location.pathname.substring(4);
  console.log(id);
    let url = "http://localhost:3000/api/timers2"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj[id]);
      this.setState ({
        tv: obj[id-1]
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
    console.log(this.state.tv.genres);
    return(
      <div className="container">
        <Header />
        <Form id="form" type="tv"/>

        <div className="moviePage">

          <div className="poster">
            <img src={this.state.tv.poster_path} alt={`${this.state.tv.title} poster`} className="posterImg" />
          </div>

          <div className="movieDetails">
            <h2 className="sectionTitle">{this.state.tv.title}</h2>
            <ul className="detailsList">
              <li><span className="bold">Түпнұсқа атауы:</span> {this.state.tv.original_title}</li>
              <li><span className="bold">Шығу уақыты:</span> {this.state.tv.release_date}</li>
              <li><span className="bold">Рейтинг:</span> {this.state.tv.rating}</li>
              <li><span className="bold">Режиссер:</span> {this.state.tv.director}</li>
              <li><span className="bold">Ұзақтығы:</span> {this.state.tv.runtime} минут</li>

              <li><span className="bold">Жанр: </span> {this.state.tv.genres.map((element, index) => {
                    if (index < this.state.tv.genres.length - 1) {
                      return this.state.tv.genres[index] + ', '
                    }
                    else {
                      return this.state.tv.genres[index]
                    }
                })}
              </li>
            </ul>

            <p>{this.state.tv.overview}</p>
            

          </div>
        </div>

        <Cast cast={this.state.tv.cast} />
      </div>
    );
  }
}
