import React, { Component } from 'react';
 
class NbButton extends Component {
  render() {
    const { handleOnclick } = this.props;
 
    return (
      <button onClick={handleOnclick}>Button13</button>
    );
  }
}
 
export default NbButton;
