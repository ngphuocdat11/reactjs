import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Class Props</h2>
        <p>type : {this.props.typeDog} </p>
        <img src={this.props.imgHusky} type='hinh' />
      </div>
    );
  }
}
