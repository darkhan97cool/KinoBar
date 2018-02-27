import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from '../form/form';
import {Header} from '../header/header';
import './newsMain.css';
import Request from 'superagent'


export class NewsMain extends React.Component {
  constructor(props) {
    super();
    this.state = {
      news: [],
    };
  }
    
  componentDidMount() {
    let url = "http://localhost:3000/api/timers3"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        news: obj
      })
    })
  }

  render() {
    console.log(this.state.news);
    return(
      <div className="container">
        <Header />
        <Form />
        <h2>Танымал news</h2>

        <div>
          {this.state.news.map((news, index) => {
            return (
              <div>
              <Link to={`/news/${this.state.news[index].id}`} key={index} >
               <img src={this.state.news[index].poster_path} alt={`${this.state.news.title} poster`} className="imgResponsive2"/>
               
              <p className="newsTitle">{this.state.news[index].title}</p>
              </Link>
              <p className="newsDesc">{this.state.news[index].concept}</p>
              <br style={{clear: 'both'}} />
              </div>
            )
          })}
        </div>
        
      </div>
    );
  }
}

 