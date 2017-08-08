import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class PanelBodyList extends Component {
  render() {
    return (
      <div className="PanelBodyList panel-body">
        <div className="row">
            <div className="col-md-4">
              <img src="img/dump.jpg" />
            </div>
            <div className="col-md-8">
              <h3>Tên<span className="text-muted"> Lĩnh vực</span></h3>
              <p>Mô tả ngắn gọn Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              <button type="button" className="btn btn-default">Chi tiết >></button>
            </div>
        </div>
      </div>
    );
  }
}

export default PanelBodyList;
