import React, { Component } from 'react';


class FilterBox extends Component {
  onChecked = (e) => {
    this.props.setFilter(e.target.id, e.target.checked);
  }

  render() {
    return (
      <div className="FilterBox">
        <div className="filter panel panel-default">
          <div className="panel-heading">Chủ đề ý tưởng</div>
          <div className="panel-body">
            <div className="filter-box">
              <header className="clearfix">
                <label className="pull-left">Chọn chủ đề</label>
                {/*
                <p className="checkbox pull-right">
                  <input type="checkbox" className="check-all" name="category" id="all" onClick={this.onChecked} />Tất cả
                </p>
                */}
              </header>

              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="technology" onClick={this.onChecked} />Công nghệ
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="business" onClick={this.onChecked} />Kinh doanh
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="art" onClick={this.onChecked} />Nghệ thuật
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="application" onClick={this.onChecked} />Ứng dụng
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="social" onClick={this.onChecked} />Xã hội
                </p>
              </p>
              <p className="input-block">
                <p className="checkbox">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" defaultChecked className="check-action check-item" name="category" id="other" onClick={this.onChecked} />Nhảm nhí đột phá
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
