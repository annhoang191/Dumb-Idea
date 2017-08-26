import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <article className="post style-3">
            <div className="media">
              <div className="media-left pull-left visible-lg visible-md">
                <img className="img-responsive media-object" src={ this.props.photo } />
              </div>
              <div className="media-body">
                <h6 className="entry-title"><a href="#">{ this.props.name }</a></h6>
                  <div className="entry-author"><span className="text-muted">Tác giả: </span>
                    <a href="#">{ this.props.owner.username }</a>
                    <button className="btn btn-sm btn-default btn-detail">Chi tiết</button>
                  </div>
                  <p>{ this.props.description }</p>
                  <div className="idea-footer">
                    <div className="rating"><i className="fa fa-star"></i> Độ khả thi (người dùng tự đánh giá): </div>
                      <div className="rating"><i className="fa fa-star-o"></i> Độ khả thi (tính trung bình): </div>
                      <div className="follower"><i className="fa fa-user-circle-o"></i> Số người theo dõi:</div>
                      <div className="likes"><i className="fa fa-comment"></i> Số lượt đánh giá: </div>
                  </div>
              </div>
            </div>
        </article>
        <hr />
      </div>
    );
  }
}

export default Box;
