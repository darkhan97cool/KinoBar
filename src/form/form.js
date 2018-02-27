import React from 'react';
import {FormResults} from './formResults';
import search from './search.svg';
import './form.css';
import Request from 'superagent'


export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      tv: [],
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    let url = "http://localhost:3000/api/timers"
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text);
      console.log(obj);
      this.setState ({
        movie: obj
      })
    })

    let url2 = "http://localhost:3000/api/timers2"
    Request.get(url2).then((response) => {
      let obj2 = JSON.parse(response.text);
      console.log(obj2);
      this.setState ({
        tv: obj2
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    let a = this.props.type;
    if(a=="movie"){
      let updatedList = this.state.movie.filter((data) => {
      return data.title.toLowerCase().indexOf(val) !== -1;
      });
      this.setState ({
      results: updatedList
    })
    }
    else{
      let updatedList = this.state.tv.filter((data) => {
      return data.title.toLowerCase().indexOf(val) !== -1;
      });
      this.setState ({
      results: updatedList
    })
    }
    
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id="form">
        <img src={search} alt="search icon" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Фильм немесе Сериал іздеу" required />
        <FormResults results={this.state.results} type={this.props.type}/>
      </form>
    );
  }
}
