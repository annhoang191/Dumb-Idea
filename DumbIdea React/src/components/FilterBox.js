import React, { Component } from 'react';


class FilterBox extends Component {
  render() {
    return (
      <div className="FilterBox">
        <div className="filter panel panel-default">
          <div className="panel-heading">Chủ đề ý tưởng</div>
          <div className="panel-body">
            <div className="filter-box">
              <header className="clearfix">
                <label className="pull-left">Chọn chủ đề</label>
                <p className="checkbox pull-right">
                  <input type="checkbox" className="check-all" id="check-all-action" />Tất cả
                </p>
              </header>

              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="1" />Công nghệ
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="2" />Kinh doanh - Thương mại
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="3" />Nghệ thuật
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="4" />Ứng dụng
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="5" />Hoạt động xã hội
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" className="check-action check-item" id="6" />Nhảm nhí đột phá
                </p>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FilterBox;
