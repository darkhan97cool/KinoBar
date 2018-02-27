import React from 'react';
import './cast.css';

export class Cast extends React.Component {
  render() {
        console.log(this.props.cast);
    return(
      <div>
        <h3>Басты рөлдерде</h3>
        <div className="figureContainer">
          {this.props.cast.map((element, index) => {
            return(
              <figure key={index}>
                <img src={this.props.cast[index].profile_path} key={index} alt={this.props.cast[index].name} className="imgResponsive" />
                <figcaption>{this.props.cast[index].name}</figcaption>
              </figure>
            )

          })}
        </div>
      </div>
    );
  }
}
