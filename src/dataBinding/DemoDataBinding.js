import React, { Component } from 'react';

export default class DemoDataBinding extends Component {
  //thuộc tính của class
  ten = 'Nguyễn Phước Đạt';
  lop = 52;
  // phương thức của class
  renderName = () => {
    return <p>tên : {this.ten} </p>;
  };
  render() {
    // biến của phương thức render
    const hinhAnh =
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
    return (
      <div>
        <h2>DataBinding</h2>
        {/* <p>tên : {this.ten} </p> */}
        {this.renderName()}
        <p>lớp : {this.lop} </p>
        <img src={hinhAnh} alt='hinh anh' />
      </div>
    );
  }
}
