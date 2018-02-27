import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import {Header} from '../header/header';
import './movieMain.css';
import Request from 'superagent'

export class MovieMain extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }
    
  componentDidMount() {
    let url = "http://localhost:3000/api/timers"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        movies: obj
      })
    })
  }

  render() {
    console.log(this.state.movies);
    return(
      <div className="container">
        <Header />
        <Form type="movie"/>
        <h2>Танымал фильмдер</h2>

        <div className="newMovies">
          {this.state.movies.map((movie, index) => {
            return (
              <Link to={`/movie/${this.state.movies[index].id}`} key={index} className="movieLink">
                <img src={this.state.movies[index].poster_path} alt={`${this.state.movies.title} poster`} className="imgResponsive" />
                
                <div className="movieInfo">
                  <p>{this.state.movies[index].release_date}</p>
                  <p>{this.state.movies[index].rating} ★</p>

                </div>
                <p className="movieTitle">{this.state.movies[index].title}</p>
              </Link>
            )
          })}
        </div>
        
      </div>
    );
  }
}

 