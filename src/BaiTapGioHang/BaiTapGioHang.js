import Modal from './Modal';
/**
 * các bước thực hiện:
 * 1. dàn layout (html, css)
 * 2. xác định data thay đổi và lưu vào state
 * 3. lấy data trong state đi binding ra jsx
 * 4. render mảng dữ liệu
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * 8. xây dựng chức năng tăng giảm số lương
 * 9. xây dựng chức năng hiển thị tổng số sản phẩm
 */

import React, { Component } from 'react';
import SanPham from './SanPham';

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      giaBan: 5000000,
      maSanPham: '1',
      tenSanPham: 'VinSmart Live',
      hinhAnh: './img/vsphone.jpg',
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 GB',
    },
    {
      giaBan: 7000000,
      maSanPham: '2',
      tenSanPham: 'Meizu 16Xs',
      hinhAnh: './img/meizuphone.jpg',
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '25 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 GB',
    },
    {
      giaBan: 15000000,
      maSanPham: '3',
      tenSanPham: 'Iphone XS Max',
      hinhAnh: './img/applephone.jpg',
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: 'IOS 14.0',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 GB',
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSanPham: '1',
      hinhAnh: './img/vsphone.jpg',
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 GB',
    },
    danhSachGioHang: [],
  };

  handleAddSP = (sanPham) => {
    let danhSachGioHang = [...this.state.danhSachGioHang];
    // danhSachGioHang.push(sanPham);
    danhSachGioHang = [...danhSachGioHang, sanPham];
    // setState
    this.setState(
      {
        danhSachGioHang: danhSachGioHang,
      },
      () => {
        console.log(this.state.danhSachGioHang);
      }
    );
  };

  handleDetail = (sanPham) => {
    // setState
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className='col-sm-4' key={index}>
          <SanPham
            handleDetail={this.handleDetail}
            handleAddSP={this.handleAddSP}
            sanPham={sanPham}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className='container'>
            <h3 className='title text-center'>Bài tập giỏ hàng</h3>
            <div className='container text-center my-2'>
              <button
                className='btn btn-danger '
                data-toggle='modal'
                data-target='#modelId'
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className='container'>
              <div className='row'>{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal danhSachGioHang={this.state.danhSachGioHang} />
            <div className='row'>
              <div className='col-sm-5'>
                <img
                  className='img-fluid'
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className='col-sm-7'>
                <h3>Thông số kỹ thuật</h3>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
