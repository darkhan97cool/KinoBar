import React from 'react';
import {Header} from './header/header';
import {Form} from './form/form';
import {News} from './news/news'
import './home.css'

export class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />

        <Form />

        <div className="container2">
        </div>
      </div>
    );
  }
}
