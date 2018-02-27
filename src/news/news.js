import React from 'react';
import {Header} from '../header/header';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import './news.css';
import Request from 'superagent'

export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
    }
  }

componentDidMount() {
  let id = window.location.pathname.substring(6);
   console.log(window.location.pathname.substring(6));
    let url = "http://localhost:3000/api/timers3"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj[id]);
      this.setState ({
        news: obj[id-1]
      })
    })
  }

  render() {
    //console.log(this.state.news);
    return(
      <div className="container">
        <Header />
        <Form id="form" />
        <div className="newsPage">

          <div className="poster2">
            <img src={this.state.news.poster_path} alt={`${this.state.news.title} poster`} className="posterImg2" />
          </div>

          <div className="movieDetails">
            <h2 className="sectionTitle2">{this.state.news.title}</h2>
            <ul className="detailsList2">
              <p>{this.state.news.concept}</p>
              <li><span className="bold">Шығу уақыты:</span> {this.state.news.release_date}</li>
              <li><span className="bold">Оқылу:</span> {this.state.news.viewCnt}</li>

            </ul>

            <p>{this.state.news.overview}</p>
            

          </div>
        </div>
      </div>
      );  
  }
}
