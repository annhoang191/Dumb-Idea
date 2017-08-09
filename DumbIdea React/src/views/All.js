import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListBox from '../components/ListBox';
import Sidebar from '../components/Explore/Sidebar';

class All extends Component {
  render() {
    const sidebarItems = [
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
    ];
    return(
      <div className="All">
        <section className="top-section">
          <div className="container-fluid">
            <h2 className="top-header text-center">
              Khám phá những ý tưởng sáng tạo nhất tại Dumb Idea
            </h2>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ListBox />
            </div>
            <div className="col-md-3">
              <Sidebar items={sidebarItems}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default All;
