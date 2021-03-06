import React from 'react';

export default function FunctionEvent() {
  const handleClick = () => {
    alert('click me');
  };
  const handleClickParams = (message) => {
    alert(message);
  };
  return (
    <div>
      <h2>Function Event</h2>
      {/* xử lý sự kiện trong js thuần */}
      {/* <button onclick='handleClick()'>click me</button> */}
      {/* xử lý sự kiện trong react js */}
      <button onClick={handleClick}>click reactjs</button>
      <button
        onClick={() => {
          handleClickParams('hello cybersoft');
        }}
      >
        click reactjs params
      </button>
    </div>
  );
}
