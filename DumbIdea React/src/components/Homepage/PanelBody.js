import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class PanelBody extends Component {
  render() {

    return (
      <div className="PanelBody">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <img className="featurette-image img-responsive center-block" src="img/header-bg.jpg" alt="demo" />
              <h2><a href="idea.html">Tên ý tưởng</a>
              <span className="text-muted">Lĩnh vực</span></h2>
              <p>Mô tả ngắn gọn Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              <button type="button" className="btn btn-default">Chi tiết</button>
              <br></br>
              <br></br>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: Tên </p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: SĐT - Email</p>
            </div>

            <div className="col-md-6">
              <img className="featurette-image img-responsive center-block" src="img/header-bg.jpg" alt="demo" />
              <h2><a href="idea.html">Tên ý tưởng</a>
              <span className="text-muted">Lĩnh vực</span></h2>
              <p>Mô tả ngắn gọn Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              <button type="button" className="btn btn-default">Chi tiết</button>
              <br></br>
              <br></br>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: Tên </p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: SĐT - Email</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelBody;
