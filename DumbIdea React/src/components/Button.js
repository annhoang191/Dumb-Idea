import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className='Button'>
        <button type='button' onClick={this.props.onClick}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
