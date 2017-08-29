import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from './MainNav';

class Header extends Component {
  render() {
    const menuItems = [
      {
        name : "Khám phá ý tưởng",
        subItems : [
          {
            name : "Tất cả",
            path : "/all"
          },
          {
            name : "Công nghệ",
            path : "/tech"
          },
          {
            name : "Kinh doanh - Thương mại",
            path : "/eco"
          },
          {
            name : "Nghệ thuật",
            path : "/art"
          },
          {
            name : "Ứng dụng - Đồ chơi",
            path : "/product"
          },
          {
            name : "Hoạt động xã hội",
            path : "/life"
          },
          {
            name : "Nhảm nhí",
            path : "/other"
          }
        ]
      },
      {
        name : "Thêm ý tưởng",
        path : "/addnewidea"
      },
      {
        name : "Top ý tưởng trong tuần",
        path : "/topidea"
      },
      {
<<<<<<< HEAD
        name : "Top người đóng góp",
        path : "/topcontributor"
      },
      {
        name : "Về chúng tôi",
        path : "/about"
=======
        name : "Về chúng tôi",
        path : "/about"
      },
      {
        name : "Sign In",
        path :"/login"
>>>>>>> 4c645e047ea8c48dacc3e93ead0efd97c30514dc
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
