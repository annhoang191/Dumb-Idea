import React, { Component } from 'react';

class MostPopularIdea extends Component {
  render() {
    return (
      <div className="MostPopularIdea">
        <div className="row top1-idea">
          <div className="col-md-6">
            <img className="img-responsive center-block" src="img/header-bg.jpg" />
          </div>
          <div className="col-md-6">
            <h4>Tên ý tưởng
              <span className="text-muted">Lĩnh vực</span></h4>
              <p>Mô tả ngắn gọn Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
              <button type="button" className="btn btn-default">Chi tiết</button><br></br>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: Tên </p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: SĐT - Email</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MostPopularIdea;
