import React from 'react';

// cách nhận dữ liệu từ props

export default function FunctionProps(props) {
  return (
    <div>
      <h3>Function Props</h3>
      <p>type : {props.loaiCho}</p>
      <img src={props.hinhCho} alt='hình đẹp' />
    </div>
  );
}
