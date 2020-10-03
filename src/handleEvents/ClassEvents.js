import React, { Component } from 'react';

export default class ClassEvents extends Component {
  // phương thức của class
  handleFocus = () => {
    console.log('đã focus rồi nha');
  };
  handleFocusParams = (message) => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h2>Class Events</h2>
        <input type='text' placeholder='focus' onFocus={this.handleFocus} />
        <input
          type='text'
          placeholder='focus params'
          onFocus={() => {
            this.handleFocusParams('hello cybersoft');
          }}
        />
      </div>
    );
  }
}
