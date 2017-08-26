import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <div className='TextField'>
        <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default TextField;
