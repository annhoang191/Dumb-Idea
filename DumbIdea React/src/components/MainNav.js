import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

window.jQuery = window.$ = require('jquery');
require('bootstrap/dist/js/bootstrap.min.js');

class MainNav extends Component {
  static propTypes = {
    items : PropTypes.array.isRequired
  }

  render() {
    const menuItems = this.props.items.map((item) => {
      return (
        <li key={item.name} className={"fill-left " + (this.props.location.pathname === item.path ? "active" : '')}>
          <Link to = {`${item.path}`}>{item.name}</Link>
        </li>
      )
    });

    let OtherButton = (props) => {
      if (this.props.logedIn) {
        return <button className="btn btn-danger otherbtn" onClick={(e) => {localStorage.token = null; localStorage.userId=null; window.location.href='/';}}>Sign out</button>
      } else {
        return <button className="btn btn-primary otherbtn" onClick={(e) => {this.props.history.push('/register');}}>Register</button>
      }
    }

    return (
      <ul className="nav navbar-nav fill-right">
        {menuItems}
        <li><OtherButton /></li>
      </ul>
    );
  }
}

export default withRouter(MainNav);
