import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from './MainNav';

class Header extends Component {
  render() {
    const menuItems = [
      {
        name : "Thêm ý tưởng",
        path : "/addnewidea"
      },
      {
        name : "Top ý tưởng trong tuần",
        path : "/topidea"
      },
      {
        name : "Về chúng tôi",
        path : "/about"
      },
      {
        name : "Sign In",
        path :"/login"
      }
    ];

    return (
      <header className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#MainNav_nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Dumb Ideas</Link>
          </div>
          <nav className="collapse navbar-collapse" id="MainNav_nav">
            <MainNav items={menuItems}/>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
