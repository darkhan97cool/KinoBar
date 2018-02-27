import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import {Header} from '../header/header';
import './tvMain.css';
import Request from 'superagent'

export class TvMain extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tv: [],
    };
  }
    
  componentDidMount() {
    let url = "http://localhost:3000/api/timers2"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        tv: obj
      })
    })
  }

  render() {
    console.log(this.state.tv);
    return(
      <div className="container">
        <Header />
        <Form type="tv"/>
        <h2>Танымал сериалдар</h2>

        <div className="newMovies">
          {this.state.tv.map((movie, index) => {
            return (
              <Link to={`/tv/${this.state.tv[index].id}`} key={index} className="movieLink">
                <img src={this.state.tv[index].poster_path} alt={`${this.state.tv.title} poster`} className="imgResponsive" />
                
                <div className="movieInfo">
                  <p>{this.state.tv[index].release_date}</p>
                  <p>{this.state.tv[index].rating} ★</p>

                </div>
                <p className="movieTitle">{this.state.tv[index].title}</p>
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

 