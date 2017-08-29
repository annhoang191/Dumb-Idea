import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class PanelBodyList extends Component {
  render() {
    return (
      <div className="PanelBodyList panel-body">
        <div className="row">
            <div className="col-md-4">
              <img className = "img-responsive center-block" src={this.props.photo}  alt=""/>
            </div>
            <div className="col-md-8">
              <h3>{this.props.name}
                <span className="text-muted">{this.props.category}
                 <button type="button" className="btn btn-default">Chi tiết</button>
                </span>
              </h3>
              <p>{this.props.briefDescription}</p>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: {this.props.owner}</p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: SĐT - Email</p>
            </div>
        </div>
      </div>
    );
  }
}

export default PanelBodyList;
