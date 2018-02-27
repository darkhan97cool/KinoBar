import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './nav';
import logo from '../logo.svg';
import './header.css';


export class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><h1>KinoBar</h1></Link>
        <Link to={'/movieMain'}><h1>Movie</h1></Link>
        <Link to={'/tvMain'}><h1>Tv</h1></Link>
        <Link to={'/newsMain'}><h1>News</h1></Link>
        <Nav />
      </header>
    );
  }
}
