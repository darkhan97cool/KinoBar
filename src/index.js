import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {Movie} from './movie/movie';
import {News} from './news/news';
import {Tv} from './tv/tv';
import {MovieMain} from './movie/movieMain';
import {TvMain} from './tv/tvMain';
import {NewsMain} from './news/newsMain';
import './index.css';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path={'/movieMain/'} component={MovieMain} />
          <Route path={'/tvMain/'} component={TvMain} />
          <Route path={'/newsMain/'} component={NewsMain} />
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/tv'} component={Tv} />
          <Route path={'/news/'} component={News} />
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
