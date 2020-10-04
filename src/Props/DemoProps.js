import React, { Component } from 'react';
import FunctionProps from './FunctionProps';
import ClassProps from './ClassProps';

export default class DemoProps extends Component {
  type = 'Husky';
  image = 'https://images-na.ssl-images-amazon.com/images/I/71nOmUnBckL.jpg';

  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* props dùng để truyền dữ liệu giữa các component */}
        {/* cách truyền dữ liệu  */}
        <FunctionProps loaiCho={this.type} hinhCho={this.image} />
        <ClassProps typeDog={this.type} imgHusky={this.image} />
      </div>
    );
  }
}
