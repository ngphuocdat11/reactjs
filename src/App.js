import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from './components/StateLessComponent';
import StateFulComponent from './components/StateFulComponent';
import Home from './baitapchiacomponent/Home';
import DemoDataBinding from './dataBinding/DemoDataBinding';
import FunctionEvent from './handleEvents/FunctionEvent';
import ClassEvents from './handleEvents/ClassEvents';
import DemoConditionalAndState from './demoLogin/DemoConditionalAndState';
import BaiTapChonMauXe from './BaiTapChonMauXe';
import DemoCourse from './ListAndKeys/DemoCourse';
import DemoProps from './Props/DemoProps';
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang';

function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFulComponent /> */}
      {/* <Home /> */}
      {/* <DemoDataBinding /> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvents /> */}
      {/* <DemoConditionalAndState /> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <DemoCourse /> */}
      {/* <DemoProps /> */}
      <BaiTapGioHang />
    </div>
  );
}

export default App;
