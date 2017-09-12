import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import MainNav from './MainNav';
import Authentication from '../views/Authentication';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logedIn: null
    };
  }

  updateUserInfo = () => {
    Authentication.verify()
    .then(data => {
      if (data.error) {
        this.setState({
          logedIn: false
        })
      } else {
        this.setState({
          logedIn: true,
          token: localStorage.token,
          user: data
        })
      }
    })
    .catch(
      err => {
        console.log(err);
      }
    );
  }

  componentDidMount() {
    this.updateUserInfo();
  }

  render() {
    //if (this.state.logedIn === null) return null;
    if (this.state.token != localStorage.token) {
      this.setState({
        token: localStorage.token
      });
      this.updateUserInfo();
    }
    const menuItems = [
      {
        name : "Thêm ý tưởng",
        path : "/addnewidea"
      },
      {
        name : "Tất cả ý tưởng",
        path : "/topidea"
      },
      {
        name : "Về chúng tôi",
        path : "/about"
      },
    ];

    if (this.state.logedIn) {
      menuItems.push({
        name: this.state.user.username,
        path: "/profile/" + this.state.user._id
      });
    } else {
      menuItems.push({
        name: "Sign in",        
        path: "/login"
      })
    }

    let OtherButton = (props) => {
      if (this.state.logedIn) {
        return <button className="btn btn-danger otherbtn" onClick={(e) => {localStorage.token = null; localStorage.userId=null; window.location.href='/';}}>Sign out</button>
      } else {
        return <Link to="/register" className="registerbtn"><button className="btn btn-primary otherbtn">Register</button></Link>
      }
    }

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
            <OtherButton />
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
